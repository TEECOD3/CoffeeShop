import ReactDOM from "react-dom";

type Props = {};

const BackgroundDrop = () => {
  return <div className="fixed z-30 h-full w-full bg-black/30"></div>;
};

const Modal = () => {
  return (
    <div className="">
      <div className="fixed left-[50%] top-[50%] translate-x-[50%] translate-y-[50%]"></div>
    </div>
  );
};

const elements = document.getElementById("loader")!;

const LoadingModal = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackgroundDrop />, elements)}
      {ReactDOM.createPortal(<Modal />, elements)}
    </>
  );
};

export default LoadingModal;
