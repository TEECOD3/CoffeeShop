import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

type swipperButtons = {
  className: string;
};

const SwipperNavbuttons = (props: swipperButtons) => {
  const { className } = props;
  const swiper = useSwiper();
  return (
    <div className={`flex gap-4 ${className}`}>
      <button
        className="p-2 border-2 rounded-full  active:bg-coffee-100 hover:bg-coffee-100 hover:text-white transition-all delay-300 duration-200"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft className="" />
      </button>
      <button
        className="p-2 border-2 rounded-full  active:bg-coffee-100 hover:bg-coffee-100 hover:text-white"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
export default SwipperNavbuttons;
