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
        <Button className="absolute top-1/2 left-1/2 z-30 rounded-full bg-transparent hover:bg-white/50 h-16 w-16">
          {showbtn ? (
            <BsPlayFill
              onClick={handleplay}
              className="text-coffee-100  h-10 w-10"
            />
          ) : (
            <MdMotionPhotosPaused
              onClick={handlep}
              className="text-coffee-100 h-10 w-10"
            />
          )}
        </Button>
        <video autoPlay className="h-full w-full" ref={videoref}>
          <source src={video} />
        </video>
      </div>
    </>
  );
};

export default Userefplayer;
