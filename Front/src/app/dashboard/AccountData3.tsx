import React from "react";

const AccountData3 = () => {
  return (
    <div className="bg-[#232323] rounded-[1rem] h-fit md:grid md:gap-8 md:text-[0.875rem] md:p-3">
      <section>
      <p className=" md:text-[1.625rem]">Límite de gastos</p>
      <div className="md:flex md:w-[30.3125rem] md:gap-3">
        <h2 className="md:text-[3rem]">$7.321,5</h2>
        <h3 className="text-xs relative bottom-0">de $10.000</h3>
      </div>
      </section>
      <div className="w-full bg-gray-200 rounded-full md:h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 md:h-2.5 rounded-full md:w-[45%]"></div>
      </div>
      <div>
        <p className="md:text-[1.625rem]">Descripción General</p>
      </div>
      <div className="flex pt-5 pb-5">
        <section className="md:flex md:flex-col md:gap-3">
          <div className="md:w-[13rem] md:h-2.5 bg-[#FCCF58] rounded-full"></div>
          <p className="text-xs">Productos</p>
        </section>
        <section className="md:flex md:flex-col md:gap-3">
          <div className="md:w-[6rem] md:h-2.5 bg-[#DCA12F] rounded-full"></div>
          <p className="text-xs">Facturas</p>
        </section>
        <section className="md:flex md:flex-col md:gap-3">
          <div className="md:w-[8rem] md:h-2.5 bg-[#EC7D17] rounded-full"></div>
          <p className="text-xs">Comida</p>
        </section>
        <section className="md:flex md:flex-col md:gap-3">
          <div className="md:w-[10rem] md:h-2.5 bg-[#DF1515] rounded-full"></div>
          <p className="text-xs">Otros</p>
        </section>
      </div>
    </div>
  );
};

export default AccountData3;
