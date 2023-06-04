import { FC } from "react";
import Input from "../../../Components/Forms/Inputfield";

interface FiltercheckboxesProps {
  filterName: string;
}

const Filtercheckboxes: FC<FiltercheckboxesProps> = (props) => {
  const { filterName } = props;
  return (
    <form className=" flex items-center justify-center p-1 gap-1 ">
      <Input
        className=" cursor-pointer bg-coffee-100 text-coffee-100 accent-coffee-100 h-5 w-5 focus:ring-coffee-100 dark:ring-offset-gray-800 "
        inputs={{
          type: "checkbox",
          placeholder: "search category",
          id: "filterbycategory",
        }}
      />
      <label
        htmlFor="filterbycategory"
        className="text-sm sm:text-base font-semibold"
      >
        {filterName}
      </label>
    </form>
  );
};

export default Filtercheckboxes;
