type AccountDataProps = {
  totalIncome: string;
  totalExpenses: string;
};

const AccountData2: React.FC<AccountDataProps> = ({ totalIncome, totalExpenses }) => {

  return (
    <section
      className="flex  sm:w-[27.12rem]  
    justify-center gap-5 "
    >
      <div
        className="flex object-center justify-center 
      bg-[#161616] rounded-[1rem] gap-3 p-4 h-[4.69rem] w-[12.94rem]"
      >
        <img
          src="/icons/UpCircle1.svg"
          alt="GastosTotales"
          className="w-[4.125rem] h-[2.8rem] object-cover rotate-180"
        />
        <div className="grid">
          <h1 className="text-xs">
            Ingresos Totales
          </h1>
          <h2>${ totalIncome }</h2>
        </div>
      </div>
      <div
        className="flex item-center justify-center 
      bg-[#161616] h-[4.69rem] w-[12.94rem] rounded-[1rem] p-4 gap-3"
      >
        <img
          src="/icons/UpCircle1.svg"
          alt="GastosTotales"
          className="w-[4.125rem] h-[2.8rem] object-cover"
        />
        <div className="grid">
          <h1 className="text-xs"> Gastos Totales</h1>
          <h2>${ totalExpenses }</h2>
        </div>
      </div>
    </section>
  );
};

export default AccountData2;
