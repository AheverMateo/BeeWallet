import React from "react";

const AccountData2 = () => {
  return (
    <section className="flex h-full w-[27.5rem] justify-center gap-7 ">
      <div className="flex object-center justify-center 
      bg-[#232323] rounded-[1rem] p-6">
        <img
          src="/icons/UpCircle1.svg"
          alt="GastosTotales"
          className="w-[4.125rem] h-[2.8rem] object-cover rotate-180"
        />
        <div className="grid">
          <h1 className="text-xs">Ingresos Totales</h1>
          <h2>$7.321,5</h2>
        </div>
      </div>
      <div className="flex object-center justify-center 
      bg-[#232323] rounded-[1rem] p-6">
        <img
          src="/icons/UpCircle1.svg"
          alt="GastosTotales"
          className="w-[4.125rem] h-[2.8rem] object-cover"
        />
        <div className="grid">
          <h1 className="text-xs"> Gastos Totales</h1>
          <h2>$7.321,5</h2>
        </div>
      </div>
    </section>
  );
};

export default AccountData2;
