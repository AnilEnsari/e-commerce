import React from 'react'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function OnlyBandage() {
  return (
    
         <div className="mt-8 w-[90rem] mobile:w-[20rem] mobile:flex-wrap mobile:flex-col mx-auto">
                <div className="text-black flex mobile:flex-col justify-between items-center text-center  ml-16 mobile:ml-0">
                    <h1 className="text-[1.5rem] font-bold mobile:mb-6 mobile:mx-auto text-[#252B42]">Bandage</h1>
                    <div className="flex gap-5 mr-80 mt-1 mobile:flex-col mobile:mx-auto">
                    <NavLink to={"/"} className="text-[#737373] font-bold" >Home</NavLink>
                    <NavLink to={"/products"} className="text-[#737373] font-bold" >Products</NavLink>
                    <NavLink to={"/pricing"} className="text-[#737373] font-bold" >Pricing</NavLink>
                    <NavLink to={"/contact"} className="text-[#737373] font-bold" >Contact</NavLink>
                    </div>
                    <div className='flex gap-16 mobile:top-5 mobile:gap-4 items-center mobile:flex-col text-center justify-center relative'>
                        <h5 className='cursor-pointer text-[#23A6F0] font-semibold mobile:mt-5'>Login</h5>
                        <button className='py-[0.94rem] font-bold px-[2rem] pr-12 rounded-md bg-[#23A6F0] text-[#FFFFFF]'>
                            Become a Member
                        </button>
                        <img src="https://file.rendit.io/n/ojwfStaZGYGdnC7qem2f.svg" className='absolute right-2 w-4 h-4 top-5'/>
                    </div>
                </div>
            </div>
    
  )
}
