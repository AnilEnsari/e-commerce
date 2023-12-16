import React from 'react'
import redGirl from "../assets/TeamPageRedPicture.png"
import WhiteGirl from "../assets/TeamPageFirstRight.png"
import BlackGirl from "../assets/TeamPageBlack.png"
import Picture3 from "../assets/TeamPage picture.png"
import Picture4 from "../assets/TeamPageBlueJEan.png"

export default function TeamPageHeroes() {
    return (
        <div className='my-20 flex mobile:flex-col mobile:gap-y-6'>
            {/* Sol Kısım */}
            <img className='min-w-[50%] mr-4 mobile:w-full' src={redGirl} alt='resim'  />
            {/* Sağ Kısım */}
            <div className='flex gap-4 min-w-[50%]'>
                <div className='flex flex-col justify-center items-center h-[100%] w-[50%]'>
                    <img src={WhiteGirl} alt='resim' className='h-[100%] w-[100%]' />
                    <img src={BlackGirl} alt='resim' className='h-[100%] w-[100%] pt-4' />
                </div>
                <div className='flex flex-col justify-center items-center h-[100%] w-[50%]'>
                    <img src={Picture3} alt='resim' className='h-[100%] w-[100%]' />
                    <img src={Picture4} alt='resim' className='h-[100%] w-[100%] pt-4' />
                </div>
            </div>
        </div>
    )
}
