import ArrowButton from "./ArrowButton";

type ReviewHeaderProps = {
  prevReview: () => void;
  nextReview: () => void;
};

const ReviewHeader = ({ prevReview, nextReview }: ReviewHeaderProps) => {
  return (
    <>
      <div className="flex justify-between xl:items-end w-full max-w-[425px] md:max-w-[550px] mx-auto xl:max-w-[700px] xl:mr-[5em] xl:pt-[11.5em]">
        <div className="mb-[10px] xl:mb-0 xl:ml-[40px]">
          <h2 className="text-(--accent-color) text-[17px] lg:text-[22px]">
            MatAlarm
          </h2>
          <h1 className="text-[22px] xl:text-[32px]">Recenze zákazníků</h1>
        </div>
        <div className="flex gap-2 xl:mb-[7px]">
          <ArrowButton onClick={prevReview} />
          <ArrowButton onClick={nextReview} primary reverse />
        </div>
      </div>
    </>
  );
};

export default ReviewHeader;
