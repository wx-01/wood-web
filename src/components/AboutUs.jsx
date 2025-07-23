import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="absolute w-[1325px] h-[775px] top-[5065px] shadow-[0px_4px_52px_0px_#F5F5F52B] rounded-br-[42px] rounded-tr-[42px] bg-[#1E0C06] ">
        <h1 className="absolute top-[44px] left-[243px] text-[90px] leading-[1.33] font-medium uppercase text-[#F5F5F5] font-[KyivTypeSans] w-[501px] h-[120px]">
          About us
        </h1>

        <p className="absolute top-[231px] left-[253px] text-[30px] leading-[1.39] font-medium text-[#F5F5F5] font-[inter] w-[516px] h-[294px]">
          <span className=" font-bold">BIO CWT</span> - We manufacture solid
          wood products according to individual drawings. We make chairs,
          armchairs, wardrobes, beds and much more in our own workshop, equipped
          with all the necessary industrial equipment.
        </p>

        <img
          src="..\images\person1.png"
          alt=""
          className="w-[205px] h-[205px] top-[61px] absolute left-[1050px] rounded-[42px]"
        />

        <div className="w-[350px] h-[347px] top-[167px] absolute left-[831px] bg-[#1E0C06] rounded-[42px]"></div>
        <img
          src="..\images\person2.png"
          alt=""
          className="w-[337px] h-[337px] top-[177px] left-[831px] absolute rounded-[42px]"
        />

        <img
          src="..\images\person3.png"
          alt=""
          className="w-[205px] h-[205px] top-[539px] absolute left-[1018px] rounded-[42px]"
        />
      </div>
    </>
  );
};

export default AboutUs;
