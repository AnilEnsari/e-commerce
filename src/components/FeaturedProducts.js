import React from 'react'
import Kitap1 from "../assets/bx_bxs-book-reader.png"
import Kitap2 from "../assets/carbon_book.png"
import Ok from "../assets/uil_arrow-growth.png"

export default function FeaturedProducts() {
  return (
    <div className='w-5/6  mx-auto mb-40'>
      {/* Üst Div */}
      <div className='text-center'>
        <h1 className='text-[#737373] text-[1.25rem] font-semibold'>Featured Products</h1>
        <h1 className='text-[#252B42] font-bold text-[1.5rem] tracking-[0.0625rem] my-4'>THE BEST SERVICES</h1>
        <p className='text-[#737373] text-[0.875rem] font-semibold'>Problems trying to resolve the conflict between </p>
      </div>
      {/* Alt Div */}
      <div className='flex flex-wrap justify-around mobile:mt-10 mt-40'>
        <div className='text-center'>
          <img src={Kitap1} alt='kitap' className='mx-auto'/>
          <h1 className='my-8 text-[#252B42] text-[1.5rem] font-bold'>Easy Wins</h1>
          <p className='text-[#737373] text-[0.875rem] font-semibold'>Get your best looking smile now!</p>
        </div>

        <div className='text-center'>
          <img src={Kitap2} alt='kitap' className='mx-auto'/>
          <h1 className='my-8 text-[#252B42] text-[1.5rem] font-bold'>Concrete</h1>
          <p className='text-[#737373] text-[0.875rem] font-semibold'>Defalcate is most focused in helping you discover your most beautiful smile</p>
        </div>

        <div className='text-center'>
        <img src={Ok} alt='kitap' className='mx-auto'/>
          <h1 className='my-8 text-[#252B42] text-[1.5rem] font-bold'>Hack Growth</h1>
          <p className='text-[#737373] text-[0.875rem] font-semibold'>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  )
}
