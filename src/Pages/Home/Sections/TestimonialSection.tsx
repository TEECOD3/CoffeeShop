
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "../Components/testimonialCard";
import { testimonials } from "../../../Data/Cofee";
import Userefplayer from "../Components/Userefplayer";

const TestimonialSection = () => {
  return (
    <section className="mx-auto lg:my-32 lg:w-[80%] ">
      <div className="flex flex-col lg:flex-row ">
        <div className=" relative w-full  bg-black/90 p-2 lg:w-1/2">
          <div className="absolute  left-0 top-0 h-full w-full bg-hero bg-cover "></div>
          <div className="text-center">
            <h4 className="mt-4 capitalize text-white">testimonial</h4>
            <h2 className=" text-coffeeBlack mb-1 font-rails text-2xl font-extrabold capitalize text-[#ffffff]">
              Our customers say
            </h2>
          </div>
          <div className="">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              speed={1100}
              className="sm-h-full relative flex w-full items-center justify-start md:h-full "
            >
              {testimonials.map((testimony) => (
                <SwiperSlide
                  key={testimony.id}
                  className="mb-4 transition-all delay-75 ease-in-out"
                >
                  <Testimonial
                    image={testimony.image}
                    name={testimony.name}
                    description={testimony.testimonial}
                    key={testimony.id}
                    position={testimony.position}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className=" relative mt-1  w-full bg-black/90 sm:mt-0 lg:w-1/2">
          <Userefplayer />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
