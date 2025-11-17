"use client";
import { useState } from "react";
import testemonials from "@/src/data/review.json";
import ReviewBackgroundArt from "./ReviewBackgroundArt";
import ReviewHeader from "./ReviewHeader";
import ReviewBox from "./ReviewBox";

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const prevReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? testemonials.length - 1 : prev - 1
    );
  };
  const nextReview = () => {
    setCurrentReview((prev) =>
      prev === testemonials.length - 1 ? 0 : prev + 1
    );
  };

  const { id, avatar, title, date, message } = testemonials[currentReview];

  return (
    <div className="bg-(--background) my-[123px] w-[425px] h-[434px] p-[1.25em] z-10 md:w-[700px] xl:w-full xl:h-[694px] xl:flex justify-center items-center">
      <div
        id="container"
        className="mt-[3em] xl:mt-0 xl:mx-auto xl:w-[1199px] relative xl:h-[540px]"
      >
        <ReviewHeader prevReview={prevReview} nextReview={nextReview} />
        <ReviewBox id={id} title={title} date={date} message={message} />
        <ReviewBackgroundArt avatar={avatar} />
      </div>
    </div>
  );
};

export default Review;
