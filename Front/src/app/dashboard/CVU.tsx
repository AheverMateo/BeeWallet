import React, { useState } from "react";
const CVU = () => {

  return (
    <main className='bg-[#0E0E0E] z-15 w-[43.75rem] h-[46.9375rem] min-h-screen '>
      <>
        <section className="flex justify-between ">
          <div>Datos de cuenta</div> 
          <button>x</button>
        </section>
        <section className="p-5 ">
          <p>Para ingresar y recibir dinero desde cuentas digitales</p>
          <div className="bg-[#232323] flex flex-col p-5 gap-4 rounded-[1rem]">
            <section className="p-6">
              <h2>Tu alias</h2>
              <h2>Tu cvu</h2>
            </section>
            <section className="flex justify-center">
            <button className="border-[#FCCF58] border-[1px] 
            rounded-[6.25rem] md:w-[35.8125rem] w-[20rem] p-2 ">compartir datos</button>
            </section>
          </div>
        </section>

        <section className="p-5">
          <p>
            Pedí dinero a otras cuentas de Beewallet con tu teléfono o e-mail
          </p>
          <div className="bg-[#232323] flex flex-col p-5 gap-4 rounded-[1rem]">
            <section className="p-6">
            <h2>Tu telefono</h2>
            <h2>Tu email</h2>
            </section>
            <section className="flex justify-center">
            <button className="border-[#FCCF58] border-[1px] 
            rounded-[6.25rem] md:w-[35.8125rem] w-[20rem] p-2">Pedir dinero</button>
            </section>
          </div>
          
        </section>
      </>
    </main>
  );
};

export default CVU;
