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
    <div className="bg-(--background) my-[123px] mx-auto w-full max-w-[425px] h-[434px] md:p-[1.25em] z-10 md:max-w-[700px] lg:max-w-full xl:max-w-full xl:h-[694px] xl:flex justify-center items-center">
      <div
        id="container"
        className="w-full px-[20px] max-w-[425px] md:px-0 mt-[3em] xl:mt-0 mx-auto lg:max-w-[1000px] xl:max-w-[1199px] relative xl:h-[540px]"
      >
        <ReviewHeader prevReview={prevReview} nextReview={nextReview} />
        <ReviewBox id={id} title={title} date={date} message={message} />
        <ReviewBackgroundArt avatar={avatar} />
      </div>
    </div>
  );
};

export default Review;
