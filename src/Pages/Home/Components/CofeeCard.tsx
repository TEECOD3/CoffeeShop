import { FC } from "react";
import cofeelove from "../../../assets/Images/loves.png";

interface CofeecardProps {}

const Cofeecard: FC<CofeecardProps> = () => {
  return (
    <div className="">
      <img src={cofeelove} alt="cofeeimage" className="" />
      <div className="">jjeje</div>
      <div className="">jejje</div>
    </div>
  );
};

export default Cofeecard;
