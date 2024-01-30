import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const socialIcons = [
    {
        id: 1,
        name: "Twitter",
        iconsSrc: "/twitter.png"
    },
    {
        id: 2,
        name: "Facebook",
        iconsSrc: "/facebook.png"
    },
    {
        id: 3,
        name: "Youtube",
        iconsSrc: "/youtube.png"
    },
]

const importantLinks = [
    {
        id: 1,
        label: "iPhone"
    },
    {
        id: 2,
        label: "Android"
    },
    {
        id: 3,
        label: "Help"
    },
    {
        id: 4,
        label: "About"
    },
    {
        id: 5,
        label: "Insights"
    },
]

const Footer = () => {
  return (
    <main className='bg-[#02033B] py-20 px-40 text-white flex flex-col gap-20 justify-between'>
        <section className='flex flex-row justify-between'>
            <div className='flex flex-col gap-10'>
                <h4 className='font-bold text-2xl'>Scan.Detect.Remove.</h4>
                <div className='flex flex-row gap-10'>
                    {socialIcons.map((item) => (
                      <img key={item?.id} src={item?.iconsSrc} alt={item?.name} />
                    ))} 
                </div> 
                  <div className='flex flex-row gap-5'>
                    <span className='underline underline-offset-2 font-semibold'>Privacy Policy</span>
                    <span className='underline underline-offset-2 font-semibold'>Terms of Service</span>
                  </div>
                <div className='flex flex-col gap-3 w-96'>
                    <p>Copyright &copy; 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>  
                    <p>Designed & developed by <span className='underline'>Bigger Picture</span></p>  
                </div>
            </div>
            
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-bold'>Certo</h2>
                    <div className='h-px w-40 bg-white'/>  
                </div>
                  <div className='flex flex-col gap-5'>
                      {importantLinks.map((link) => (
                    <div key={link?.id} className='flex flex-row items-center gap-3'>
                        <div className='w-5 h-px bg-[#FFC247]'/>      
                        <div className='text-[#FFC247] font-bold'>{ link?.label }</div>      
                    </div>
                ))}  
                  </div>
            </div>      
            <div className='w-[450px] bg-[#FFC247] h-fit text-black p-8 rounded-3xl flex flex-col gap-5'>
                <h2 className='font-bold text-2xl'>Sign up to our newsletter</h2>
                <p>Recieve the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                <div>
                    <input type="text" className='py-1 px-5 rounded-l-full' placeholder='Email address' />
                    <button className='bg-black text-white font-bold px-5 py-1 rounded-r-full'>Submit</button>
                </div>
            </div>        
        </section>
        <section className='w-2/3'>
            Apple , the Apple logo, and iPhone are trademarks of Apple Inc., registerd in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
        </section>  
    </main>
  )
}

export default Footer