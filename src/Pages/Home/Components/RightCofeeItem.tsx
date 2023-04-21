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
    <li className="flex gap-2 md:gap-4 md:w-full">
      <div className=" w-full max-sm:w-[70%] max-md:w-[80%]">
        <h1 className="mb-2 text-xl font-bold text-[#4F4F4F] sm:text-2xl xl:text-3xl capitalize ">
          {cofee}
        </h1>
        <p className="text-[#4F4F4F] text-medium text-sm md:text-base">
          {text}
        </p>
      </div>
      <div className="relative mt-2">
        <Ringer className="h-20 " />
        <div className="absolute top-[0.9rem] left-[1.3rem] sm:h-full ">
          {image}
        </div>
      </div>
    </li>
  );
};

export default RightCoffeeItem;
