import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const GetCerto = () => {
  return (
    <main className='bg-gradient-to-t from-[#4B48E5] to-[#2925CC] py-20 flex flex-col gap-10 text-white justify-center items-center'>
        <h2 className='text-4xl font-bold'>Is someone spying on your phone?</h2>
        <span className='text-lg'>Find out with Certo</span>
        <div className='flex flex-row gap-5'>
            <button className='bg-[#FFC247] text-black flex flex-row gap-2 items-center justify-center px-5 py-2 rounded-full'>
              <span className='font-bold'>Get Certro for iPhone</span>  
              <IoIosArrowRoundForward className='w-6 h-6'/>      
            </button>        
            <button className='border-2 border-white font-bold px-5 py-2 rounded-full'>
              Get Certro for Android
            </button>   
        </div>
    </main>
  )
}

export default GetCerto