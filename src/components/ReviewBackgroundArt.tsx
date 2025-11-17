import Image from "next/image";
import qoutation from "@/public/quotation.svg";
import dotsLarge from "@/public/dots1.svg";
import dotsSmall from "@/public/dots.svg";

type ReviewAvatarProps = {
  avatar: string;
};

const ReviewBackgroundArt = ({ avatar }: ReviewAvatarProps) => {
  return (
    <>
      <div className="hidden xl:block absolute top-[50%] translate-y-[-50%] left-[1em] -z-1 bg-(--avatar-bg) w-[414px] h-[345px]"></div>
      <Image
        src={avatar}
        alt="avatar"
        width={630}
        height={420}
        className="hidden xl:block absolute top-[1.4em] left-[-5em] -z-1"
      />
      <Image
        src={qoutation}
        alt="quotation"
        className="hidden xl:block absolute left-[21em] top-[12%]"
      />
      <div id="dots">
        <Image
          src={dotsLarge}
          alt="dots"
          className="absolute bottom-[-.7em] left-[2.5em] md:left-[4.5em] xl:left-[20.5em] xl:bottom-[.9em] z-[-1]"
        />
        <Image
          src={dotsSmall}
          alt="dots"
          className="absolute bottom-[-3.3em] left-[2.5em] md:left-[4.5em] xl:left-[20.5em] xl:bottom-[-1.8em] z-[-1]"
        />
      </div>
    </>
  );
};

export default ReviewBackgroundArt;
