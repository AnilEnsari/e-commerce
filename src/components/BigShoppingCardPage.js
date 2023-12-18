import React from "react";
import trash from "../assets/trash-solid.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addToList,
  checkedProduct,
  decraseList,
  filteredProduct,
} from "../store/actions/shoppingCardActions";
import OrderSummary from "./OrderSummary";
import { useHistory } from "react-router-dom";

export const BigShoppingCardPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const shoppingCard = useSelector((select) => select.shopping.card);
  console.log(shoppingCard);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickHandler = () => {
    history.goBack();
  };

  return (
    <div className="flex">
      <div className=" h-full  flex flex-col">
        <div className="pt-10 font-bold text-center mx-auto text-black text-[2rem]">
          ANIL E-Commerce
        </div>
        <button
          onClick={() => onClickHandler()}
          className="text-white font-bold bg-blue-500 px-8 py-4 self-center rounded-lg mt-8"
        >
          Go Back
        </button>
        {shoppingCard.map(
          (herbiri, index) =>
            index >= 1 && (
              <div key={index} className="flex w-[50rem] mt-8 mb-4 ml-24">
                <div className="w-[50vw]  mt-8">
                  <p className="text-black font-bold">
                    {herbiri.product.name} &{" "}
                    <span className="bg-green-700 text-white font-bold px-1 py-1 rounded-lg">
                      {herbiri.product.rating}
                    </span>
                  </p>
                  <div className="flex ">
                    <input
                      checked={herbiri.checked}
                      className="mx-4"
                      type="checkbox"
                      onClick={() => dispatch(checkedProduct(herbiri))}
                    />
                    <img
                      alt="Resim"
                      src={herbiri.product.images[0].url}
                      className="w-[5rem] h-[5rem]"
                      {...register}
                    />
                    <p className="my-auto flex text-black font-bold text-center ml-4">
                      {herbiri.product.description}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2 justify-end">
                    <button
                      onClick={() => dispatch(decraseList(herbiri.product))}
                      className="text-white font-bold bg-blue-500 text-[1.2rem] px-4 py-2 rounded-md"
                    >
                      -
                    </button>
                    <p className="my-auto text-black font-bold">
                      {herbiri.count}
                    </p>
                    <button
                      onClick={() => dispatch(addToList(herbiri.product))}
                      className="text-white font-bold bg-blue-500 px-4 py-2 rounded-md"
                    >
                      +
                    </button>
                    <img
                      onClick={() => dispatch(filteredProduct(herbiri.product))}
                      alt="dustbin"
                      src={trash}
                    />
                  </div>
                </div>
                <div className="flex ml-20 w-[50vw] mt-12 h-[7rem] justify-around">
                  <h1 className="my-auto font-bold text-black">
                    ARAS CARGO : 35₺
                  </h1>
                  <p className="my-auto text-black font-bold">
                    {herbiri.product.price}₺
                  </p>
                </div>
              </div>
            )
        )}
      </div>
      <OrderSummary />
    </div>
  );
};
