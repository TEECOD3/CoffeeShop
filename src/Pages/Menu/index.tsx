import { Link, useNavigate, useLocation } from "react-router-dom";
import Cofeecard from "../Home/Components/CofeeCard";
import { useEffect } from "react";

const Menu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();
  return (
    <div className="p-32 mb-32 bg-hero h-full w-full">
      <div className="flex flex-colmax-w-7xl mx-auto gap-2 ">
        <main className="w-full h-full">
          <div className="w-full mx-auto  h-full flex gap-16 justify-center">
            <div className="w-[70%] grid grid-cols-3 gap-3">
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />

              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
            </div>
            <div className="w-[30%] bg-yellow-400">side</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Menu;
