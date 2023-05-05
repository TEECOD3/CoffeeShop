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
        className="p-2 border-2 rounded-full  "
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft className="" />
      </button>
      <button
        className="p-2 border-2 rounded-full"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
export default SwipperNavbuttons;
