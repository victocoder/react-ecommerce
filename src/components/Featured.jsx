import React, { useState } from "react";
import {
  cartIcon,
  featured,
  featuredCart,
  featuredHeart,
  featuredZoom,
  heartIcon,
} from "../utils/constants";
import { HeartIcon, ShoppingBag, ShoppingCart } from "lucide-react";

const Featured = () => {
  const [active, setActive] = useState("");
  const handleMouseEnter = (code) => {
    console.log("Mouse entered the div!");
    // You can execute any function here
    setActive(code);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left the div!");
    setActive("");
    // You can execute any function here
  };

  return (
    <section className="py-8">
      <h1 className="text-center text-2xl font-bold font-body text-blue-0">
        Featured Products
      </h1>

      <div className="max-w-[1000px] flex justify-between items-center gap-4 m-auto ">
        {featured.map((item) => (
          <div
            key={item.code}
            className=" relative shadow-lg h-[300px] w-[300px]  hover:bg-blue-2-0 hover:text-white text-blue-0 cursor-pointer z-20 hover:z-0"
            onMouseEnter={() => handleMouseEnter(item.code)}
            onMouseLeave={() => handleMouseLeave(item.code)}
          >
            <div
              className={`absolute z-0 hover:z-50  px-4 py-2 top-0 right-0  justify-center items-center  ${
                active == item.code ? "flex" : "hidden"
              }`}
            >
              <img src={featuredCart} alt="" />
              <img src={featuredHeart} alt="" />
              <img src={featuredZoom} alt="" />
            </div>
            <div className="bg-[#F6F7FB] h-[200px] flex justify-center items-center">
              <img src={item.img} alt="" />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center ">
              <label htmlFor="" className=" text-accent-0">
                {item.title}
              </label>
              <label htmlFor="" className=" ">
                {item.code}
              </label>
              <label htmlFor="" className="">
                {item.price}
              </label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
