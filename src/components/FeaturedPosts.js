import React from 'react'
import data from "../data/Data"

export default function FeaturedPosts() {
    return (
        <div className='mb-40'>
            {/* Üst Div */}
            <div className='text-center mobile:w-full w-1/5 mx-auto'>
                <h6 className='text-[#23A6F0] text-[0.875rem] font-bold'>Practice Advice</h6>
                <h1 className='mt-4 mobile:w-[20rem] mobile:mx-auto text-[#252B42] text-[2.5rem] font-bold tracking-[0.0125rem]'>Featured Posts</h1>
            </div>

            {/* Alt Div */}
            <div className='flex flex-wrap flex-row gap-y-8 mobile:px-3 justify-center mt-24'>
                {data.featuredPost.map((elaman, index) => (
                    <div className='relative flex' key={index}>
                        {/* Resim-Sol Div */}
                        <img src={elaman.resim} alt='resim' />
                        <img className='absolute top-5 left-3' alt='resim' src={elaman.saleYazısı} />
                        <img src={elaman.IconKalp} alt='resim' className='absolute bottom-5 left-4 bg-white p-2 rounded-full' />
                        <img src={elaman.IconAlısverisi} alt='Alısveris' className='absolute bottom-5 left-20 bg-white p-2 rounded-full' />
                        <img src={elaman.IconIncele} alt='Incele' className='absolute bottom-5 left-40 bg-white p-2 rounded-full' />
                        {/* Sağ Taraf Yazı vs. */}
                        <div className='w-[20rem] ml-8'>
                            <div className='flex'>
                                <h1 className='text-[#23A6F0] text-[1rem] font-bold leading-6 tracking-[0.0125rem]'>{elaman.baslik}</h1>
                                <img alt='resim' className='ml-8' src={elaman.Oran} />
                            </div>
                            <h1 className='my-4 text-[#252B42] font-bold text-[1.25rem]'>{elaman.baslik2}</h1>
                            <p className='text-[#737373] font-semibold text-[0.9rem]'>{elaman.paragraf}</p>
                            <div className='flex mt-4'>
                                <img src={elaman.frame} alt='resim' />
                                <h5 className='ml-4 text-[#737373] text-[.9rem] font-semibold'>{elaman.sales}</h5>
                            </div>
                            <div className='flex my-4 '>
                                <h1 className='text-[#BDBDBD] text-[1rem] font-semibold'>{elaman.fiyat}</h1>
                                <h1 className='mx-4 text-[#23856D] text-[1.rem] font-bold'>{elaman.fiyat2}</h1>
                            </div>
                            <img src={elaman.productColors} alt='resim' />
                            <div className='flex flex-wrap justify-evenly mt-8 mr-16 gap-2'>
                                <div className='flex gap-1'>
                                    <img alt='resim' src={elaman.saatResim} />
                                    <h5>{elaman.saat}</h5>
                                </div>
                                <div className='flex gap-1'>
                                    <img alt='resim' src={elaman.IconSaatYanı} />
                                    <h5>{elaman.IconSaatYanıYazı}</h5>
                                </div>
                                <div className='flex gap-1'>
                                    <img alt='resim' src={elaman.IconDag} />
                                    <h5>{elaman.IconDagYanıYazı}</h5>
                                </div>
                            </div>
                            <button className='text-[#23A6F0] py-[.62rem] px-[1.25rem] border-[#23A6F0] border-2 font-bold rounded-[2.31rem] mt-8'>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
