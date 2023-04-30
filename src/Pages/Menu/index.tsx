import React from "react";
import Input from "../../Components/Forms/Inputfield";

const Menu = () => {
  return (
    <div className="bg-red-300 py-28 h-[100vh]">
      <div className="flex flex-col h-[80vh] bg-blue-300 max-w-7xl mx-auto gap-2">
        <div className="bg-red-600">
          <Input placeholder="newest" type="" className="w-4/12 text-black">
            <option> yes</option>
          </Input>
        </div>
        <main className="w-full h-full  bg-red-700 ">
          <div className="w-full mx-auto  h-full flex gap-16 justify-center">
            <div className="bg-blue-800 w-[70%]">main</div>
            <div className="w-[30%] bg-yellow-400">side</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Menu;
