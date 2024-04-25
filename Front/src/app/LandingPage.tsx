import React from 'react'
import LandingMobile from './LandingMobile'
import LandingPc from './LandingPc'



const LandingPage = () => {
  return (
    <div>
      <section className='max-sm:block md:hidden'> 
       <LandingMobile/> 
      </section>

      <section className='max-sm:hidden md:block' >
        {/* en esta seccion se coloca lo que queires renderizar */}
        <LandingPc/>
      </section>
    </div>
  )
}

export default LandingPage
