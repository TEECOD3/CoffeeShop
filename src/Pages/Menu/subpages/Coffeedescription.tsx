import React from "react";

type descriptionprop = {
  description?: string;
};

const Coffeedescription = (props: descriptionprop) => {
  const { description } = props;
  return (
    <div className="mb-10 bg-red-300">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nulla
      beatae, officiis temporibus optio quidem nostrum id vitae iste quos
      assumenda voluptates! Minus facere accusantium quibusdam aspernatur vero
      fuga ullam!
    </div>
  );
};

export default Coffeedescription;
