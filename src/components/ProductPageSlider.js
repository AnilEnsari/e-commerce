import React from "react";
import data from "../data/Data";

export default function ProductPageSlider() {
  return (
    <div className="w-[70rem] mobile:w-[20rem] mobile:flex-col mobile:flex-wrap mx-auto my-20">
      <div>
        {data.productPage.map((product, index) => (
          <div key={index} className="flex mobile:flex-wrap">
            {/* Sol Kısım */}
            <div className="relative">
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src={product.sarıKoltukBuyuk} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img src={product.sarıKoltukBuyuk} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 my-6 mobile:justify-center">
                <img src={product.KahvarengiKoltukKucuk} />
                <img src={product.sarıKoltukKucuk} />
              </div>
            </div>
            {/* Sağ Kısım */}
            <div className="pl-8">
              <h1 className="text-[#252b42] text-[1.2rem] font-bold">
                {product.title}
              </h1>
              <div className="flex my-6">
                <img src={product.yıldızKapalı} />
                <img src={product.yıldızKapalı} />
                <img src={product.yıldızKapalı} />
                <img src={product.yıldızKapalı} />
                <img src={product.yıldızAcık} />
                <p className="text-[#737373] font-semibold ml-4">
                  {product.reviews}
                </p>
              </div>
              <p className="mb-6 text-[#252B42] text-[1.5rem] font-bold">
                {product.fiyat}
              </p>
              <div className="flex my-6 gap-1">
                <p className="text-[#737373] font-semibold">
                  {product.status} :{" "}
                </p>
                <p className="text-[#23A6F0] font-bold">{product.status2}</p>
              </div>
              <p className="text-[#737373] font-semibold">{product.yazi}</p>
              <hr className="mt-6" />
              <div className="flex mt-6 gap-4">
                <img src={product.blue} />
                <img src={product.green} />
                <img src={product.orange} />
                <img src={product.black} />
              </div>
              <div className="flex my-6 gap-6 pt-9">
                <button className="bg-[#23A6F0] py-[0.62rem] px-[1.25rem] rounded-[0.31rem] text-[#FFFFFF] font-bold">
                  Select Options
                </button>
                <div className="flex gap-6 items-center">
                  <img className="w-[1rem] h-[2rem]" src={product.IconKalp} />
                  <img
                    className="w-[1rem] h-[2rem]"
                    src={product.IconAlısverisi}
                  />
                  <img className="w-[1rem] h-[2rem]" src={product.IconIncele} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
