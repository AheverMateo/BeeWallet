import React from 'react'

const SideBarFooter = () => {
  return (
    <main>
        <section className="rounded-[0.5625rem] max-md:mt-4 bg-[#232323] md:w-[4.75rem] md:h-[22.625rem] flex md:flex-col items-center justify-around p-2">
        <button className="size-[2rem] ">
          <img src="/icons/Home 3.svg" alt="Home" className="object-cover" />
        </button>
        
        <button className="size-[2rem] ">
          <img src="/icons/Activity 2.svg" alt="Chart" className="object-cover" />
        </button>
        <button className="size-[2rem] ">
          <img
            src="/icons/Profile Octagon.svg"
            alt="Home"
            className="object-cover"
          />
        </button>
      </section>
    </main>
  )
}

export default SideBarFooter