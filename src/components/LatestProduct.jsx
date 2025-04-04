import React from "react";
import MainTitle from "./ui/MainTitle";
import { latestProduct } from "../utils/constants";

const LatestProduct = () => {
  return (
    <section>
      <MainTitle title="Leatest Products" className="" />
       
      <div className=" my-4">
        <nav>
          <ul className="flex justify-center items-center gap-8">
            <li><a href="" className=" text-accent-0 underline">New Arrival</a></li>
            <li><a href="">Best Seller</a></li>
            <li><a href="">Featured</a></li>
            <li><a href="">Special Offer</a></li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] m-auto place-items-center gap-4 ">
        {latestProduct.map((product) => (
          <div key={product.code}>
            <div className="w-[250px]">
              <div className="bg-whitebg-0 place-items-center h-[200px] ">
                <img src={product.img} alt="" height={50} width={150} />
              </div>
              <div className="flex justify-between w-full px-4 py-2">
                <span className="font-body text-blue-0 text-sm">{product.title}</span>
                <span className=" text-blue-0 text-sm font-body">
                  {product.price - (product.price * product.discount) / 100}
                </span>
                <span className=" text-accent-0  font-body line-through text-sm">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProduct;
