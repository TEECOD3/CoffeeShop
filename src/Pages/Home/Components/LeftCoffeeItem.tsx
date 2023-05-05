import CoffeeContainer from "../icon/CoffeeContainer";
import image from "../../../Data/images/jamaican-blue-mountain-coffee-coffee-bag-down-east-coffee-drink-coffee-sack-700246164a09d47271f422efc3b3229a.png";

type coffeitemtype = {
  image: JSX.Element | string;
  cofee: string;
  text: string;
};
const LeftCoffeeItem = (props: coffeitemtype) => {
  const { image, cofee, text } = props;
  return (
    <li className="flex gap-4 mb-2 w-full">
      <div className="relative h-1/2 md:h-full ">
        <div className="">{image}</div>
      </div>
      <div className=" w-full max-sm:w-[90%] max-md:w-[80%] ">
        <h1 className=" text-base font-bold text-[#4F4F4F] sm:text-2xl xl:text-3xl capitalize  ">
          {cofee}
        </h1>
        <p className="text-[#4F4F4F] text-medium text-sm md:text-base  sm:w-full ">
          {text}
        </p>
      </div>
    </li>
  );
};

export default LeftCoffeeItem;
