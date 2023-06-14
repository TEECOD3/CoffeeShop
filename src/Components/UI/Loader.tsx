import { BaggageClaimIcon } from "lucide-react";
import { FC } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { TbPaperBag } from "react-icons/tb";
import { RiLoader2Fill } from "react-icons/ri";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { className } = props;
  return (
    <>
      <div className="relative h-20 top-0 left-0  w-20 flex items-center justify-center">
        <TbPaperBag
          className={` ${className} h-8 absolute w-8 z-[90000000] animate-ping`}
        />
        <RiLoader2Fill
          className={`${className} h-6 absolute w-6 z-[90000000] animate-spin  top-8 left-6`}
        />
      </div>
    </>
  );
};

export default Loader;
