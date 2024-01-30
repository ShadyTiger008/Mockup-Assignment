import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Help = () => {
  return (
    <main className='bg-white flex flex-row gap-32 py-20 justify-center items-center'>
        <section className='w-96 bg-gradient-to-t from-[#FDB235] to-[#F7C95F] p-8 rounded-3xl flex flex-col gap-5'>
            <h2 className='font-bold text-2xl'>Read our story</h2>
            <p>Find out why thousands trust Creto to secure their mobile world</p>
            <button className='flex flex-row items-center justify-center gap-1 w-fit rounded-full px-5 py-2 bg-[#4335DE]'>
                <span className='font-bold text-white'>About us</span>
                <IoIosArrowRoundForward className='w-6 h-6 text-white' />
            </button>  
        </section>      
        <section className='w-60 h-44 flex flex-col justify-between'>
            <h2 className='font-bold text-xl'>Help Center</h2>
            <p>Help topics, getting started guides and FAQs.</p>
            <button className='px-5 py-2 font-bold rounded-full w-fit border-2 border-black'>Visit help center</button>  
        </section>      
    </main>
  )
}

export default Help