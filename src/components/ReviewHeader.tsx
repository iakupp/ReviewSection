import ArrowButton from "./ArrowButton";

type ReviewHeaderProps = {
  prevReview: () => void;
  nextReview: () => void;
};

const ReviewHeader = ({ prevReview, nextReview }: ReviewHeaderProps) => {
  return (
    <>
      <div className="flex justify-between xl:items-end w-[337px] md:w-[550px] mx-auto xl:w-[700px] xl:mr-[5em] xl:pt-[11.5em]">
        <div className="mb-[10px] xl:mb-0 xl:ml-[40px]">
          <h2 className="text-(--accent-color) font-[17px]">MatAlarm</h2>
          <h1 className="font-normal text-[22px] xl:text-[32px]">
            Recenze zákazníků
          </h1>
        </div>
        <div className="flex gap-2 xl:mb-[18px]">
          <ArrowButton onClick={prevReview} />
          <ArrowButton onClick={nextReview} primary reverse />
        </div>
      </div>
    </>
  );
};

export default ReviewHeader;
