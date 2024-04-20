import React from 'react'
import { Link } from 'react-router-dom'

const SideBarFooter = () => {
  return (
    <main>
        <section className="rounded-[0.5625rem] max-md:mt-4
        md:w-[4.75rem] md:h-[28.06rem] flex md:flex-col items-center justify-between p-2">
        <br />
        <button className='flex items-center md:h-[9.37rem] border-t-2 border-[#323131]'>
          <Link to={"/dashborard"}className="size-[2rem] ">
          <img src="/icons/Home 3.svg" alt="Home" className="object-cover size-[2rem]" />
        </Link>
        </button>
        
        <button className='flex items-center border-y-2 border-[#323131] md:h-[9.37rem]'>
        <Link to={"/statistics"} className="size-[2rem] ">
          <img src="/icons/Activity 2.svg" alt="Statistics" className="object-cover size-[2rem]" />
        </Link>
        </button>
        <button className='flex items-center justify-center md:h-[9.37rem] border-b-2 border-[#323131]'>
        <Link to={"/user"} className="size-[2rem] ">
          <img
            src="/icons/Profile Circle.svg"
            alt="Profile"
            className="object-cover size-[2rem]"
          />
        </Link>
        </button>
        <br />
      </section>
    </main>
  )
}

export default SideBarFooter