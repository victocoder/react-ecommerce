import React from "react";
import lampIcon from "../assets/icons/lamp-icon.svg";
import heroChairImg from "../assets/img/hero-chair-img.svg";
import heroElipticImg from "../assets/img/hero-eliptic-img.svg";
import heroPercentElipc from "../assets/img/hero-percent-elipc.svg";
const Hero = () => {
  return (
    <div className="bg-[#F2F0FF] flex items-center justify-between   h-[450px] px-12 ">
      <div className="    h-full ">
        {" "}
        {/* Margin for spacing */}
        <img
          src={lampIcon}
          alt="Lamp Icon"
          width={200}
     
          className=" top-0"
        />
      </div>

      <div className="max-w-[400px] mr-4 py-4 ">
        {" "}
        {/* Margin for spacing */}
        <h2 className="font-lato text-sm text-accent-0">Best Furniture For Your Castle....</h2>
        <h1 className="text-3xl font-body font-bold">New Furniture Collection Trends in 2020</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className=" bg-accent-0 border-none py-1 px-4 text-white">Shop Now</button>
      </div>

      <div className="relative flex justify-center items-center ">
        <img
          src={heroElipticImg}
          alt="Hero Eliptic"
          className="absolute top-0 left-0 "
          width={800}
          height={700}
        />
        <img src={heroChairImg} alt="Hero Chair" className="w-[400px] z-10" />
        <div className="absolute right-0 z-20 top-0 flex justify-center items-center  ">
          <img src={heroPercentElipc} alt="" className="" width={100} />
          <label htmlFor="" className="absolute font-bold text-xl text-white ">60% off</label>
        </div>
      </div>
    </div>
  );
};

export default Hero;
