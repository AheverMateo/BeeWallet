import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roles: string[];
}

interface WalletData {
  userId: string;
  _id: string;
  cvu: string;
  balance: string;
  currency: string;
  transactions: string[];
}

const CVU = () => {
  return (
    <div
      className="bg-[#0E0E0E] flex flex-col items-center z-20 max-md:w-[10.5rem] 
    max-md:h-[63.9375rem] md:w-[43.75rem] md:h-[46.9375rem] rounded-[1rem] fixed p-3 font-inter"
    >
      <>
        <section className="flex justify-between w-full">
          <div className="">Datos de cuenta</div>
          <br />
          <div className="">
            <Link to={"/dashboard"}>
              <img src="/icons/close.svg" alt="" />
            </Link>
          </div>
        </section>
        <section
          className="p-5 max-sm:w-[19.625rem] max-sm:h[13.1875rem]
        flex flex-col gap-1"
        >
          <p className="pl-1">
            Para ingresar y recibir dinero desde cuentas digitales
          </p>
          <div className="bg-[#232323] flex flex-col p-5 gap-4 rounded-[1rem]">
            <section className="p-6 flex flex-col gap-5">
              <h2>Tu alias</h2>
              <h2 className="pt-5 border-t-[1px] boder-t-[#323131cc]">
                Tu cvu
              </h2>
            </section>
            <section className="flex justify-center">
              <button
                className="border-[#FCCF58] hover:bg-[#FCCF58] hover:text-[#0E0E0E] border-[1px] 
            rounded-[6.25rem] md:w-[35.8125rem] w-[20rem] p-2 "
              >
                compartir datos
              </button>
            </section>
          </div>
        </section>

        <section className="p-5 flex flex-col gap-1">
          <p className="pl-1">
            Pedí dinero a otras cuentas de Beewallet con tu teléfono o e-mail
          </p>
          <div className="bg-[#232323] flex flex-col p-5 gap-4 rounded-[1rem]">
            <section className="p-6 flex flex-col gap-5">
              <h2>Telefono</h2>
              <h2 className="pt-5 border-t-[1px] boder-t-[#323131cc]">
                Correo electrónico
              </h2>
            </section>
            <section className="flex justify-center">
              <button
                className="border-[#FCCF58] hover:bg-[#FCCF58] hover:text-[#0E0E0E] border-[1px] 
            rounded-[6.25rem] md:w-[35.8125rem] w-[20rem] p-2"
              >
                Pedir dinero
              </button>
            </section>
          </div>
        </section>
      </>
    </div>
  );
};

export default CVU;
