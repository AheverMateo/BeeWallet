const MobileTable = () => {
  const movements = [
    {
      id: 1,
      name: "Compra de zapatos",
      typeOf: "Gasto",
      status: "Enviada",
      date: "12/12/2021",
      amount: 100,
    },
    {
      id: 2,
      name: "venta de zapatos",
      typeOf: "Gasto",
      status: "Recibido",
      date: "11/12/2021",
      amount: 100,
    },
    {
      id: 3,
      name: "tranferencia de dinero",
      typeOf: "Transferencia",
      status: "Pendiente",
      date: "10/12/2021",
      amount: 100,
    },
    {
      id: 4,
      name: "venta de zapatos",
      typeOf: "Recepccion de dinero",
      status: "Recibido",
      date: "09/12/2021",
      amount: 100,
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case 'Enviada':
        return 'text-[#1CC719]';
      case 'Pendiente':
        return 'text-yellow-500';
      case 'Recibido':
        return 'text-[#B90707]';
      default:
        return '';
    }
  };
  return (
    <div className="font-inter ">
      <section>
        <table className="w-full overflow-y-auto">
          <tbody className=" flex flex-col gap-5">
            {movements.map((movement) => (
              <tr className="bg-[#161616]  text-[0.875rem] rounded-[0.625rem] flex justify-between items-center p-5" key={movement.id}>
                <td className="flex flex-col gap-1">
                  <p>{movement.name}</p>
                  <p>{movement.typeOf}</p>
                </td>
                <td className={getStatusClass(movement.status)} >{movement.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MobileTable;
