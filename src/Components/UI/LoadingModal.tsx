import { Loader2 } from "lucide-react";
import ReactDOM from "react-dom";
import Loader from "./Loader";

type Props = {
  text: string;
};

const BackgroundDrop = () => {
  return (
    <div className="fixed left-0 top-0 z-[2000] h-screen w-screen bg-black/50 text-white"></div>
  );
};

const Modal = ({ text }: Props) => {
  return (
    <div className="">
      <div className="fixed left-[50%] top-[50%] z-[2800] -translate-x-[50%] -translate-y-[50%]">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Loader className="text-white" />
          <h1 className=" animate-bounce text-sm font-medium capitalize text-white md:text-xl">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

const elements = document.getElementById("loader")!;

const LoadingModal = ({ text }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackgroundDrop />, elements)}
      {ReactDOM.createPortal(<Modal text={text} />, elements)}
    </>
  );
};

export default LoadingModal;
