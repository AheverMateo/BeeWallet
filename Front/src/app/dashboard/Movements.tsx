import React from "react";
import Table from "./HistoryTable";
import MobileTable from "./MobileTable";

const Movements = () => {
  return (
    <main>
      <section className="md:p-3 flex justify-between ">
        <h1 className="md:text-center md:text-3xl">Historial de Movimientos</h1>
        <div className="md:gap-3 md:flex md:justify-between">
          <input
            className="md:rounded-[3.0625rem] md:p-1 hidden md:block"
            type="text"
            placeholder="Search"
          />
          <button className="rounded-full bg-[#232323] md:p-2">
            <img src="/icons/Filter 5.svg" alt="search" />
          </button>
        </div>
      </section>
      <section className="md:w-[70rem]">
        <div className="hidden sm:block">
          <Table />
        </div>
        <div className=" sm:hidden">
          <MobileTable />
        </div>
      </section>
    </main>
  );
};

export default Movements;
