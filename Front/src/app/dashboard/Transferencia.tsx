import { Link } from "react-router-dom";

const Transferencia = () => {
  return (
    <div className="bg-[#0E0E0E] fixed z-20 w-[43.75rem] h-[46.93rem] p-3 rounded-[1rem] shadow-2xl shadow-[#B5B5B5] flex flex-col gap-6">
      <section className="flex gap-3 justify-between">
        <br />
        <p className="md:text-[1.625rem]">Transferencia</p>
        <Link to={"/dashboard"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M14.915 1.2L13.715 0L7.458 6.257L1.2 0L0 1.2L6.258 7.457L0 13.714L1.2 14.914L7.458 8.657L13.715 14.914L14.915 13.714L8.657 7.457L14.915 1.2Z"
              fill="#FCFFFF"
            />
          </svg>
        </Link>
      </section>
      <section className="flex flex-col gap-2">
        <p>Destiantario</p>
        <input
          className="bg-[#161616] rounded-[1rem] p-3"
          type="text"
          placeholder="Buscar"
        />
      </section>
      <section className="flex flex-col gap-3">
        <p>Últimas realizadas</p>
        <div className="flex gap-5">
          <div className="size-[5.3125rem] bg-[#D9D9D9] rounded-full"></div>
          <div className="size-[5.3125rem] bg-[#D9D9D9] rounded-full"></div>
          <div className="size-[5.3125rem] bg-[#D9D9D9] rounded-full"></div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-5">
        <p>Otras opciones</p>
        <div className="flex flex-col gap-4">
          <button className=" w-full px-8 py-5 border-[1px] border-[#FCFFFF] rounded-[1rem]">
            <Link className="flex justify-between items-center gap-8" to={"/dashboard/transference/amount"}>
            <section className="flex justify-center items-center gap-8">
              <div className="size-[4rem] relative bg-[#333] rounded-full flex items-center justify-center">
                <img className="" src="/icons/Card.svg" alt="" />
              </div>
              <p>Con nombre, e-mail o teléfono (a cuentas Beewallet) </p>
            </section>
            <img className="relative inset-y-0 right-0" src="/icons/ChevronRight.svg" alt="" />
            </Link>
          </button>
          <button className=" w-full px-8 py-5 border-[1px] border-[#FCFFFF] rounded-[1rem]">
            <Link className="flex justify-between items-center gap-8" to={"/dashboard/transference/amount"}>
            <section className="flex justify-center items-center gap-8">
              <div className="size-[4rem] relative bg-[#333] rounded-full flex items-center justify-center">
                <img className="" src="/icons/Card.svg" alt="" />
              </div>
              <p>Con CVU, CBU o alias (a cuentas bancarias o digitales) </p>
            </section>
            <img className="relative inset-y-0 right-0" src="/icons/ChevronRight.svg" alt="" />
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Transferencia;
