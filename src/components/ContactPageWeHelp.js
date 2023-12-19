import React from "react";

export default function ContactPageWeHelp() {
  return (
    <div className="w-[90rem] mobile:w-[20rem] mx-auto py-[7rem] mobile:py-0 text-center">
      <h6 className="text-[#252B42] font-bold">VISIT OUR OFFICE</h6>
      <h1 className="text-[#252B42] text-[2.5rem] font-bold pt-[0.62rem] pb-[5rem]">
        We help small businesses with big ideas
      </h1>

      <div className="flex h-[25rem] mobile:h-auto mobile:flex-col">
        <div className="w-[33.3%] mobile:w-full px-[2.5rem] py-[3.12rem] pt-20">
          <img
            alt="rendit"
            src="https://file.rendit.io/n/7rG4hYUBrcdRvztkIfcA.svg"
            className="w-16 mx-auto"
          />
          <p className="my-[0.94rem] text-[#252B42] font-bold">
            georgia.young@example.com
          </p>
          <p className="my-[0.94rem] text-[#252B42] font-bold">
            georgia.young@ple.com
          </p>
          <p className="text-[#252B42] font-bold py-[.94rem]">Get Support</p>
          <button className="mt-[0.94rem] px-[2.25rem] py-[.94rem] text-[#23A6F0] font-bold border border-[#23A6F0] rounded-[2.3rem]">
            Submit Request
          </button>
        </div>
        <div className="w-[33.3%] mobile:w-full px-[2.5rem] py-[3.12rem] pt-20 bg-[#252B42]">
          <img
            alt="rendit"
            src="https://file.rendit.io/n/OYx95Q42ydulZLcXSxFz.svg"
            className="w-16 mx-auto"
          />
          <p className="my-[0.94rem] text-[#FFFFFF] font-bold">
            georgia.young@example.com
          </p>
          <p className="text-[#FFFFFF] font-bold">georgia.young@ple.com</p>
          <p className=" py-[.94rem] text-[#FFFFFF] font-bold">Get Support</p>
          <button className="mt-[0.94rem] px-[2.25rem] py-[.94rem] text-[#23A6F0] font-bold border border-[#23A6F0] rounded-[2.3rem]">
            Submit Request
          </button>
        </div>
        <div className="w-[33.3%] mobile:w-full px-[2.5rem] py-[3.12rem] pt-20">
          <img
            alt="rendit"
            src="https://file.rendit.io/n/S7yAjC5slm7jxmx5bY4W.svg"
            className="w-16 mx-auto"
          />
          <p className="my-[0.94rem] text-[#252B42] font-bold">
            georgia.young@example.com
          </p>
          <p className="my-[0.94rem] text-[#252B42] font-bold">
            georgia.young@ple.com
          </p>
          <p className="text-[#252B42] font-bold py-[.94rem]">Get Support</p>
          <button className="mt-[0.94rem] px-[2.25rem] py-[.94rem] text-[#23A6F0] font-bold border border-[#23A6F0] rounded-[2.3rem]">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
