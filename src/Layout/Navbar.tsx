import { FaSistrix } from "react-icons/fa";
import Coffeelogo from "../Pages/Home/icon/coffelogo";
import MobileNav from "../Components/UI/MobileNavigation";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { LogInIcon, Menu } from "lucide-react";
import { BsPerson, BsPersonCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveActiveUser,
  SetActiveUser,
  selectLoggedstate,
} from "../Store/Slices/AuthSlice";
import { Logout, LogoutSharp } from "@mui/icons-material";

const Navbar = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [username, setusername] = useState<any>(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedstate);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (user.displayName === null) {
          const u1 = user.email?.substring(0, user.email.indexOf("@"));
          setusername(u1);
        } else {
          const userdisplayname = user.displayName.split(" ");
          const firstname = userdisplayname.at(0);
          setusername(firstname);
        }
        dispatch(
          SetActiveUser({
            email: user.email,
            userName: user.displayName ? user.displayName : username,
            userID: uid,
          })
        );
      }
    });
  }, []);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        toast.success("logged out sucessfully");
        dispatch(RemoveActiveUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        toast.error(error.message);
        // An error happened.
      });
  };

  const openModalHandler = () => {
    setModalOpen(!ModalOpen);
  };

  const hidemodalHandler = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <AnimatePresence>
        {ModalOpen && <MobileNav hideModalHandler={hidemodalHandler} />}
      </AnimatePresence>
      <div className="fixed z-[1000] flex w-full bg-black px-2 sm:px-8">
        <div className="mx-auto  flex h-full w-full items-center justify-between lg:max-w-[70%]">
          <div className="text-2xl font-bold capitalize text-white ">
            <Link to="/">
              <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
            </Link>
          </div>

          <ul
            className={`item-end hidden justify-around  text-white md:flex items-center  ${
              isLoggedIn ? "w-[50%] xl:w-[30%]" : " w-[20%]"
            } `}
          >
            <NavLink to="/menu">
              <li>Shop</li>
            </NavLink>

            {isLoggedIn && (
              <NavLink to="/" onClick={logoutHandler}>
                <li>
                  <LogInIcon />
                </li>
              </NavLink>
            )}

            <li className="flex items-center justify-center">
              <FaSistrix className="text-2xl text-white" />
            </li>

            <li className="relative">
              {isLoggedIn && (
                <NavLink to="/">
                  <div className="flex gap-x-3 items-center justify-center">
                    <BsPersonCheck className="text-3xl text-white" />
                    <div className="text-sm capitalize bg-coffee-100 p-2 rounded-lg">
                      hi {username}
                    </div>
                  </div>
                </NavLink>
              )}
              {!isLoggedIn && (
                <NavLink to="/login">
                  <div className="flex">
                    <h2>login</h2>
                  </div>
                </NavLink>
              )}
            </li>

            <li className="relative ">
              <div className="item-center  absolute -right-2 -top-2 flex h-5 w-5  justify-center rounded-full bg-coffee-100 text-sm text-white">
                3
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </li>
          </ul>

          <ul className="flex items-center justify-center gap-4 px-2 md:hidden ">
            <li>
              {isLoggedIn && (
                <NavLink to="" onClick={logoutHandler}>
                  <li className="relative">
                    <LogoutSharp className="text-3xl text-white" />
                  </li>
                </NavLink>
              )}
            </li>
            <li className="">
              <Link to="/Cart">
                <li className="relative">
                  <div className="item-center  absolute -right-2 -top-2 flex h-5 w-5 justify-center rounded-full bg-coffee-100 text-sm text-white">
                    3
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-bag text-white"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" x2="21" y1="6" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </li>
              </Link>
            </li>
            {isLoggedIn ? (
              <NavLink to="/login">
                <li className="relative">
                  <BsPersonCheck className="text-3xl text-white" />
                </li>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <li className="relative text-white">
                  <h3>login</h3>
                </li>
              </NavLink>
            )}

            <li className="">
              <Menu className="text-white" onClick={openModalHandler} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
