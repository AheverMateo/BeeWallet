import React from 'react'

const AccountData1 = () => {
  return (
    <main className=' flex flex-col relative
    w-[27.0625rem] h-[15.625rem] bg-[#232323] 
    rounded-[1rem] p-2'>
        <h1 className='text-[1.625rem]'>Disponible</h1>
        <h2 className='text-[3rem]'>$7.321,5</h2>
        <h2 className='mt-6'>**** **** **** 1076</h2>
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