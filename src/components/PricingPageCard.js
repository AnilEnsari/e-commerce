import React from 'react'

export default function PricingPageCard() {
    return (
        <div className='w-[90rem] py-[7rem] mx-auto'>
            <div className='w-[40rem] mx-auto'>
                <h1 className='text-[#252B42] text-[2.5rem] font-bold text-center'>Pricing</h1>
                <p className='text-[#737373] font-bold text-center mt-[0.62rem]'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            {/* Montly Year Kısmı */}
            <div className='flex justify-center my-[3rem] relative gap-4'>
                <h5 className='text-[#252B42] font-bold my-auto'>Montly</h5>
                <button className='my-auto w-[2.81rem] h-[1.5rem] border border-[#23A6F0] rounded-full ' />
                <div class="w-5 h-5 bg-[#737373] rounded-full text-center items-center absolute left-[40.2rem] top-[0.75rem] cursor-pointer"></div>
                <h5 className='text-[#252B42] font-bold my-auto'>Yearly</h5>
                <button className='px-[1.25rem] py-[0.62rem] bg-[#B2E3FF] text-[#23A6F0] rounded-[2.3125rem]'>Save 25%</button>
            </div>
            {/* Cardların Oldugu Kısım */}
            {/* İlk Free Card */}
            <div className='flex'>
                <div className='w-[33.3%] py-[3.12rem] px-[2.5rem] border border-[#23A6F0] rounded-[0.625rem]'>
                    <h1 className='text-[#252B42] font-bold text-center text-[1.5rem]'>FREE</h1>
                    <p className='text-[#737373] font-bold text-center py-[2.18rem]'>Organize across all apps by hand</p>
                    <div className='flex justify-center gap-4'>
                        <p className='text-[#23A6F0] text-[2.5rem] font-bold text-center'>0</p>
                        <div className=''>
                            <p className='text-[#23A6F0] font-bold text-[1.5rem]'>$</p>
                            <p className='text-[#8EC2F2] font-semibold '>Per Month</p>
                        </div>
                    </div>
                    {/* Tiklerin oldugu Kısım */}
                    <div className='py-[2.19rem]'>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center py-[1.5rem]'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center py-[1.5rem]'>
                            <div className="overflow-hidden bg-[#BDBDBD] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#BDBDBD] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#252B42] px-[4rem] mt-[2.19rem] py-[0.9rem] text-[#FFFFFF] font-bold rounded-[0.32rem] '>
                                Try for free
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                {/* StandartCard */}
                <div className='w-[33.3%] py-[3.12rem] px-[2.5rem] bg-[#252B42] border border-[#23A6F0] rounded-[0.625rem]'>
                    <h1 className='text-[#FFFFFF] font-bold text-center text-[1.5rem]'>STANDART</h1>
                    <p className='text-[#FFFFFF] font-bold text-center py-[2.18rem]'>Organize across all apps by hand</p>
                    <div className='flex justify-center gap-4'>
                        <p className='text-[#23A6F0] text-[2.5rem] font-bold text-center'>0</p>
                        <div className=''>
                            <p className='text-[#23A6F0] font-bold text-[1.5rem]'>$</p>
                            <p className='text-[#8EC2F2] font-semibold '>Per Month</p>
                        </div>
                    </div>
                    {/* Tiklerin oldugu Kısım */}
                    <div className='py-[2.19rem]'>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#FFFFFF] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center py-[1.5rem]'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#FFFFFF] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#FFFFFF] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center py-[1.5rem]'>
                            <div className="overflow-hidden bg-[#BDBDBD] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#FFFFFF] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#BDBDBD] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#FFFFFF] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#23A6F0] px-[4rem] mt-[2.19rem] py-[0.9rem] text-[#FFFFFF] font-bold rounded-[0.32rem] '>
                                Try for free
                            </button>
                        </div>
                    </div>
                </div>
                {/* CARD PREMIUM */}
                <div className='w-[33.3%] py-[3.12rem] px-[2.5rem] border border-[#23A6F0] rounded-[0.625rem]'>
                    <h1 className='text-[#252B42] font-bold text-center text-[1.5rem]'>FREE</h1>
                    <p className='text-[#737373] font-bold text-center py-[2.18rem]'>Organize across all apps by hand</p>
                    <div className='flex justify-center gap-4'>
                        <p className='text-[#23A6F0] text-[2.5rem] font-bold text-center'>0</p>
                        <div className=''>
                            <p className='text-[#23A6F0] font-bold text-[1.5rem]'>$</p>
                            <p className='text-[#8EC2F2] font-semibold '>Per Month</p>
                        </div>
                    </div>
                    {/* Tiklerin oldugu Kısım */}
                    <div className='py-[2.19rem]'>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center py-[1.5rem]'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#2dc071] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center py-[1.5rem]'>
                            <div className="overflow-hidden bg-[#BDBDBD] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex gap-8 justify-center items-center'>
                            <div className="overflow-hidden bg-[#BDBDBD] flex flex-col justify-center w-12 h-12 items-center rounded-[200px]">
                                <img src="https://file.rendit.io/n/CE38GqHM97AzPPTCcQhA.svg"
                                    className="w-6" />
                            </div>
                            <p className='text-[#252B42] font-bold'>Unlimited product updates </p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#252B42] px-[4rem] mt-[2.19rem] py-[0.9rem] text-[#FFFFFF] font-bold rounded-[0.32rem] '>
                                Try for free
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
