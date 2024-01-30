import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Details = () => {
  return (
    <main className='flex flex-row justify-between px-52 py-20'>
        <section className='flex flex-col justify-between w-[500px]'>
            <h1 className='text-4xl font-bold'>At Certo, mobile security is not an afterthought, its's what we do.</h1>
            <p className='tracking-wider text-md'>With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>
            <div className='flex flex-col gap-5 w-fit'>
                <button className='bg-[#FFC247] flex flex-row gap-2 items-center justify-center px-3 py-2 rounded-full'>
                    <span className='font-bold'>Get Certro for iPhone</span>  
                    <IoIosArrowRoundForward className='w-6 h-6'/>      
                </button>        
                <button className='border-2 border-black font-bold px-3 py-2 rounded-full'>
                    Get Certro for Android
                </button>              
            </div>  
        </section>      
        <section className='relative'>
            <div className='bg-[#FFC247] absolute w-[390px] h-[400px] -z-10 -bottom-2 left-1'></div>      
            <img src='/adobestock.png' alt='' className='z-10 w-96 h-84' />      
        </section>      
    </main>
  )
}

export default Details