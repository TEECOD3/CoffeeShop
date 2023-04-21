import CoffeeContainer from "../icon/CoffeeContainer";

import Ringer from "../icon/Ringer";
type coffeitemtype = {
  image: JSX.Element | string;
  cofee: string;
  text: string;
};
const LeftCoffeeItem = (props: coffeitemtype) => {
  const { image, cofee, text } = props;
  return (
    <li className="flex gap-4 mb-2">
      <div className="relative h-full">
        <Ringer />
        <div className="absolute top-[0.9rem] left-[1.3rem] h-full ">
          {image}
        </div>
      </div>
      <div className=" w-full max-sm:w-[90%] max-md:w-[80%]">
        <h1 className=" text-xl  font-bold text-[#4F4F4F] sm:text-2xl xl:text-3xl  ">
          {cofee}
        </h1>
        <p className="text-[#4F4F4F] text-medium text-sm md:text-base ">
          {text}
        </p>
      </div>
    </li>
  );
};

export default LeftCoffeeItem;
