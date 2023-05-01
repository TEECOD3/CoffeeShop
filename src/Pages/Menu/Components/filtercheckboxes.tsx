import { FC } from "react";
import Input from "../../../Components/Forms/Inputfield";

interface FiltercheckboxesProps {}

const Filtercheckboxes: FC<FiltercheckboxesProps> = () => {
  return (
    <form className=" flex items-center justify-center p-1 gap-1 ">
      <Input
        className=" cursor-pointer"
        inputs={{
          type: "checkbox",
          placeholder: "search category",
          id: "filterbycategory",
        }}
      />
      <label
        htmlFor="filterbycategory"
        className="text-sm sm:text-base font-medium"
      >
        espresso
      </label>
    </form>
  );
};

export default Filtercheckboxes;
