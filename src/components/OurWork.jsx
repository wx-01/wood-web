import React from "react";

const OurWork = () => {
  return (
    <>
      <div>
        <h1 className="uppercase leading-[1.33] text-[90px] font-medium text-[#F5F5F5] font-[KyivTypeSans] absolute top-[2519px] left-[238px] w-[532px] h-[120px] opacity-100">
          Our work
        </h1>
      </div>
      <div className="flex items-center gap-[3px] w-[1307px] h-[806px] top-[2760px] left-[40px]">
        <img
          src="..\images\wooden-kitchen.png"
          alt="Wooden Kitchen Image"
          className=" w-[1130px] h-[754px] top-[2760px] left-[140px] rounded-[42px] absolute object-cover"
        />

        <img
          src="..\images\VectorRight.png"
          alt="Right Arrow"
          className="w-[53px] h-[50px] top-[3112px] absolute left-[1294px]"
        />

        <img
          src="..\images\VectorLeft.png"
          alt="Left Arrow"
          className="w-[53px] h-[50px] top-[3112px] absolute left-[40px]"
        />

        <div className="w-[114px] h-[26px] top-[3540px] left-[658px] flex items-center justify-start gap-3 absolute">
          <div className="w-[26px] h-[26px] border-[4px] border-[#728BAD] rounded-full"></div>
          <div className="w-[26px] h-[26px] left-[44px] bg-[#D5DCEE] border-[4px] border-[#728BAD] rounded-full"></div>
          <div className="w-[26px] h-[26px] left-[88px] border-[4px] border-[#728BAD] rounded-full "></div>
        </div>
      </div>

      <div className=" w-[1188px] h-[927px] top-[3844px] absolute left-[101px]">
        <h1 className="uppercase leading-[1.33] text-[90px] font-medium text-[#F5F5F5] font-[KyivTypeSans] absolute left-[137px] w-[1040px] h-[230px]">
          Advantages working with us
        </h1>

        <div className="flex items-center gap-[3px]">
          <img
            src="..\images\video.png"
            alt="Video Image"
            className="w-[609px] h-[386px] top-[351px] rounded-42px absolute"
          />
          <p className="leading-[1.39] text-[30px] font-medium text-[#F5F5F5] font-[inter] absolute left-[731px] w-[387px] h-[84px] top-[351px]">
            In-house carpentry production
          </p>

          <p className="leading-[1.39] text-[30px] font-medium text-[#F5F5F5] font-[inter] absolute left-[731px] w-[387px] h-[126px] top-[481px]">
            We only treat wood with environmentally friendly and safe products
          </p>

          <p className="leading-[1.39] text-[30px] font-medium text-[#F5F5F5] font-[inter] absolute left-[731px] w-[453px] h-[84px] top-[653px]">
            Prices from the manufacturer, no extra charge
          </p>
        </div>

        <button className=" absolute w-[472px] h-[58px] top-[858px] left-[349px] bg-[#728BAD] rounded-[42px] px-[70px] py-[11px] flex items-center justify-center gap-[10px] opacity-100">
          <span className="text-[#F5F5F5] text-[30px] leading-[100%] font-bold font-[Inter]">
            Receive a consultation
          </span>
        </button>
      </div>
    </>
  );
};

export default OurWork;
