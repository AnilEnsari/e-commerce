import React from "react";

export default function AboutPageMetMinim() {
  return (
    <div className="mt-24 w-[90rem] mobile:w-[20rem] mobile:flex-wrap mx-auto flex justify-around">
      <div className="w-[24rem] mobile:mb-10">
        <h6 className="text-[#E74040] font-semibold">Problems trying</h6>
        <p className="text-[#252B42] text-[1.5rem] font-bold mt-12">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
      </div>
      <div className=" my-auto">
        <p className="text-[#737373] font-semibold mobile:mb-5 text-[1.2rem]">
          Problems trying to resolve the conflict between the two major realms
          of{" "}
        </p>
        <p className="text-[#737373] font-semibold text-[1.2rem]">
          Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  );
}
