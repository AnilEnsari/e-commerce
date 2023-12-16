import React from 'react';
import video from "../assets/Video.mp4"

export default function AboutPageVideo() {
    return (

        <div className="my-40 relative">
            <video
                className="w-[62rem] h-[34rem] max-w-full flex mx-auto justify-center border border-gray-200 rounded-xl"
                autoPlay={false} // Otomatik oynatma açık
                muted={false}   // Ses açık
                controls
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='absolute top-52 left-[56rem] mobile:hidden'>
                <button className="overflow-hidden bg-[#23a6f0]  flex-col justify-center w-24 h-24 items-center mobile:hidden rounded-[73.5999984741211px] hidden">
                    <img
                        src="https://file.rendit.io/n/V23vJlUqPotoLaHf9rdc.svg"
                        id="IcnPlayIcnsm"
                        className="w-5"
                    />
                </button>
            </div>

        </div>
    );
}