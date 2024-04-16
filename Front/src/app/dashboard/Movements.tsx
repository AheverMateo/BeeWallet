import React from "react";
import Table from "./HistoryTable";

const Movements = () => {
  return (
    <main>
      <section className="flex justify-between  p-3">
        <h1 className="text-center text-3xl">Historial de Movimientos</h1>
        <div className="gap-3 flex justify-between">
          <input
            className="rounded-[3.0625rem] p-1"
            type="text"
            placeholder="Search"
          />
          <button className="rounded-full bg-[#232323] p-2">
            <img src="/icons/Filter 5.svg" alt="search" />
          </button>
        </div>
      </section>
      <section className="w-[70rem]"> <Table/></section>
      
    </main>
  );
};

export default Movements;
