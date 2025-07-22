import React from "react";
import Background from "../components/Background";

const Home = () => {
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

      <div>
        <h1 className="absolute top-[1346px] left-[243px] text-[90px] leading-[1.33] font-medium uppercase text-[#F5F5F5] font-[KyivTypeSans] w-[746px]">
          THE WOOD WE WORK WITH
        </h1>
      </div>

      <div className="absolute left-[126px] w-[277px] h-[560px] top-[1701px]">
        <img
          src="..\images\wood-oak.png"
          alt=""
          class="absolute left-[6px] w-[205px] h-[205px] rounded-[42px] object-cover"
        />
        <p className="absolute left-[79px] w-[59px] h-[36px] top-[244px] text-[#F5F5F5] font-bold text-[30px] leading-[100%] tracking-[0em] font-inter">
          Oak
        </p>
        <div className="w-[277px] h-[237px] top-[318px]">
          <div className="flex items-center gap-3">
            <img
              src="../images/VectorTick.png"
              alt="check mark"
              className="w-[25px] h-[25px] opacity-100 top-[327px] absolute"
            />
            <p className=" absolute left-[35px] w-[138px] h-[36px] top-[318px] text-[#F5F5F5] text-[30px] leading-[100%] tracking-[0em] font-inter">
              Durability
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="../images/VectorTick.png"
              alt="check mark"
              className="w-[25px] h-[25px] opacity-100 top-[383px] absolute"
            />
            <p className="absolute left-[35px] w-[209px] h-[60px] top-[378px] text-[#F5F5F5] text-[30px] leading-[100%] tracking-[0em] font-inter">
              Beautiful texture
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="../images/VectorTick.png"
              alt="check mark"
              className="w-[25px] h-[25px] opacity-100 top-[476px] absolute"
            />
            <p className="absolute left-[35px] w-[242px] h-[30px] top-[469px] text-[#F5F5F5] text-[30px] leading-[99%] tracking-[0em] font-inter">
              Water resistance
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="../images/VectorCross.png"
              alt="check mark"
              className="w-[26px] h-[26px] opacity-100 top-[527px] absolute"
            />
            <p className="absolute left-[35px] w-[147px] h-[30px] top-[525px] text-[#F5F5F5] text-[30px] leading-[99%] tracking-[0em] font-inter">
              Expensive
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[577px] w-[281px] h-[456px] top-[1701px]">
        <img
          src="..\images\wood-buk.png"
          alt=""
          class="absolute left-[1px] w-[205px] h-[205px] rounded-[42px] object-cover"
        />
        <p className="absolute left-[76px] w-[59px] h-[36px] top-[238px] text-[#F5F5F5] font-bold text-[30px] leading-[100%] tracking-[0em] font-inter">
          Buk
        </p>

        <div className="w-[250px] h-[94px] top-[318px]">
          <div className="flex items-center gap-3">
            <img
              src="../images/VectorTick.png"
              alt="check mark"
              className="w-[25px] h-[25px] opacity-100 top-[327px] absolute"
            />
            <p className=" absolute left-[35px] w-[138px] h-[36px] top-[318px] text-[#F5F5F5] text-[30px] leading-[100%] tracking-[0em] font-inter">
              Durability
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="../images/VectorCross.png"
              alt="check mark"
              className="w-[26px] h-[26px] opacity-100 top-[384px] absolute"
            />
            <p className="absolute left-[39px] w-[211px] h-[30px] top-[382px] text-[#F5F5F5] text-[30px] leading-[99%] tracking-[0em] font-inter">
              Hard to handle
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[1032px] w-[281px] h-[456px] top-[1701px]">
        <img
          src="..\images\wood-ash.png"
          alt=""
          class="absolute left-[1px] w-[205px] h-[205px] rounded-[42px] object-cover"
        />
        <p className="absolute left-[75px] w-[58px] h-[36px] top-[238px] text-[#F5F5F5] font-bold text-[30px] leading-[100%] tracking-[0em] font-inter">
          Ash
        </p>

        <div className="w-[281px] h-[94px] top-[318px]">
          <div className="flex items-center gap-3">
            <img
              src="../images/VectorTick.png"
              alt="check mark"
              className="w-[25px] h-[25px] opacity-100 top-[327px] absolute"
            />
            <p className=" absolute left-[35px] w-[138px] h-[36px] top-[318px] text-[#F5F5F5] text-[30px] leading-[100%] tracking-[0em] font-inter">
              Durability
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="../images/VectorCross.png"
              alt="check mark"
              className="w-[26px] h-[26px] opacity-100 top-[384px] absolute"
            />
            <p className="absolute left-[39px] w-[242px] h-[30px] top-[382px] text-[#F5F5F5] text-[30px] leading-[99%] tracking-[0em] font-inter">
              Hard to handle
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
