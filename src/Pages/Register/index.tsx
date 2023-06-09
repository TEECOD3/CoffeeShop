import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import GoogleIcon from "../Login/icons/Googleicon";
import loginimage from "../Login/icons/cofeeloin-transformed.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/config";
import LoadingModal from "../../Components/UI/LoadingModal";
const Register = () => {
  const navigate = useNavigate();
  const emailref = useRef<HTMLInputElement>(null!);
  const passwords = useRef<HTMLInputElement>(null!);
  const confirmpasswordref = useRef<HTMLInputElement>(null!);
  const [loading, setloading] = useState(false);

  const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailref.current.value;
    const password = passwords.current.value;
    const confirms = confirmpasswordref.current.value;

    if (password !== confirms) {
      return toast.error("The Password Does not match try again");
    }

    const formatEmail = email.trim().toLowerCase();
    setloading(true);

    createUserWithEmailAndPassword(auth, formatEmail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setloading(false);
        toast.success("Account Created");
        navigate("/menu");
      })
      .catch((error) => {
        setloading(false);
        toast.error(error.message);
      });
    emailref.current.value = "";
    passwords.current.value = "";
    confirmpasswordref.current.value = "";
  };

  return (
    <div className=" mb-36 flex items-center justify-center py-16 font-nunito md:pt-28">
      <div className="mx-auto flex flex-col-reverse justify-between gap-x-4 p-4 md:flex-row lg:w-[70%]">
        <div className="flex flex-1  items-center justify-center md:p-8">
          {loading && <LoadingModal text="creating account" />}
          <form className="md:w-4/5" onSubmit={SubmitHandler}>
            <h4 className="text-center font-rails  text-3xl font-bold capitalize text-lightdark md:text-left md:text-4xl">
              Register
            </h4>
            <h5 className=" mt-3 font-rails text-sm font-bold capitalize text-lightdark md:text-base">
              to register please enter your details
            </h5>

            <div className="formgroup w-full p-2  ">
              <label
                htmlFor="email"
                className="text-sm capitalize md:text-base"
              >
                email
              </label>
              <Input
                required
                ref={emailref}
                inputs={{ id: "email", type: "email" }}
                className="w-full border-2 border-coffee-100"
              />
            </div>
            <div className="formgroup p-2">
              <label
                htmlFor="password"
                className="text-sm capitalize md:text-base"
              >
                password
              </label>
              <Input
                ref={passwords}
                required
                inputs={{ id: "password", type: "password" }}
                className="border-2 border-coffee-100"
              />
            </div>
            <div className="formgroup p-2">
              <label
                htmlFor="confirm password"
                className="text-sm capitalize md:text-base"
              >
                conifrm password
              </label>
              <Input
                ref={confirmpasswordref}
                required
                inputs={{ id: "confirmpassword", type: "password" }}
                className="border-2 border-coffee-100"
              />
            </div>

            <div className="my-2 flex justify-between">
              <div className="formgroup flex items-center gap-x-1">
                <Input
                  inputs={{ type: "checkbox" }}
                  className="w-5 border-coffee-100"
                />
                <label
                  htmlFor=""
                  className=" font-nunito text-sm font-bold text-lightdark  "
                >
                  remember for 30days
                </label>
              </div>
              <p
                className="cursor-pointer font-nunito text-sm font-bold text-lightdark hover:text-coffee-100"
                onClick={() => {
                  navigate("/forgotpassword");
                }}
              >
                forgot password?
              </p>
            </div>

            <Button
              className="w-full text-sm font-bold  "
              type="submit"
              isLoading={loading}
            >
              {loading ? "creating account..." : "Sign up"}
            </Button>
            <Button
              className="mt-3 w-full cursor-pointer space-x-2  border-2 border-coffee-100 text-sm font-bold"
              variant="ghost"
            >
              <GoogleIcon className="h-6 w-6" />
              <span>sign up with google</span>
            </Button>

            <div className="mt-2 flex items-center justify-center gap-x-3 text-sm font-bold capitalize text-lightdark md:mt-3 md:text-base">
              <p className="capitalize"> have an account ?</p>
              <span
                className="cursor-pointer text-coffee-100 "
                onClick={() => {
                  navigate("/login");
                }}
              >
                sign in
              </span>
            </div>
          </form>
        </div>
        <div className="flex h-[100px] items-center justify-center  bg-top md:h-[500px] md:flex-1">
          <img
            src={loginimage}
            alt="image of a coffee"
            className="w-full max-w-[100px] bg-cover object-cover md:max-w-[400px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
