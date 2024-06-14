import { Link } from "react-router-dom";
const Register5 = () => {
  return (
    <main className="bg-[#FCFFFF] min-h-screen flex flex-col gap-5">
      <section className="flex flex-col justify-center items-center gap-5 pt-5 ">
        <img
          className="w-[19rem] md:w-[55.245rem]"
          src="/icons/step1.svg"
          alt=""
        />
        <p className="text-[1rem] font-semibold hidden md:">Tipo de cuenta</p>
        <h1 className="text-[#6F5308] font-semibold text-[0.875rem] md:text-[1.75rem]">
          ¿Qué tipo de cuenta te gustaría abrir hoy?
        </h1>
        <p className="text-[0.75rem]  text-left font-normal">
          También puedes añadir una cuenta más tarde.
        </p>
      </section>
      <div className="flex flex-col justify-center items-center">
        <Link to={"/register/5"}>
          <button
            type="button"
            className="w-[20.5rem] md:w-[20rem] h-[5.75rem] md:h-[20rem] flex p-5
            justify-evenly items-center bg-[#d9d9d933] rounded-[0.63rem]"
          >
            <div className="md:hidden flex justify-between items-center ">
              <div className="p-2">
                <img
                  className="h-[3.54375rem] w-[3.54375rem]"
                  src="/icons/IconB.svg"
                  alt=""
                />
              </div>
              <div className="max-w-[60%]">
                <h1 className="text-[#6F5308] text-[0.875rem] text-left font-semibold">
                  Cuenta Beelancer
                </h1>
                <p className="text-[0.75rem] font-medium">
                  Envía, gasta y recibe dinero en todo el mundo.
                </p>
              </div>
              <div>
                <img src="/icons/Vector.svg" alt="" />
              </div>
            </div>
            <div className="hidden md:flex md:flex-col md:justify-center md:items-center gap-5">
              <div className="p-2">
                <img
                  className="h-[7.37rem] w-[7.37rem]"
                  src="/icons/IconB.svg"
                  alt=""
                />
              </div>
              <h1 className="text-[#6F5308] text-[1.625rem]  text-left font-semibold">
                Cuenta Beelancer
              </h1>
              <ul className="text-[0.75rem] text-[#323131] text-left list-inside list-disc">
                <li>Envía, gasta y recibe dinero.</li>
                <li>Administra tu dinero en tiempo real.</li>
                <li>100% digital y sin costo de mantenimiento.</li>
                <li>Compra en línea sin compartir tu información de pago.</li>
              </ul>
            </div>
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={"/register/5"}>
          <button
            type="button"
            className="w-[20.5rem] md:w-[20rem] h-[5.75rem] md:h-[20rem] flex p-5
            justify-evenly items-center bg-[#d9d9d933] rounded-[0.63rem]"
          >
            <div className="md:hidden flex justify-between items-center ">
              <div className="p-2">
                <img
                  className="h-[3.54375rem] w-[3.54375rem]"
                  src="/icons/IconE.svg"
                  alt=""
                />
              </div>
              <div className="max-w-[60%] text-left">
                {" "}
                {/* Agrega la clase "text-left" */}
                <h1 className="text-[#6F5308] text-[0.875rem] text-left font-semibold">
                  Cuenta Empresa
                </h1>
                <p className="text-[0.75rem] font-medium">
                  Próximamente vas a poder potenciar tu negocio con nuestra
                  propuesta.
                </p>
              </div>
            </div>
            <div className="hidden text-center md:flex md:flex-col md:justify-center md:items-center gap-5">
              <div className="p-2">
                <img
                  className="h-[7.37rem] w-[7.37rem]"
                  src="/icons/IconE.svg"
                  alt=""
                />
              </div>
              <h1 className="text-[#6F5308] text-[1.625rem] text-left font-semibold">
                Cuenta Empresa
              </h1>
              <p className="text-[0.75rem] text-left font-medium">
                Próximamente vas a poder potenciar tu negocio con nuestra
                propuesta
              </p>
            </div>
          </button>
        </Link>
      </div>
    </main>
  );
};
export default Register5;
