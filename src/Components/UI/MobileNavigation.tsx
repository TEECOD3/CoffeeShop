import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import Coffeelogo from "../../Pages/Home/icon/coffelogo";
import { motion, AnimatePresence } from "framer-motion";
interface MobileNavProps {
  hideModalHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler } = props;

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
        className="fixed top-0 left-0  h-full w-full bg-white z-[129030020039030920] flex items-center justify-center"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit="exit"
      >
        <FaTimes
          className="text-3xl absolute text-coffee-100 z-[83999999999939939399339] right-2 top-2"
          onClick={hideModalHandler}
        />

        <div className="absolute top-4 left-4 h-10 w-10">
          <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 bg-coffee-100 rounded-full fill-red-300" />
        </div>
        <ul className="text-4xl space-y-4 capitalize font-rails font-medium text-coffee-100">
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
          >
            Menu
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
                delay: 0.6,
              },
            }}
          >
            {" "}
            blog{" "}
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
