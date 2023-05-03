import { FC } from "react";
import blogimage from "../../../assets/Images/loves.png";
import { BsCalendarWeek } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Button from "../../../Components/UI/Button";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {}

const BlogCard: FC<BlogCardProps> = () => {
  const navigate = useNavigate();
  return (
    <div className=" mx-auto w-full md:w-10/12  shadow-lg">
      <img
        src={blogimage}
        alt="blog image"
        className="mx-auto w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-center justify-start w-full text-lightdark">
          <div className="flex items-center">
            <BsCalendarWeek className="text-coffee-100" />
            <span className="ml-2 text-sm ">10 Feb,2022</span>
          </div>

          <div className="flex items-center ml-6">
            <CgProfile className="text-coffee-100" />
            <span className="ml-2 text-sm">By Ataur</span>
          </div>
        </div>

        <h4 className="text-sm mt-4 font-bold text-lightdark xl:text-base">
          Simple coffee Recipes for Next Spring !
        </h4>
        <p className="text-sm mt-4 text-lightdark ">
          Volunteering is a great way to give back to your community while also
          improving your own well-being. Studies have shown that people who
          volunteer on a regular basis have lower levels of stress and
          depression
        </p>

        <Button
          onClick={() => {
            navigate("/blog");
          }}
          className="mt-5 bg-transparent py-6 text-sm  hover:bg-coffee-100 hover:text-white text-coffee-100 border-2 border-coffee-100"
        >
          <span className="font-light mr-4 ">Read more</span>
          <span className=" md:text-2xl">&#8594;</span>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
