import React, { useState } from "react";
import RBLimit from "./ui/RBLimit";
import RBMonth from "./ui/RBMonth";

const AccountData3 = () => {
  const [showRBLimit, setShowRBLimit] = useState(false);
  const [showRBMonth, setShowRBMonth] = useState(false);

  return (
    <div
      className="bg-[#161616] hidden rounded-[1rem]
    h-[21.13rem] w-[48.31rem] sm:grid sm:gap-8 sm:text-[0.875rem] sm:p-3"
    >
      <section className="flex gap-5">
        <div>
          <p className=" md:text-[1.625rem]">Límite de gastos</p>
          <div className="md:flex md:w-[30.3125rem] md:gap-3">
            <h2 className="md:text-[3rem]">$7.321,5</h2>
            <h3 className="text-xs relative bottom-0">de $10.000</h3>
          </div>
        </div>
        <div className="flex gap-5">
        <button onClick={() => setShowRBLimit(prevShow => !prevShow)}>Establecer el limite</button>
      {showRBLimit && <RBLimit />}
          <button onClick={() => setShowRBMonth(prevShow => !prevShow)}>Este mes</button>
          {showRBMonth && <RBMonth />}
        </div>
      </section>
      <div className="w-full bg-gray-200 rounded-full md:h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 md:h-2.5 rounded-full md:w-[45%]"></div>
      </div>
      <div>
        <p className="md:text-[1.625rem]">Descripción General</p>
      </div>
      <div className="flex pt-5">
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
