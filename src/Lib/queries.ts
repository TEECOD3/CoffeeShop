import { client } from "../client";
export const getAllCoffeeProducts = async () => {
  const response = await client.fetch(
    `*[_type == "coffeeProduct"]{
      name,
      slug,
      oldPrice,
      newPrice,
      inStock,
      description
      image{
        asset->{
          _id,
          url
        },
      },
     
    }`
  );

  if (!response.ok) {
    throw {messsage:"failed to fetch coffee products" , status:500};
  }

  return response.json;
};
