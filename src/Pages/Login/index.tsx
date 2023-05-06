import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import GoogleIcon from "./icons/Googleicon";
import loginimage from "../Login/icons/cofeeloin-transformed.png";

const Login = () => {
  return (
    <div className="pt-28 mb-36 flex items-center justify-center font-nunito">
      <div className="md:w-[70%] mx-auto flex flex-col-reverse md:flex-row justify-between p-4 gap-x-4">
        <div className="flex-1 md:p-8  flex items-center justify-center">
          <form className="">
            <h4 className=" text-2xl md:text-4xl font-bold text-lightdark capitalize">
              login
            </h4>
            <h5 className=" text-sm md:text-base font-bold text-lightdark mt-3">
              welcome back please enter your details
            </h5>

            <div className="formgroup p-2">
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
            <div className="formgroup p-2">
              <label
                htmlFor="password"
                className="capitalize text-sm md:text-base"
              >
                password
              </label>
              <Input
                inputs={{ id: "password" }}
                className="border-coffee-100 border-2"
              />
            </div>
            <div className="formgroup p-2">
              <label
                htmlFor="confirm password"
                className="capitalize text-sm md:text-base"
              >
                conifrm password
              </label>
              <Input
                inputs={{ id: "confirm password" }}
                className="border-coffee-100 border-2"
              />
            </div>

            <div className="flex justify-between my-2">
              <div className="formgroup flex items-center gap-x-1">
                <Input
                  inputs={{ type: "checkbox" }}
                  className="border-coffee-100 w-5"
                />
                <label
                  htmlFor=""
                  className=" text-sm font-nunito font-bold text-lightdark  "
                >
                  remember for 30days
                </label>
              </div>
              <p className="text-sm font-nunito font-bold text-lightdark">
                forgot password?
              </p>
            </div>

            <Button className="w-full font-bold text-sm  ">Sign in</Button>
            <Button
              className="w-full font-bold text-sm  mt-3 border-2 border-coffee-100 space-x-2"
              variant="ghost"
            >
              <GoogleIcon className="h-6 w-6" />{" "}
              <span>sign in with google</span>
            </Button>

            <div className="flex items-center justify-center capitalize gap-x-3 mt-2 md:mt-3 text-lightdark font-bold text-sm md:text-base">
              <p>dont have an account ?</p>
              <span>sign up</span>
            </div>
          </form>
        </div>
        <div className="bg-top md:flex-1 flex items-center  justify-center h-[100px] md:h-[500px]">
          <img
            src={loginimage}
            alt="image of a coffee"
            className="object-cover max-w-[100px] md:max-w-[400px] bg-cover w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
