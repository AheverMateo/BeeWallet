import React from 'react'
import { Link } from 'react-router-dom'

const SideBarFooter = () => {
  return (
    <main>
        <section className="rounded-[0.5625rem] max-md:mt-4 bg-[#232323] md:w-[4.75rem] md:h-[22.625rem] flex md:flex-col items-center justify-around p-2">
        <Link to={"/dashborard"}className="size-[2rem] ">
          <img src="/icons/Home 3.svg" alt="Home" className="object-cover" />
        </Link>
        
        <Link to={"/statistics"} className="size-[2rem] ">
          <img src="/icons/Activity 2.svg" alt="Statistics" className="object-cover" />
        </Link>
        <Link to={"/user"} className="size-[2rem] ">
          <img
            src="/icons/Profile Circle.svg"
            alt="Profile"
            className="object-cover"
          />
        </Link>
      </section>
    </main>
  )
}

export default SideBarFooter