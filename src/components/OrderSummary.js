import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const productList = useSelector((select) => select.shopping.card);

  useEffect(() => {
    const totalPrice = productList.reduce((acc, item) => {
      if (item.checked) {
        return acc + item.product.price * item.count;
      }
      return acc;
    }, 0);

    setTotalProductPrice(totalPrice);
  }, [productList]);
  return (
    <div className="w-[25rem] h-[28rem] mt-[10rem] mx-auto border-8 border-violet-500 ">
      <div className="flex justify-center">
        <button className="px-[6rem] py-4 bg-violet-400 mt-7 text-white font-bold justify-center ">
          Sepeti Onayla
        </button>
      </div>
      <div className="border-1 w-[20rem] mt-4 mx-auto flex gap-4 flex-col">
        <h1 className="text-[2rem] font-bold text-black underline">
          Sipariş Özeti
        </h1>
        <div className="flex text-black font-bold justify-between">
          <h2>Ürünün Toplamı</h2>
          <p>{totalProductPrice.toFixed(2)}₺</p>
        </div>
        <div className="flex text-black font-bold justify-between">
          <h2>Kargo Toplamı</h2>
          <p>35₺</p>
        </div>
        <div className="flex font-bold justify-between">
          <h2 className=" text-black">150 TL Üstü ve Kargo Bedava</h2>
          <p
            className={
              totalProductPrice < 150 ? "text-red-600" : "text-green-600"
            }
          >
            {totalProductPrice >= 150 ? -35 : 0}₺
          </p>
        </div>
        <hr />
        <div className="flex text-black font-bold justify-between">
          <h2>Toplam</h2>
          {totalProductPrice >= 150 ? (
            <p>{totalProductPrice.toFixed(2)}₺</p>
          ) : (
            <p>{(totalProductPrice + 35).toFixed(2)}₺</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-[6rem] py-4  mt-5 bg-violet-400 text-white font-bold">
          Sepeti Onayla
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
