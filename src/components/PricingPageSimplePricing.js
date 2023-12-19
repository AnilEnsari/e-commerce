import React from "react";

export default function PricingPageSimplePricing() {
  return (
    <div className="w-[90rem] mx-auto py-[3.12rem]">
      <h2 className="text-[#737373] font-bold text-center">PRICING</h2>
      <h1 className="text-[#252B42] mt-[1rem] text-[3.625rem] font-bold text-center">
        Simple Pricing
      </h1>
      <div className="flex justify-center gap-4 mt-[1rem]">
        <h1 className="text-[#252B42] font-bold">Home</h1>{" "}
        <span className="text-[#BDBDBD] font-semibold">&gt;</span>{" "}
        <h1 className="text-[#737373] font-semibold">Team</h1>
      </div>
    </div>
  );
}
