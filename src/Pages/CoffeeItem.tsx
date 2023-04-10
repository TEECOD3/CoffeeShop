import CoffeeContainer from "../assets/Icons/CoffeeContainer";
import Ringer from "../assets/Icons/Ringer";
type coffeitemtype = {
  image: string;
  cofee: string;
  text: string;
};
const CoffeeItem = (props: coffeitemtype) => {
  const {} = props;
  return (
    <li className="flex gap-10 bg-yellow-500 max-md:w-[80%] max-md:mx-auto max-sm:w-full max-sm:gap-4 w-[90%] mx-auto space-y-4 ">
      <div className="relative">
        <Ringer />
        <div className="absolute top-[-0.4rem] left-5 h-full ">
          <CoffeeContainer height={100} />
        </div>
      </div>
      <div className=" w-full max-sm:w-[70%] max-md:w-[80%]">
        <h1 className="mb-2 text-4xl font-bold text-[#4F4F4F] max-sm:text-3xl">
          Cappuccino
        </h1>
        <p className="text-[#4F4F4F] text-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue
          nibh shhshs
        </p>
      </div>
    </li>
  );
};

export default CoffeeItem;
