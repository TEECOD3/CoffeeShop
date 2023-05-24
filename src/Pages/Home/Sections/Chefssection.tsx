import { chefs } from "../../../Data/Cofee";

const Chefssection = () => {
  return (
    <section className=" my-10">
      <div className="mx-auto w-full text-center md:w-[60%]">
        <h2 className=" text-coffeeBlack mb-1 font-rails text-3xl font-bold capitalize text-[#333333]">
          Meet our chefs
        </h2>
        <p className=" text-md  text-medium mx-auto font-medium text-lightdark md:text-xl xl:w-3/5">
          Exploring Culinary Delights: A Chef's Passion for Creating Memorable
          Dining Experiences
        </p>
      </div>

      <div className="mx-auto my-8 grid w-full  grid-cols-2  gap-4 text-center md:grid-cols-4 lg:w-[80%] xl:flex-nowrap xl:gap-2">
        {chefs.map((chef) => (
          <div className="mx-auto h-full w-full px-2" key={chef.id}>
            <img src={chef.image} alt={chef.name} className="mx-auto" />
            <h3 className="mt-4 text-base font-bold">{chef.name}</h3>
            <h2>{chef.position}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefssection;
