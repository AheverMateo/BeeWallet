import React from 'react'

const AccountData1 = () => {
  return (
    <main className=' flex flex-col relative
    w-[27.0625rem] h-[15.625rem]
    rounded-[1rem]'>
        <h1 className='md:text-[1.625rem] text-[1.5rem] text-[#B5B5B5]'>Disponible</h1>
        <h2 className='text-[3rem]'>$7.321,5</h2>
        <h2 className='mt-6 hidden md:block'>**** **** **** 1076</h2>
        <section className='flex justify-center gap-2 absolute bottom-4'>
          <button className='h-[2rem] w-[8.2rem] bg-[#FCCF58] rounded-[1.15625rem] border border-solid border-[#FCFFFF]'>Transferir</button>
          <button className='h-[2rem] w-[8.2rem] rounded-[1.15625rem] border border-solid border-[#FCFFFF]'>Ingresar</button>
          <button className=' border border-solid border-[#FCFFFF] rounded-[1.15625rem]
          h-[2rem] w-[8.2rem]'>Retirar</button>
        </section>
    </main>
  )
}

export default AccountData1