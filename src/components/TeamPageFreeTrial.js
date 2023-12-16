import React from 'react'

export default function TeamPageFreeTrial() {
    return (
        <div className='w-[70rem] mobile:w-[20rem] mx-auto text-center py-[5rem] '>
            <h1 className='text-[#252B42] text-[2.5rem] font-bold'>Start your 14 days free trial</h1>
            <p className='my-[1.88rem] text-[#737373] font-semibold'>Met minim Mollie non desert Alamo est sit cliquey dolordo met sent. RELIT official consequent.</p>
            <button className='mb-[1.88rem] px-[2.5rem] py-[1rem] bg-[#23A6F0] text-[#FFFFFF] font-bold rounded'>Try it free now</button>
            <div className='flex justify-center gap-[2.125rem] my-[2rem]'>
                <img
                    src="https://file.rendit.io/n/Z4bGQqOeLFJIxPrJ6ioP.svg"
                    id="LogostwitterRoot"
                    className="w-8 cursor-pointer"
                />
                <img
                    src="https://file.rendit.io/n/AVGYNj6OakzWgBx2Rqrt.svg"
                    id="LogosfacebookRoot"
                    className="w-8 cursor-pointer"
                />
                <img src="https://file.rendit.io/n/BW0f81GezcavE6iRynru.svg" className="w-8 cursor-pointer" />
                <img
                    src="https://file.rendit.io/n/JxGhWGdDcIXAAzc7RroJ.svg"
                    id="LogoslinkediniconRoot"
                    className="w-8 cursor-pointer"
                />
            </div>
        </div>
    )
}
