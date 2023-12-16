import React from 'react'

export default function ProductPageDescription() {
    return (
        <div className='flex w-[70rem] mobile:w-[25rem] mx-auto justify-center gap-8 pb-12'>
                <h1 className='text-[#737373] font-semibold'>Description</h1>
                <h1 className='text-[#737373] font-semibold'>Additional Information</h1>
                <h1 className='text-[#737373] font-semibold'>Reviews <span>(0)</span></h1>
        </div>
    )
}
