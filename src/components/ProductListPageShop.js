import React from "react";

export default function ProductListPageShop() {
  return (
    <div className="flex w-[70rem] mobile:flex-col mobile:w-[20rem] mobile:flex-wrap mx-auto justify-between mt-10 mobile:gap-y-3">
      <h1 className="text-[#252B42] mobile:text-center text-[1.5rem] font-bold">
        Shop
      </h1>
      <div className="flex gap-4 pr-24 mobile:pr-0 mobile:flex mobile:mx-auto">
        <h2 className="font-bold text-[#252B42]">Home</h2>
        <span>➜</span>
        <h2 className="text-[#BDBDBD] font-semibold">Shop</h2>
      </div>
    </div>
  );
}
