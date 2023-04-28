import { FC } from "react";
import Quotes from "../icon/quotes";
import testimo from "../../../Data/images/testimonialsImages/testimonial5.jpg";

interface TestimonialProps {
  name: string;
  description: string;
  position: string;
  image: string;
}

const Testimonial: FC<TestimonialProps> = (props: TestimonialProps) => {
  const { name, description, position, image } = props;
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <Quotes />
      <p className=" lg:w-1/2 mx-auto mb-2 text-white">{description}</p>
      <img
        src={image}
        alt="testimonialimage"
        className="rounded-full h-16 w-16 bg-cover mb-2"
      />
      <h3 className="mb-2 text-white">{name}</h3>
      <h4 className="text-white mb-4">{position}</h4>
    </div>
  );
};

export default Testimonial;
