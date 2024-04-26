import { useEffect, useState } from "react";
import Table from "./HistoryTable";
import MobileTable from "./MobileTable";
import axios from "axios";

type Movement = {
  transactions: string[];
};

type WalletTransactionsData = {
  type: string;
  amount: string;
  currency: string;
  fromWalletId: string;
  toWalletId?: string;
  status: "Pending" | "Success" | "Failed";
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const Movements: React.FC = () => {
  const [walletTransactionsData, setWalletTransactionsData] = useState<
    WalletTransactionsData[]
  >([]);

  useEffect(() => {
    const fetchWalletTransactionsData = async () => {
      try {
        const response = await axios.get(
          "https://beewalletback.onrender.com/api/wallets/transactions/0",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          setWalletTransactionsData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
        alert("Failed to fetch transactions. Please try again later.");
      }
    };

    fetchWalletTransactionsData();
  }, []);

  // const movements = [
  //   {
  //     id: 1,
  //     name: "Compra de zapatos",
  //     typeOf: "Gasto",
  //     status: "Success",
  //     date: "12/12/2021",
  //     amount: 100,
  //   },
  //   {
  //     id: 2,
  //     name: "venta de zapatos",
  //     typeOf: "Gasto",
  //     status: "Failed",
  //     date: "11/12/2021",
  //     amount: 100,
  //   },
  //   {
  //     id: 3,
  //     name: "tranferencia de dinero",
  //     typeOf: "Transferencia",
  //     status: "Pending",
  //     date: "10/12/2021",
  //     amount: 100,
  //   },
  //   {
  //     id: 4,
  //     name: "venta de zapatos",
  //     typeOf: "Recepccion de dinero",
  //     status: "Failed",
  //     date: "09/12/2021",
  //     amount: 100,
  //   },
  //   {
  //     id: 5,
  //     name: "Netflix",
  //     typeOf: "Gasto",
  //     status: "Success",
  //     date: "08/12/2021",
  //     amount: 200,
  //   },
  //   {
  //     id: 6,
  //     name: "Pan",
  //     typeOf: "Gasto",
  //     status: "Success",
  //     date: "08/12/2021",
  //     amount: 20,
  //   },
  //   {
  //     id: 7,
  //     name: "Agua",
  //     typeOf: "Gasto",
  //     status: "Success",
  //     date: "08/12/2021",
  //     amount: 200,
  //   },
  // ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Success":
        return "text-[#1CC719]";
      case "Pending":
        return "text-yellow-500";
      case "Failed":
        return "text-[#B90707]";
      default:
        return "";
    }
  };
  const getPointClass = (status: string) => {
    switch (status) {
      case "Success":
        return "bg-[#1CC719]";
      case "Pending":
        return "bg-yellow-500";
      case "Failed":
        return "bg-[#B90707]";
      default:
        return "";
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
          {/*<Table
            movements={Movements}
            getStatusClass={getStatusClass}
            getStatusPointClass={getPointClass}
          />*/}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[76.6875rem]">
            <div className="overflow-y-auto max-h-80">
              <table
                className="w-full text-sm text-left rtl:text-right
     bg-[#232323] text-gray-500 dark:text-gray-400 realative "
              >
                <thead className="text-xs uppercase sticky top-0 z-10 bg-[#232323]">
                  <tr>
                    <th scope="col" className="px-6 py-3 w-1/5">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/5">
                      Tipo
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/5">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/5">
                      fecha
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/5">
                      monto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {movements.map((movement: Movement) => (
                    <tr
                      className="bg-[#232323] border-b  dark:border-gray-700
                     hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={movement.id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-left align-middle "
                      >
                        {movement.name}
                      </th>
                      <td className="px-6 py-4 text-left align-middle">
                        {movement.typeOf}
                      </td>
                      <td className="px-6 py-4 text-left align-middle flex justify-center items-center gap-2">
                        <p
                          className={`size-[5px] ${getStatusPointClass(
                            movement.status
                          )} rounded-full`}
                        ></p>
                        {movement.status}
                      </td>
                      <td className="px-6 py-4 text-left align-middle">
                        {movement.date}
                      </td>
                      <td
                        className={`px-6 py-4 text-left align-middle ${getStatusClass(
                          movement.status
                        )}`}
                      >
                        {movement.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" sm:hidden">
          {/* 
          <MobileTable movements={Movements} getStatusClass={getStatusClass} /> 
          */}
          <div className="font-inter ">
            <section>
              <table className="w-full overflow-y-auto">
                <tbody className=" flex flex-col gap-5">
                  {movements.map((movement: Movement) => (
                    <tr
                      className="bg-[#161616]  text-[0.875rem] rounded-[0.625rem] flex justify-between items-center p-5"
                      key={movement.id}
                    >
                      <td className="flex flex-col gap-1">
                        <p>{movement.name}</p>
                        <p>{movement.typeOf}</p>
                      </td>
                      <td className={getStatusClass(movement.status)}>
                        {movement.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Movements;
