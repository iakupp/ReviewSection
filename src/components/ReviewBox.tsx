type ReviewBoxProps = {
  id: number;
  title: string;
  date: string;
  message: string;
};

const ReviewBox = ({ id, title, date, message }: ReviewBoxProps) => {
  return (
    <div
      key={id}
      id="review"
      className=" w-[337px] h-[207px] md:w-[550px] xl:w-[750px] mx-auto bg-(--review-box-bg) border-l-[5px] border-l-(--accent-color) pt-[20px] px-[20px] xl:mr-[4.8em] xl:mt-[1.5em] shadow-[7px_5px_19px_-5px_rgba(0,0,0,0.5)]"
    >
      <h1 className="text-[20px] text-(--accent-text)">{title}</h1>
      <p className="text-[16px] text-(--gray-text) mb-[20px]">{date}</p>
      <p className="text-[15px] text-(--accent-text) w-[292px] md:w-[500px] xl:w-[580px] line-clamp-4">
        {message}
      </p>
    </div>
  );
};

export default ReviewBox;
