import React from "react";
import ProductCard from "./ProductCard";

const Products = ({products} ) => {
     
  return (
    <div className="py-10    ">
      <div className="flex items-center flex-col gap-4">
        <h1 className="container mx-auto px-4 text-center  bg-black py-3 w-72 text-white text-[20px] ">
          Shopping Now
        </h1>
        <hr className="bg-black border border-b-2 border-black  w-[100px] text-center" />
        <p className="text-gray-900 text-center max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          impedit omnis? Possimus totam voluptates ipsam minus deserunt commodi,
          voluptatibus numquam? Quidem harum amet, nulla eum sint voluptatem
          molestiae debitis. Error.
        </p>
      </div>
      <div className="mt-3 py-10 grid grid-cols-4 gap-10 mx-10 px-16  ">
         {
            products.map(product => <ProductCard product={product} />)
         }
      </div>
    </div>
  );
};

export default Products;
