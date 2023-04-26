import { FC } from "react";
import cofeelove from "../../../assets/Images/loves.png";

interface CofeecardProps {}

const Cofeecard: FC<CofeecardProps> = () => {
  return (
    <div className="shadow-lg">
      <img src={cofeelove} alt="cofeeimage" className="" />
      <div className="font-bold mt-3 mb-3 px-2">Coffee Beans</div>
      <div className="text-[#828282] mb-4 px-2">$300</div>
    </div>
  );
};

export default Cofeecard;
