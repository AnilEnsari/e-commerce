import React from 'react';
import girl from "../assets/AboutPageLetsGrowGirl.png"

export default function AboutPageNowLetsGrow() {
    return (
        <div className='w-full flex'>
            <div className='w-4/5 mobile:w-full mobile:h-[30rem] h-[40rem] bg-[#2A7CC7] flex items-center justify-center'>
                <div className='w-[26rem]'>
                    <h6 className='text-[#FFFFFF] mobile:text-center font-bold text-[1.2rem] mb-4'>WORK WITH US</h6>
                    <h1 className='text-[#FFFFFF] mobile:text-center text-[2.5rem] font-bold'>Now Let’s grow Yours</h1>
                    <p className='text-[#FFFFFF] mobile:text-center my-4'>
                        The gradual accumulation of information about atomic <br /> and small-scale behavior during the first quarter of the 20th
                    </p>
                    <button className='text-[#FAFAFA] mobile:ml-32 py-[1rem] mt-4 px-[2.5rem] border-[#FAFAFA] border-2'>Button</button>
                </div>
            </div>
            <img src={girl} className='mobile:hidden'/>
        </div>
    );
}
