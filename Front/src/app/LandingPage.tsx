import React from 'react'
import LandingMobile from './LandingMobile'
import LandingPc from './LandingPc'



const LandingPage = () => {
  return (
    <div>
      <section className='block md:hidden'> 
       <LandingMobile/> 
      </section>

      <section className='hidden md:block' >
        {/* en esta seccion se coloca lo que queires renderizar */}
        <LandingPc/>
      </section>
    </div>
  )
}

export default LandingPage
