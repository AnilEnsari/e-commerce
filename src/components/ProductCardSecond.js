import React from 'react'
import data from "../data/Data.js"
import { Link } from 'react-router-dom'

export default function ProductCardSecond() {
    return (
        <div className='mb-40 mx-24'>
            {/* Üst Bilgilendirme Div*/}
            <div className='w-[20rem] mobile:w-20  mx-auto flex-row mobile:flex mobile:flex-wrap mobile:flex-col mobile:mr-32 gap-2.5'>
                <h1 className='text-center text-[#737373] text-[1.5rem] font-normal'>Featured Products</h1>
                <h1 className='text-center text-[#252B42] text-[1.5rem] font-bold'>BESTSELLER PRODUCTS</h1>
                <p className='text-center text-[#737373] text-[0.875rem]'>Problems trying to resolve the conflict between </p>
            </div>
            {/* Maplenecek Kısım Div*/}
            <div >
                {/* Product Card Kısmı */}
                <div className='flex flex-wrap mobile:w-[20rem] mx-auto mobile:mx-0 mt-20 justify-center'>
                    {data.productCards.map((product, index) => (
                         <div key={index} className='mx-16 mobile:w-full mobile:ml-0 ]'>
                            <img src={product.resim} alt='Product' className='mt-10 mobile:w-full' />
                            <h2 className='text-[#252B42] mt-4 text-center text-[1.1rem] font-bold'>{product.yazı}</h2>
                            <h4 className='mt-4 text-center text-[#737373] text-[0.875] font-bold'>{product.yazı2}</h4>
                            <p className='mt-4 text-center text-[#BDBDBD] text-[1rem] font-bold'>{product.fiyat} <span className="text-[#23856D] ml-2">{product.fiyat2}</span></p>
                        </div>
                    
                    ))}
                </div>
            </div>
            {/* Buton */}
            <div className='flex justify-center items-center my-20'>
                <button className='bg-white text-[#23A6F0] tracking-[.125em] font-bold border-2 rounded-sm border-[#23A6F0] py-[0.93rem] mobile:px-[1rem] px-[2.5rem]'>LOAD MORE PRODUCTS</button>
            </div>

        </div>
    )
}
