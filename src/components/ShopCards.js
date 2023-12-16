import React from 'react'
import ProductCardLeft from "../assets/ProductCardLeft.jpg"
import PCRA from "../assets/PCRU.jpg"
import PCRU from "../assets/PCRA.jpg"

export default function ShopCards() {
    return (
        <div className='flex mb-40 flex-wrap justify-center gap-12 relative'>
            {/* Sol Taraf */}
            <div>
                <div className='relative'>
                    <img src={ProductCardLeft} alt='CardLeft]' />
                    <div className='absolute bottom-0 left-0 right-[35%] mobile:right-0 top-[55%] flex flex-col justify-center items-center  border-2 border-sky-500 bg-[#2D8BC0BF] bg-opacity-75' >
                        <p className='text-[1.5rem] text-white font-bold'>Top Product Of</p>
                        <p className='text-[1.5rem] text-white font-bold'>the Week</p>
                        <button className='mt-[1.25rem] border text-white font-bold px-[2.5rem] py-[0.94rem]'>EXPLORE ITEMS</button>
                    </div>
                </div>

            </div>
            {/* Sağ Taraf */}
            <div>
                <div className='relative'>
                    <img src={PCRU} />
                    <div className='absolute bottom-0 left-0 right-[20%] top-[40%] mobile:right-0  flex flex-col justify-center items-center  border-2 border-sky-500 bg-[#2D8BC0BF] bg-opacity-75' >
                        <p className='text-[1.25rem] text-white'>Top Product Of the Week</p>
                        <button className='mt-[1.25rem] border text-white font-bold px-[2.5rem] py-[0.94rem]'>EXPLORE ITEMS</button>
                    </div>
                </div>

                <div className='mt-6 relative'>
                    <img src={PCRA} />
                    <div className='absolute bottom-0 left-0 right-[20%] top-[40%] mobile:right-0  flex flex-col justify-center items-center  border-2 border-sky-500 bg-[#2D8BC0BF] bg-opacity-75' >
                        <p className='text-[1.25rem] text-white'>Top Product Of the Week</p>
                        <button className='mt-[1.25rem] border text-white font-bold px-[2.5rem] py-[0.94rem]'>EXPLORE ITEMS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
