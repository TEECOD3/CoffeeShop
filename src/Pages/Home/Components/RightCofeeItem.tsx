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
    <li className="flex md:gap-4 md:w-full">
      <div className=" w-full max-md:w-[80%] ml-4">
        <h1 className=" text-xl font-bold text-[#4F4F4F] sm:text-2xl xl:text-3xl capitalize   ">
          {cofee}
        </h1>
        <p className="text-[#4F4F4F] text-medium text-sm md:text-base">
          {text}
        </p>
      </div>
      <div className="relative mt-2 ">
        <Ringer className="h-16 hidden md:block " />
        <div className="md:absolute md:top-[0.9rem] md:left-[1.3rem] ">
          {image}
        </div>
      </div>
    </li>
  );
};

export default RightCoffeeItem;
