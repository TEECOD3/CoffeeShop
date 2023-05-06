import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import loginimage from "../Login/icons/cofeeloin-transformed.png";
import { Link, useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const navigate = useNavigate();
  return (
    <div className=" py-20 md:pt-32 mb-52 flex items-center justify-center font-nunito">
      <div className=" sm:w-[100%]  lg:w-[60%] mx-auto flex flex-col sm:flex-row justify-center items-center p-4 gap-x-4 ">
        <img
          src={loginimage}
          alt=""
          className="h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem] "
        />
        <div className="md:p-4  md:w-1/2 mx-auto flex items-center justify-center">
          <form className="">
            <h4 className=" text-2xl md:text-3xl font-bold text-lightdark  font-rails uppercase">
              Forgot password
            </h4>
            <h5 className="capitalize text-sm md:text-base font-bold font-rails mb-3 text-lightdark mt-3">
              enter the email address associated with your account and we will
              send you a link to reset your password
            </h5>

            <div className="formgroup ">
              <label
                htmlFor="email"
                className="capitalize text-sm md:text-base"
              >
                email
              </label>
              <Input
                inputs={{ id: "email" }}
                className="border-coffee-100 border-2"
              />
            </div>

            <Button className="w-full font-bold text-sm mt-4 ">continue</Button>

            <div
              onClick={() => {
                navigate("/Register");
              }}
              className="cursor-pointer flex items-center justify-center capitalize gap-x-3 mt-2 md:mt-3 text-lightdark font-bold text-sm md:text-base"
            >
              <p>dont have an account ?</p>
              <span className="text-coffee-100">sign up</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
