import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const insightsData = [
    {
        id: 1,
        tag: "Expertise",
        title: "Signs Your Ex Is Spying On You",
        description: "In an ideal world, after a relationship ends both you and yor ex will move on. But what if they can't let go , and start spying on your...",
        imageSrc: "/1stexperty.png"
    },
    {
        id: 2,
        tag: "Guides",
        title: "How to Remove a Hacker from Your Samsung Phone",
        description: "Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apples's 28.43% as...",
        imageSrc: "/2ndexperty.png"
    },
    {
        id: 3,
        tag: "Expertise",
        title: "Is Your Cell Phone Under Surveillance?",
        description: "In today's survilliance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV...",
        imageSrc: "/3rdexperty.png"
    },
]

const LatestInsights = () => {
  return (
    <main className='bg-[#F3F8FF] flex flex-col justify-center items-center py-20 gap-14'>
        <h1 className='font-bold text-5xl'>Latest insights</h1>
        <div className='flex flex-row gap-10'>
          { insightsData.map((insight) => (
            <div className='relative flex flex-col w-72 rounded-3xl drop-shadow-sm bg-white'>
                <img src={ insight?.imageSrc } alt={ insight?.title } className='rounded-t-3xl' />
                  <span className='px-4 py-2 font-bold rounded-full bg-white text-black absolute top-5 left-5'>{ insight?.tag }</span>  
                <div className='flex flex-col p-8 gap-5 justify-between'>
                    <h3 className='font-bold text-xl'>{ insight?.title}</h3>
                    <h3 className=''>{ insight?.description}</h3>
                </div>
            </div>
          ))}  
        </div>
        <button className='bg-[#FFC247] flex flex-row gap-2 items-center justify-center px-5 py-2 rounded-full'>
            <span className='font-bold'>View all insights</span>  
            <IoIosArrowRoundForward className='w-6 h-6'/>      
        </button> 
    </main>
  )
}

export default LatestInsights