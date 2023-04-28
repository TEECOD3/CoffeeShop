import { FC } from "react";
import blogimage from "../../../assets/Images/loves.png";

interface BlogCardProps {}

const BlogCard: FC<BlogCardProps> = () => {
  return (
    <div className="">
      <img src={blogimage} alt="" />
    </div>
  );
};

export default BlogCard;
