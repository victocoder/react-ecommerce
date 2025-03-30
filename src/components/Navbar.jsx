import React from "react";
import phoneCallIcon from "../assets/icons/phone-call.svg";
import arrowDownIcon from "../assets/icons/arrow-down.svg";
import userIcon from "../assets/icons/user-icon.svg";
import cartIcon from "../assets/icons/cart-icon.svg";
import heartIcon from "../assets/icons/heart-icon.svg";
import searchIcon from "../assets/icons/search-icon.svg";
export const Navbar = () => {
  return (
    <div>
      <div className="bg-[#7E33E0] text-white font-body py-1 flex justify-around items-center">
        <div className=" flex gap-8">
          <div>mesfingirmatwo@gmail.com</div>
          <div className="flex justify-center items-center">
            <img src={phoneCallIcon} alt="" /> (+251)943766122
          </div>
        </div>
        <div className="flex gap-4 font-semibold">
          <div className="flex">
            English
            <img src={arrowDownIcon} alt="" />
          </div>
          <div className="flex">
            USD
            <img src={arrowDownIcon} alt="" />
          </div>
          <div className="flex">
            Login
            <img src={heartIcon} alt="" />
          </div>
          <div className="flex">
            <img src={cartIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center font-body max-w-[1200px] m-auto py-2">
        {/* logo */}
        <div className="">
          <a href="" className="text-2xl font-bold">
            Hekto
          </a>
        </div>
        {/* nav list */}
        <div className="flex gap-6 font-lato">
          <a href=""  className="text-accent-0">Home</a>
          <a href="">Pages</a>
          <a href="">Products</a>
          <a href="">Blog</a>
          <a href="">Shop</a>
          <a href="">Contact</a>
        </div>
        <div className="flex relative">
          <input
            type="text"
            className="border border-gray-300  p-1 focus:outline-none  focus:ring-1 focus:ring-gray-500"
            placeholder="Search"
          />
          <div className=" bg-accent-0 place-content-center px-2 absolute right-0 bottom-0 top-0">
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
