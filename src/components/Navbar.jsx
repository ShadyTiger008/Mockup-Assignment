import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const navbarList = [
    {
        id: 1,
        title: "iPhone"
    },
    {
        id: 2,
        title: "Android"
    },
    {
        id: 3,
        title: "Help"
    },
    {
        id: 4,
        title: "Company"
    },
]

const Navbar = () => {
  return (
    <div className='bg-[#F3F8FF] h-20 flex flex-row items-center px-20 justify-between'>
        <img src={ "/logo.png" } alt="" className='' />
          <section className='flex flex-row gap-20 items-center'>
              <ul className='flex flex-row gap-8 font-bold'>
                { navbarList.map((nav) => (
                    <div className='flex flex-row items-center gap-1'>
                        <li key={ nav.id }>{ nav.title }</li>
                        {nav?.title === "Company" && <IoIosArrowDown />}
                    </div>
                ))}
              </ul>
              <button className='rounded-full py-2 px-4 bg-[#4335DE] text-white font-bold'>Sign in</button>
          </section>  
    </div>
  )
}

export default Navbar