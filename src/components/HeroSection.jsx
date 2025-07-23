import React from "react";
{
  /*this is the basic structure of a component in react */
}
const HeroSection = () => {
  return (
    <>
      <div className="rectangle38">
        <img
          className="rectangleImage"
          src="..\images\pexels-lumn-235309 2.png"
          alt=""
        />
      </div>
      <div className="mainScreen">
        <div className="rectangle39">
          <div className="">
            <h1 className="uppercase leading-[115%] text-[90px] font-normal text-[#F5F5F5] font-[KyivTypeSans] absolute top-[75px] left-[50px] w-[500px] h-[321px] opacity-100">
              Solid wood products
            </h1>

            <h2 className=" absolute top-[418px] left-[62px] w-[333px] h-[78px] opacity-100  font-normal text-[30px] leading-[130%] tracking-normal font-inter text-[#FFDBBB]">
              Oak, beech, ash from{" "}
              <span className="font-bold text-[30px] leading-[130%] tracking-normal font-inter">
                {" "}
                1700 CZK
              </span>{" "}
              per m3
            </h2>

            <button className=" absolute w-[225px] h-[58px] top-[554px] left-[50px] bg-[#728BAD] rounded-[42px] px-[70px] py-[11px] flex items-center justify-center gap-[10px] opacity-100">
              <span className="text-[#F5F5F5] text-[30px] leading-[100%] font-bold font-[Inter] uppercase">
                Order
              </span>
            </button>
          </div>

          <div className="absolute w-px h-[511px] border-l border-[#f5f5f5] top-[43px] left-[634px] opacity-100 rotate-[180deg] mx-auto"></div>

          <div>
            <img
              src="..\images\mainImage1.png"
              alt=""
              class="absolute top-[43px] left-[925px] w-[205px] h-[205px] rounded-[42px] object-cover"
            />

            <img
              src="..\images\mainImage2.png"
              alt=""
              class="absolute top-[316px] left-[680px] w-[205px] h-[205px] rounded-[42px] object-cover"
            />

            <img
              src="..\images\mainImage3.png"
              alt=""
              class="absolute top-[452px] left-[925px] w-[205px] h-[205px] rounded-[42px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
