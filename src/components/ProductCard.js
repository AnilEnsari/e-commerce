import React from "react";
import kızResim from "../assets/KızEnüst.png";
import kucukBeyaz from "../assets/kucukbeyaz.png";
import buyukBeyaz from "../assets/buyukBeyaz.png";

export default function ProductCard() {
  return (
    <div className="flex flex-wrap mobile:flex-col h-[40rem] bg-gradient-to-br from-[#96E9FB] to-[#ABECD6] rounded-[1.25rem] mt-20 mx-20 mobile:h-[40rem]">
      {/* İç kısım 2 dive ayırdım... Sol ve Sağ Olarak */}
      <div className="flex w-1/2 h-full">
        <div className="m-auto mobile:m-0 mobile:ml-5">
          <div className="w-full mobile:ml-10 mobile:mt-10">
            <h1 className="text-base text-[#2A7CC7] font-bold">SUMMER 2023</h1>
            <h1 className="text-[3.625rem] mobile:text-[2rem] font-bold text-[#252B42]">
              NEW COLLECTION
            </h1>
            <p className="text-xl font-semibold text-[#737373]">
              We know how large objects will act,
            </p>
            <p className="text-xl font-semibold text-[#737373]">
              but things on a small scale.
            </p>
            <button className="px-[2.5rem] mobile:px-[1.5rem] py-[1rem] bg-[#23A6F0] rounded mt-5 text-white font-bold text-[1.5rem]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col">
        <img
          alt="kucukbeyaz"
          src={kucukBeyaz}
          className="absolute mobile:pl-60 mobile:hidden"
        ></img>
        <img
          src={buyukBeyaz}
          alt="buyukbeyaz"
          className="absolute right-12 z-1 mobile:hidden"
        ></img>
        <img
          className="w-[42.2rem] h-[42.2rem] h:[10rem] absolute right-4 top-40 z-2  mobile:w-[20rem] mobile:h-[20rem] mobile:mt-[36.2rem] mobile:mr-[5rem]"
          src={kızResim}
          alt="Resim"
        ></img>
      </div>
    </div>
  );
}
