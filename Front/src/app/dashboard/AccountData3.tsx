import React from "react";

const AccountData3 = () => {
  return (
    <div className="bg-[#232323] grid gap-8 text-[0.875rem] p-3">
      <section>
      <p className=" text-[1.625rem]">Límite de gastos</p>
      <div className="flex w-[30.3125rem] gap-3">
        <h2 className="text-[3rem]">$7.321,5</h2>
        <h3 className="text-xs relative bottom-0">de $10.000</h3>
      </div>
      </section>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
      </div>
      <div>
        <p className="text-[1.625rem]">Descripción General</p>
      </div>
      <div className="flex pt-5">
        <section className="flex flex-col gap-3">
          <div className="w-[13rem] h-2.5 bg-[#FCCF58] rounded-full"></div>
          <p className="text-xs">Productos</p>
        </section>
        <section className="flex flex-col gap-3">
          <div className="w-[6rem] h-2.5 bg-[#DCA12F] rounded-full"></div>
          <p className="text-xs">Facturas</p>
        </section>
        <section className="flex flex-col gap-3">
          <div className="w-[8rem] h-2.5 bg-[#EC7D17] rounded-full"></div>
          <p className="text-xs">Comida</p>
        </section>
        <section className="flex flex-col gap-3">
          <div className="w-[10rem] h-2.5 bg-[#DF1515] rounded-full"></div>
          <p className="text-xs">Otros</p>
        </section>
      </div>
    </div>
  );
};

export default AccountData3;
