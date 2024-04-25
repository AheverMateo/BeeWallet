import { Link } from "react-router-dom";

const Cantidad = () => {
  return (
    <main className="bg-[#0E0E0E] fixed z-20 w-[43.75rem] h-[46.93rem] p-3 rounded-[1rem] shadow-2xl shadow-[#B5B5B5] flex flex-col">
      <div className="flex flex-col gap-8">
      <section className="flex gap-3 justify-between">
        <Link to={"/dashboard/transference"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.07189 11.5284C6.99069 11.6059 6.92605 11.699 6.88188 11.8021C6.83772 11.9052 6.81494 12.0162 6.81494 12.1284C6.81494 12.2406 6.83772 12.3517 6.88188 12.4548C6.92605 12.5579 6.99069 12.651 7.07189 12.7284L15.6429 21.2994L16.8429 20.0994L8.87189 12.1284L16.8429 4.15644L15.6429 2.95644L7.07189 11.5284Z"
              fill="#FCFFFF"
            />
          </svg>
        </Link>
        <p className="text-[1.625rem]">¿Cuanto vas a transferir?</p>
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
      <p className="text-[0.875rem] pl-1">Destinatario</p>
      </div>
      
      <div className="flex flex-col justify-center items-center">
        
        <section className="flex flex-col justify-center items-center gap-9">
          <div className="bg-white rounded-[4.8125rem] size-[9.625rem]"></div>
          <p>Jane Doe</p>
        </section>
        <section className="flex flex-col items-center pt-10">
          <div className="flex text-[3rem] justify-center items-center">
            <p>$</p>
            <input className="bg-transparent w-[20rem] text-center" type="number" aria-label="Cantidad" />
          </div>
          <p>$21.179 disponible</p>
        </section>
        <section className="flex flex-col pt-10 ">
            <input className="bg-[#161616] rounded-[1rem] p-3 w-[41.25rem]" aria-label="Transfer amount" title="Transfer amount"
             placeholder={"Escribe un comentario (opcional)"} />
            
            <button className="bg-[#6F5308] hover:bg-[#FCCF58] text-[#FCCF58] hover:text-[#6F5308] rounded-[6.25rem] absolute bottom-5 inset-x-9 w-[39.43rem] h-[3.125rem]">
                <Link to={'/dashboard/transference/amount/successful'}>Transferir</Link>
                
            </button>
        </section>
      </div>
    </main>
  );
};

export default Cantidad;
