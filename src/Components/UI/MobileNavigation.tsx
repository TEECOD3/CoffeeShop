import { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import Coffeelogo from "../../Pages/Home/icon/coffelogo";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
interface MobileNavProps {
  hideModalHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler } = props;

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
        className="fixed top-0 left-0  h-full w-full bg-coffee-100 z-[129030020039030920] flex items-center justify-start"
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

        <ul className="text-3xl space-y-8 p-10 capitalize font-rails font-medium text-white">
          <NavLink to="/menu">
            <motion.li
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
              onClick={hideModalHandler}
              className="mb-7"
            >
              <li>
                <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 bg-coffee-100 rounded-full fill-red-300" />
              </li>
            </motion.li>
          </NavLink>
          <NavLink to="/menu">
            <motion.li
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
              onClick={hideModalHandler}
            >
              <li>Menu</li>
            </motion.li>
          </NavLink>

          <motion.li
            variants={item}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 30,
              transition: {
                ease: "easeInOut",
                delay: 0.4,
              },
            }}
          >
            Shop
          </motion.li>
          <motion.li
            variants={item}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 24,
              transition: {
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
          >
            contact us
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
};

export default MobileNav;
