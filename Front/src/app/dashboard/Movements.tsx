import React from "react";
import Table from "./HistoryTable";

const Movements = () => {
  return (
    <main>
      <section className="md:flex md:justify-between md:p-3">
        <h1 className="md:text-center md:text-3xl">Historial de Movimientos</h1>
        <div className="md:gap-3 md:flex md:justify-between">
          <input
            className="md:rounded-[3.0625rem] md:p-1"
            type="text"
            placeholder="Search"
          />
          <button className="rounded-full bg-[#232323] md:p-2">
            <img src="/icons/Filter 5.svg" alt="search" />
          </button>
        </div>
      </section>
      <section className="md:w-[70rem]"> <Table/></section>
      
    </main>
  );
};

export default Movements;
