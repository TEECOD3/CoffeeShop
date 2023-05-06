import React from "react";
import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import { ArrowBack } from "@mui/icons-material";

const Checkoutpage = () => {
  return (
    <div className=" py-24 lg:py-48">
      <div className=" w-full md:max-w-6xl mx-auto flex flex-col md:flex-row lg:px-2  space-y-2 md:justify-between gap-3">
        <div className="md:flex-[2] lg:p-3">
          <form action="">
            <h4>shipping address</h4>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%] md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
              <div className="inputcontrol  w-[90%] md:w-1/2">
                <label htmlFor="">firstname</label>
                <Input />
              </div>
            </div>
          </form>

          <div className="">
            <h4 className="px-2">billing address</h4>
            <div className="flex w-[14rem] items-center justify-center ">
              <Input inputs={{ type: "checkbox" }} className="h-3 w-3" />
              <label htmlFor="">same as shipping address?</label>
            </div>
          </div>

          <div className="w-full flex gap-3 md:gap-6 lg:gap-10 mt-3  flex-col lg:flex-row">
            <Button className="w-2/3 mx-auto md:w-1/2 flex gap-x-3">
              <ArrowBack /> back to cart
            </Button>
            <Button className=" w-2/3 mx-auto md:w-1/2">
              proceed to shipping
            </Button>
          </div>
        </div>
        <div className="md:w-[25rem] bg-blue-300">right</div>
      </div>
    </div>
  );
};

export default Checkoutpage;
