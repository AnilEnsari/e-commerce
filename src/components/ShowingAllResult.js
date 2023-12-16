import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductList, setProductList } from '../store/actions/productActions';
import ClipLoader from "react-spinners/ClipLoader";
import { setLoading } from '../store/actions/loadingAction';

export default function ShowingAllResult() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [resultNumber, setResultsNumber] = useState("")
    const dispatch = useDispatch();
    const loading = useSelector((select) => select.loading.boolean)
    const productList = useSelector((select) => select.product.productList)



    const onSubmit = (data) => {
        dispatch(setLoading(true));
        const categoryId = productList.length > 0 ? productList[0].category_id : "";
        api.get(`products/?filter=${data.filter}&sort=${data.orderBy}&category=${categoryId}`)
            .then((response) => {
                console.log("RESPONSE DATA , ", response);
                setResultsNumber(response.data.products.length);
                dispatch(setProductList(response.data.products));
            })
            .catch((error) => {
                console.error("API error: ", error);
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };






    return (
        <div>
            <div className='w-[70rem] mobile:w-[20rem] mobile:flex-col mobile:gap-y-4 mx-auto flex-wrap flex justify-between items-center mt-40'>
                <h1 className='text-[#737373] font-semibold'>Showing all {resultNumber} results</h1>
                <div className='flex mobile:ml-10 items-center gap-2 pr-24 '>
                    <div
                        id="OptionRoot"
                        className=" overflow-hidden  flex flex-row gap-1 w-full h-12 items-center px-4 rounded text-center cursor-pointer"
                    >
                        <form className=" tracking-[0.2] flex gap-2 leading-[28px] text-white font-semibold text-center cursor-pointer" onSubmit={handleSubmit(onSubmit)}>
                            <select className='py-[0.625rem] px-[1.25rem]' {...register("orderBy")}>
                                <option value="price:desc">High price to low</option>
                                <option value="price:asc"> Low price to high</option>
                                <option value="rating:desc"> Rating by high to low</option>
                                <option value="rating:asc"> Rating by low to high</option>
                            </select>
                            <input className='py-[0.625rem] px-[1.25rem] ' type="text" placeholder="Filter" {...register("filter", {})} />
                            <button type='submit' className='py-[0.625rem] px-[1.25rem] w-[5.875rem] bg-[#23A6F0] hover:bg-blue-400 text-[#FFFFFF] rounded-[0.3125rem] '>
                                Filter
                            </button>
                        </form>

                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <ClipLoader
                    size={30}
                    color={"#123abc"}
                    loading={loading}
                />
            </div>
        </div >
    )
}
