import React from "react";
import phoneCallIcon from "../assets/icons/phone-call.svg";
import arrowDownIcon from '../assets/icons/arrow-down.svg';
import userIcon from '../assets/icons/user-icon.svg';
import cartIcon from '../assets/icons/cart-icon.svg'
import heartIcon from '../assets/icons/heart-icon.svg'
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
    </div>
  );
};
