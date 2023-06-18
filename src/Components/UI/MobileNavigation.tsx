import { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import Coffeelogo from "../../Pages/Home/icon/coffelogo";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoggedstate,
  selectUsername,
  RemoveActiveUser,
} from "../../Store/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
interface MobileNavProps {
  hideModalHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler } = props;
  const authstate = useSelector(selectLoggedstate);
  const username = useSelector(selectUsername);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const svgvariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.9,
      },
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0  h-full w-full bg-white z-[129030020039030920] flex items-start justify-start"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit="exit"
      >
        <MdOutlineClose
          className="text-3xl absolute text-black z-[8399] right-6 top-6"
          onClick={hideModalHandler}
        />
        <div className="w-full bg-cofee-100 px-10 py-4">
          <div className="">
            <Coffeelogo className="h-20 w-20 text-black" />
          </div>
          <ul className="flex flex-col gap-y-6 capitalize font-medium text-base mt-4 text-black">
            <li
              className="font-bold "
              onClick={() => {
                navigate("/menu");
                hideModalHandler();
              }}
            >
              shop
            </li>
            {authstate ? (
              <div>
                <li className="font-bold">my account</li>
              </div>
            ) : (
              <li
                className="font-bold"
                onClick={() => {
                  navigate("/login");
                  hideModalHandler();
                }}
              >
                sign in
              </li>
            )}
            <li
              className={`${
                authstate ? "w-full" : "w-28"
              } p-4  border-2 border-black rounded-lg  text-center font-bold `}
              onClick={() => {
                if (authstate) {
                  dispatch(RemoveActiveUser({ payload: "" }));
                }
                navigate("/register");
                hideModalHandler();
              }}
            >
              {authstate ? "logout" : "signup"}
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNav;
