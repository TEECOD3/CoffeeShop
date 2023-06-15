import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import GoogleIcon from "./icons/Googleicon";
import loginimage from "../Login/icons/cofeeloin-transformed.png";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";
import LoadingModal from "../../Components/UI/LoadingModal";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../Firebase/config";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SetActiveUser } from "../../Store/Slices/AuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const [loading, setloading] = useState(false);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signInWithGoogle = () => {
    setloading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const username = user.displayName?.slice(0, 6);
        dispatch(SetActiveUser);
        setloading(false);
        navigate(from, { replace: true });
        toast.success(` successful login`, { icon: "🚀" });
      })
      .catch((error) => {
        setloading(false);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "" && password === "") return;
    setloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setloading(false);
        navigate(from, { replace: true });
        toast.success(` successful login`, { icon: "🚀" });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setloading(false);
      });

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="mb-40 flex items-center justify-center py-20 font-nunito md:pt-32">
      <div className="mx-auto flex flex-col-reverse justify-between gap-x-4 p-4 md:w-[70%] md:flex-row">
        <div className="flex flex-1 items-center justify-center md:p-4">
          {loading && <LoadingModal text="logging in.." />}
          <form className="md:w-4/5" onSubmit={submitHandler}>
            <h4 className=" text-center font-rails text-3xl font-bold capitalize text-lightdark md:text-left lg:text-4xl ">
              Welcome back
            </h4>
            <h5 className=" mb-3 mt-3 font-rails text-sm font-bold text-lightdark md:text-base">
              welcome back please enter your details
            </h5>

            <div className="formgroup ">
              <label
                htmlFor="email"
                className="text-sm capitalize md:text-base"
              >
                email
              </label>
              <Input
                ref={emailRef}
                inputs={{ id: "email" }}
                className="border-2 border-coffee-100"
              />
            </div>
            <div className="formgroup">
              <label
                htmlFor="password"
                className="text-sm capitalize md:text-base"
              >
                password
              </label>
              <Input
                ref={passwordRef}
                inputs={{ id: "password" }}
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

            <Button className="w-full text-sm font-bold">Sign in</Button>
            <Button
              className="mt-3 w-full space-x-2  border-2 border-coffee-100 text-sm font-bold"
              variant="ghost"
              onClick={signInWithGoogle}
            >
              <GoogleIcon className="h-6 w-6" />
              <span>sign in with google</span>
            </Button>

            <div
              onClick={() => {
                navigate("/Register");
              }}
              className="g:text-base mt-2 flex cursor-pointer items-center justify-center gap-x-3 text-sm font-bold capitalize text-lightdark md:mt-3"
            >
              <p>dont have an account ?</p>
              <span className="text-coffee-100">sign up</span>
            </div>
          </form>
        </div>
        <div className="flex h-[100px] items-center justify-center  bg-top md:h-[500px] md:flex-1">
          <img
            src={loginimage}
            alt="image of a coffee"
            className="flex w-full max-w-[100px] items-center justify-center bg-cover object-cover md:max-w-[400px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
