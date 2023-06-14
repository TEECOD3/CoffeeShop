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
import { useNavigate } from "react-router-dom";
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
        className="fixed top-0 left-0  h-full w-full bg-coffee-100 z-[129030020039030920] flex items-start justify-start"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit="exit"
      >
        <MdOutlineClose
          className="text-3xl absolute text-white z-[8399] right-6 top-6"
          onClick={hideModalHandler}
        />
        <div className="w-full bg-cofee-100 px-10 py-4">
          <div className="">
            <Coffeelogo className="h-16 w-16 text-coffee-100" />
          </div>
          <ul className="flex flex-col gap-y-6 capitalize font-medium text-base mt-4 text-white">
            <li>menu</li>
            {authstate ? (
              <li>my account</li>
            ) : (
              <li
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
              } p-4  border-2 border-white rounded-lg  text-center`}
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
