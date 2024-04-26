import Table from "./HistoryTable";
import MobileTable from "./MobileTable";

const Movements = () => {

  const movements = [
    {
      id: 1,
      name: "Compra de zapatos",
      typeOf: "Gasto",
      status: "Success",
      date: "12/12/2021",
      amount: 100,
    },
    {
      id: 2,
      name: "venta de zapatos",
      typeOf: "Gasto",
      status: "Failed",
      date: "11/12/2021",
      amount: 100,
    },
    {
      id: 3,
      name: "tranferencia de dinero",
      typeOf: "Transferencia",
      status: "Pending",
      date: "10/12/2021",
      amount: 100,
    },
    {
      id: 4,
      name: "venta de zapatos",
      typeOf: "Recepccion de dinero",
      status: "Failed",
      date: "09/12/2021",
      amount: 100,
    },
    {
      id: 5,
      name: "Netflix",
      typeOf: "Gasto",
      status: "Success",
      date: "08/12/2021",
      amount: 200,
    },
    {
      id: 6,
      name: "Pan",
      typeOf: "Gasto",
      status: "Success",
      date: "08/12/2021",
      amount: 20,
    },
    {
      id: 7,
      name: "Agua",
      typeOf: "Gasto",
      status: "Success",
      date: "08/12/2021",
      amount: 200,
    }

  ];
  const getStatusClass = (status:string) => {
    switch (status) {
      case 'Success':
        return 'text-[#1CC719]';
      case 'Pending':
        return 'text-yellow-500';
      case 'Failed':
        return 'text-[#B90707]';
      default:
        return '';
    }
  };
  const getPointClass = (status:string) => {
    switch (status) {
      case 'Success':
        return 'bg-[#1CC719]';
      case 'Pending':
        return 'bg-yellow-500';
      case 'Failed':
        return 'bg-[#B90707]';
      default:
        return '';
    }
  };


  return (
    <main className="mt-8 max-sm:flex max-sm:flex-col max-sm:gap-5">
      <section className="md:p-3 flex justify-between">
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
          <Table movements={movements} getStatusClass={getStatusClass} getStatusPointClass={getPointClass} />
        </div>
        <div className=" sm:hidden">
          <MobileTable movements={movements} getStatusClass={getStatusClass} />
        </div>
      </section>
    </main>
  );
};

export default Movements;
