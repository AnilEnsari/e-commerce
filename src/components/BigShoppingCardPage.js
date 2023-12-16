import React from "react";
import trash from "../assets/trash-solid.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToList, decraseList } from "../store/actions/shoppingCardActions";

export const BigShoppingCardPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const shoppingCard = useSelector((select) => select.shopping.card);
  console.log(shoppingCard);
  const dispatch = useDispatch();

  return (
    <div className=" w-[60rem] h-[100vh] mx-auto">
      <div className="pt-10 font-bold text-black text-[2rem]">
        ANIL E-Commerce
      </div>
      {shoppingCard.map(
        (herbiri, index) =>
          index >= 1 && (
            <div key={index} className="flex mt-12">
              <div className="w-[50vw] h-[7rem] mt-8">
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
                    onChange={(e) => console.log(e.target.value)}
                    name="Checkbox"
                    type="checkbox"
                    placeholder="Checkbox"
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
                <div className="flex justify-evenly mt-2">
                  <button
                    onClick={() => dispatch(decraseList(herbiri.product))}
                    className="text-white font-bold bg-blue-500 ml-44 px-4 py-2 rounded-md"
                  >
                    -
                  </button>
                  <p className="my-auto">{herbiri.count}</p>
                  <button
                    onClick={() => dispatch(addToList(herbiri.product))}
                    className="text-white font-bold bg-blue-500 px-4 py-2 rounded-md"
                  >
                    +
                  </button>
                  <img src={trash} />
                </div>
              </div>
              <div className="flex ml-20 w-[50vw] mt-8 h-[7rem] justify-around">
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
  );
};
