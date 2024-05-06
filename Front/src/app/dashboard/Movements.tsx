import { useEffect, useState } from "react";
import axios from "axios";

type Decimal128 = {
  $numberDecimal: string;
};

type Transaction = {
  _id: string;
  type: string;
  amount: string; // This will be processed to string
  currency: string;
  fromWalletId: string;
  toWalletId?: string;
  status: "Pending" | "Success" | "Failed";
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const Movements: React.FC = () => {
  const [walletTransactionsData, setWalletTransactionsData] = useState<Transaction[]>([]);

  useEffect(() => {
    // Helper function to check and convert Decimal128 to string
    function processDecimal128(value: unknown): string {
      if (
        typeof value === "object" &&
        value !== null &&
        (("$numberDecimal" in value))
      ) {
        return (value as Decimal128).$numberDecimal;
      }
      return value as string;
    }

    const fetchWalletTransactionsData = async () => {
      try {
        const response = await axios.get(
          // "https://beewalletback.onrender.com/api/wallets/transactions/1",
          "http://localhost:3000/api/wallets/transactions/1",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          const transactions: Transaction[] = response.data.payload.map(
            (transaction: Transaction) => ({
              ...transaction,
              amount: processDecimal128(transaction.amount), // Ensure amount is converted
            })
          );
          setWalletTransactionsData(transactions);
        }
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    };

    fetchWalletTransactionsData();
  }, []);

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
                  {walletTransactionsData.map((transaction: Transaction) => (
                    <tr
                      className="bg-[#232323] border-b  dark:border-gray-700
                     hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={transaction._id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-left align-middle "
                      >
                        Transaction
                      </th>
                      <td className="px-6 py-4 text-left align-middle">
                        {transaction.type}
                      </td>
                      <td className="px-6 py-4 text-left align-middle flex justify-center items-center gap-2">
                        <p
                          className={`size-[5px] ${getStatusClass(
                            transaction.status
                          )} rounded-full`}
                        ></p>
                        {transaction.status}
                      </td>
                      <td className="px-6 py-4 text-left align-middle">
                        {transaction.createdAt}
                      </td>
                      <td
                        className={`px-6 py-4 text-left align-middle ${getStatusClass(
                          transaction.status
                        )}`}
                      >
                        ${transaction.amount as string}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" sm:hidden">
          <div className="font-inter ">
            <section>
              <table className="w-full overflow-y-auto">
                <tbody className=" flex flex-col gap-5">
                  {walletTransactionsData.map((transaction) => (
                    <tr
                      className="bg-[#161616]  text-[0.875rem] rounded-[0.625rem] flex justify-between items-center p-5"
                      key={transaction._id}
                    >
                      <td className="flex flex-col gap-1">
                        <p>Transaction</p>
                        <p>{transaction.type}</p>
                      </td>
                      <td className={getStatusClass(transaction.status)}>
                        ${transaction.amount}
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
