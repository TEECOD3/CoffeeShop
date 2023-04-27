import { FC } from "react";
import { FiCoffee } from "react-icons/fi";
import { RiLoader2Fill } from "react-icons/ri";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { className } = props;
  return (
    <>
      <div className="absolute h-20 top-0 left-0  w-20 flex items-center justify-center">
        <FiCoffee className=" h-8 absolute w-8 z-[90000000] animate-ping text-white " />
        <RiLoader2Fill className=" h-6 absolute w-6 z-[90000000] animate-spin text-white top-8 left-6" />
      </div>
    </>
  );
};

export default Loader;
