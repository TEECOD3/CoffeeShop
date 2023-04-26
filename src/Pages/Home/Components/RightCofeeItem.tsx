import CoffeeContainer from "../icon/CoffeeContainer";
import Ringer from "../icon/Ringer";
type rightcoffeitemtype = {
  image: string | JSX.Element;
  cofee: string;
  text: string;
};
const RightCoffeeItem = (props: rightcoffeitemtype) => {
  const { image, cofee, text } = props;
  return (
    <li className="flex gap-0 md:gap-4 md:w-full">
      <div className=" w-full max-md:w-[80%] ml-1">
        <h1 className=" text-xl font-bold text-[#4F4F4F] sm:text-2xl xl:text-3xl capitalize   ">
          {cofee}
        </h1>
        <p className="text-[#4F4F4F] text-medium text-sm md:text-base  w-4/5 sm:w-full">
          {text}
        </p>
      </div>
      <div className="relative mt-2 ">
        <div className="md:absolute md:top-[0.9rem] md:left-[0.2rem]  ml-[-2.8rem] sm:ml-0 ">
          {image}
        </div>
      </div>
    </li>
  );
};

export default RightCoffeeItem;
