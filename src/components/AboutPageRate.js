import React from "react";

export default function AboutPageRate() {
  return (
    <div className="w-[90rem] mobile:w-[20rem] mobile:gap-y-20 mobile:flex-wrap mx-auto justify-between mt-36 flex">
      <div className="w-[14rem] mobile:w-[20rem] flex flex-col items-center">
        <h1 className="text-[3.6rem] font-bold text-[#252B42]">15K</h1>
        <h6 className="text-[#737373] font-bold text-[1.3rem]">
          Happy Customers
        </h6>
      </div>
      <div className="w-[14rem] mobile:w-[20rem] flex flex-col items-center">
        <h1 className="text-[3.6rem] font-bold text-[#252B42]">150K</h1>
        <h6 className="text-[#737373] font-bold text-[1.3rem]">
          Monthly Visitors
        </h6>
      </div>
      <div className="w-[14rem] mobile:w-[20rem] flex flex-col items-center">
        <h1 className="text-[3.6rem] font-bold text-[#252B42]">15</h1>
        <h6 className="text-[#737373] font-bold text-[1.3rem]">
          Countries Worldwide
        </h6>
      </div>
      <div className="w-[14rem] mobile:w-[20rem] flex flex-col items-center">
        <h1 className="text-[3.6rem] font-bold text-[#252B42]">100+</h1>
        <h6 className="text-[#737373] font-bold text-[1.3rem]">Top Partners</h6>
      </div>
    </div>
  );
}
