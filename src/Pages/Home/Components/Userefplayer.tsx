import video from "../../Home/testimonialsImages/cofeevideo.mp4";
import { FC, useRef, useState } from "react";
import Button from "../../../Components/UI/Button";
import { MdMotionPhotosPaused } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";

interface userefplayerProps {}

const Userefplayer: FC<userefplayerProps> = () => {
  const videoref = useRef<HTMLVideoElement | null>(null);
  const [showbtn, setbtn] = useState(true);

  const handleplay = () => {
    setbtn(false);
    videoref.current?.play();
  };

  const handlep = () => {
    setbtn(true);
    videoref.current?.pause();
  };

  return (
    <>
      <div className="h-full">
        <Button className="absolute top-[40%]  left-[43%] md:top-[45%] md:left-[45%] z-30  rounded-full bg-transparent hover:bg-white/50 h-16 w-16">
          {showbtn ? (
            <BsPlayFill
              onClick={handleplay}
              className="text-coffee-200  h-10 w-10"
            />
          ) : (
            <MdMotionPhotosPaused
              onClick={handlep}
              className="text-coffee-200 h-10 w-10"
            />
          )}
        </Button>
        <video autoPlay className="h-full object-cover" ref={videoref}>
          <source src={video} />
        </video>
      </div>
    </>
  );
};

export default Userefplayer;
