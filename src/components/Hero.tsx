import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <main className='relative'>
        <img src="/Ellipse.png" alt="" className='-z-10 absolute top-0 left-0' />
        <section className='z-10 flex flex-row justify-end pt-20'>
            <div className='w-[600px] py-10 flex flex-col gap-20 mr-2'>
              <h2 className='font-bold text-6xl'>Your mobile privacy is our mission</h2>
              <p className='text-xl tracking-wide'>Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iphone and Android devices.</p>
              <div className='flex flex-row justify-between items-center'>
                <button className='bg-[#FFC247] flex flex-row gap-2 items-center justify-center px-3 py-2 rounded-full'>
                    <span className='font-bold'>Get Certro for iPhone</span>  
                    <IoIosArrowRoundForward className='w-6 h-6'/>      
                </button>        
                <button className='border-2 border-black font-bold px-3 py-2 rounded-full'>
                    Get Certro for Android
                </button>        
              </div>
            </div>
            <div className='relative'>
                <img src='/hero-image.png' alt='' className='border-t-[15px] border-l-[15px] border-[#4335DE]'/>    
                <img src='/phone.png' alt='' className='absolute top-10 left-10'/>    
            </div>  
        </section>  
    </main>
  )
}

export default Hero