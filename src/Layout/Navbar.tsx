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
import { BsCaretDown, BsPersonCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {
  RemoveActiveUser,
  SetActiveUser,
  selectLoggedstate,
} from "../Store/Slices/AuthSlice";
import {
  cartbasket,
  cartstate,
  setCartmodal,
  totalqty,
} from "../Store/Slices/cartslice";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../../components/ui/menubar";

const Navbar = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [username, setusername] = useState<any>(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedstate);
  const navigate = useNavigate();
  const cartmodal = useSelector(cartstate);
  const qtyAmount = useSelector(totalqty);
  const cartitems = useSelector(cartbasket);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (user.displayName === null) {
          const u1 = "user";
          setusername(u1);
        } else {
          const userdisplayname = user.displayName.split(" ");
          const firstname = userdisplayname[0];
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

  const CartHandler = () => {
    dispatch(setCartmodal({ payload: 0 }));
  };

  const logoutHandler = (): any => {
    signOut(auth)
      .then(() => {
        dispatch(RemoveActiveUser());
        navigate("/");
        toast.success("logged out sucessfully");
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
      <div className="fixed z-[1000] flex w-full bg-[#f6f6f6]  px-2 sm:px-8">
        <div className="mx-auto  flex h-full w-full items-center justify-between lg:max-w-[80%]">
          <div className=" text-xl font-bold capitalize">
            <Link to="/">
              <Coffeelogo className="h-20 w-20" />
            </Link>
          </div>

          <ul
            className={`item-end hidden items-center  justify-around font-bold text-white md:flex `}
          >
            <NavLink to="/menu">
              <li className="text-black ">Shop</li>
            </NavLink>
          </ul>

          <div className="flex items-center justify-center gap-x-8">
            <div
              onClick={CartHandler}
              className=" relative hidden cursor-pointer md:block"
            >
              <HiOutlineShoppingBag className="text-2xl font-extrabold" />
              {cartitems.length === 0 ? (
                ""
              ) : (
                <div className="absolute -bottom-1 -right-2 flex h-4 w-4 items-center  justify-center rounded-full bg-black text-center text-sm text-white">
                  {cartitems.length}
                </div>
              )}
            </div>
            <ul className="hidden items-center justify-center gap-x-2 md:flex">
              {isLoggedIn ? (
                <NavLink to="/">
                  <div className="flex items-center justify-center gap-x-3">
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className="flex gap-x-3 rounded-lg bg-black py-3 capitalize text-white ">
                          <span>hi {username}</span>
                          <BsCaretDown className="text-white" />
                        </MenubarTrigger>
                        <MenubarContent className=" text=white z-[1000000000] flex w-32 cursor-pointer flex-col items-center justify-center gap-y-2 bg-black text-center text-white ">
                          <MenubarItem className="p-2 px-3">
                            Account
                          </MenubarItem>
                          <MenubarSeparator className="h-[1px] w-full bg-white" />
                          <MenubarItem className="cursor-pointer p-2 px-3 ">
                            <span
                              className="capitalize"
                              onClick={logoutHandler}
                            >
                              logout
                            </span>
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </div>
                </NavLink>
              ) : (
                <Link to="/login">
                  <li className="flex w-20 items-center justify-center rounded-lg border-2 border-black py-1  text-base font-bold">
                    login
                  </li>
                </Link>
              )}
              {!isLoggedIn && (
                <Link to="/register">
                  <li className="flex w-20 items-center justify-center rounded-lg bg-black py-1 text-base font-bold text-white">
                    create
                  </li>
                </Link>
              )}
            </ul>
          </div>

          <ul className="flex items-center justify-center gap-4 px-2 md:hidden ">
            <div onClick={CartHandler} className=" relative ">
              <HiOutlineShoppingBag className="text-2xl font-extrabold" />
              {cartitems.length === 0 ? (
                ""
              ) : (
                <div className="absolute -bottom-1 -right-2 flex h-4 w-4 items-center  justify-center rounded-full bg-black text-center text-sm text-white">
                  {cartitems.length}
                </div>
              )}
            </div>

            <li className="">
              <Menu className="text-black" onClick={openModalHandler} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
