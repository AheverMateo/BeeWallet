import React from "react";

interface TableProps {
  movements: Movement[];
  getStatusClass: (status: string) => string;
  getStatusPointClass: (status: string) => string;
}

interface Movement {
  id: number;
  name: string;
  typeOf: string;
  status: string;
  date: string;
  amount: number;
}

const Table: React.FC<TableProps> = ({
  movements,
  getStatusClass,
  getStatusPointClass,
}) => {
  return (
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
                <th scope="row" className="px-6 py-4 text-left align-middle ">
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
  );
};

export default Table;
