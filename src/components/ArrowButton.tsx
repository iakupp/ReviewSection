import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type Props = {
  onClick: () => void;
  reverse?: boolean;
  primary?: boolean;
};

const ArrowButton = ({ onClick, reverse = false, primary = false }: Props) => (
  <div
    className={`h-[23px] w-[23px] xl:h-[35px] xl:w-[35px] rounded-full flex justify-center items-center cursor-pointer ${
      primary ? "bg-(--accent-color)" : "bg-(--arrow-bg)"
    }`}
    onClick={onClick}
  >
    <MdOutlineKeyboardArrowLeft
      className={`${
        reverse ? "rotate-180 text-white" : "text-(--accent-color)"
      } xl:text-[25px]`}
    />
  </div>
);
export default ArrowButton;
