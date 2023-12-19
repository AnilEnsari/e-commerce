import React from "react";
import data from "../data/Data";

export default function ProductPageBestSellerProduct() {
  return (
    <div className="w-[80rem] mobile:w-[20rem] flex-wrap mx-auto mt-20">
      <h1 className="pl-[12rem] mobile:ml-0 mobile:text-center text-[1.5rem] text-[#252B42] font-bold text-center">
        BESTSELLER PRODUCTS
      </h1>
      <div className="flex mobile:mx-0 flex-wrap mx-20 mt-10 justify-center">
        {data.productPageProducts.map((product, index) => (
          <div key={index} className="ml-20 mobile:ml-0 mobile:w-full">
            <img
              src={product.resim}
              alt="Product"
              className="mt-10 mobile:w-full"
            />
            <h2 className="text-[#252B42] mt-4 text-center text-[1.1rem] font-bold">
              {product.yazı}
            </h2>
            <h4 className="mt-4 text-center text-[#737373] text-[0.875] font-bold">
              {product.yazı2}
            </h4>
            <p className="mt-4 text-center text-[#BDBDBD] text-[1rem] font-bold">
              {product.fiyat}{" "}
              <span className="text-[#23856D] ml-2">{product.fiyat2}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
