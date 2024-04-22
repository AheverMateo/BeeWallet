import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../dashboard";

const AccountData1 = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isTransferenceOpen, setIsTransferenceOpen] = useState(false);

  const handleClick = () => {
    setIsBlurred(!isBlurred);
  };
  const handleOpenTransference = () => {
    setIsTransferenceOpen(true);
  };

  const handleCloseTransference = () => {
    setIsTransferenceOpen(false);
  };

  return (
    <main
      className=" flex flex-col relative
    sm:w-[27.0625rem] sm:h-[15.625rem]
    rounded-[1rem] gap-2 pl-1 bg-[#161616]"
    >
      <h1 className="md:text-[1.625rem] text-[1.5rem] text-[#B5B5B5]">
        Disponible
      </h1>
      <div className="flex gap-5">
        <h2 className={`text-[3rem] ${isBlurred ? 'blur-lg' : ''}`} >$7.321,5</h2>

        <button title="hidden" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.57101 13.287L3.28401 13.763L3.28801 13.757C3.32855 13.6965 3.37125 13.6374 3.41601 13.58C3.51101 13.454 3.65601 13.268 3.85001 13.043C4.3718 12.4389 4.94788 11.8839 5.57101 11.385C7.08201 10.176 9.25601 9.00099 12 9.00099C14.744 9.00099 16.918 10.176 18.429 11.385C19.0518 11.8839 19.6275 12.4389 20.149 13.043C20.347 13.2726 20.5349 13.5109 20.712 13.757L20.716 13.763L21.429 13.287C22.142 12.812 22.142 12.811 22.141 12.811L22.14 12.809L22.136 12.803L22.126 12.788C22.0716 12.7077 22.0149 12.629 21.956 12.552C21.839 12.397 21.67 12.182 21.449 11.924C20.8578 11.2396 20.2051 10.611 19.499 10.046C17.798 8.68399 15.257 7.28699 12 7.28699C8.74401 7.28699 6.20301 8.68399 4.50001 10.047C3.79432 10.6117 3.14192 11.24 2.55101 11.924C2.31238 12.2016 2.08648 12.4899 1.87401 12.788L1.86401 12.803L1.86001 12.808V12.81L1.85901 12.811L2.57101 13.287ZM12 15.858C12.3376 15.858 12.672 15.7915 12.9839 15.6623C13.2958 15.5331 13.5792 15.3437 13.818 15.105C14.0567 14.8662 14.2461 14.5828 14.3753 14.2709C14.5045 13.9589 14.571 13.6246 14.571 13.287C14.571 12.9494 14.5045 12.615 14.3753 12.3031C14.2461 11.9912 14.0567 11.7078 13.818 11.469C13.5792 11.2303 13.2958 11.0409 12.9839 10.9117C12.672 10.7825 12.3376 10.716 12 10.716C11.318 10.716 10.6639 10.9869 10.1817 11.4692C9.69943 11.9514 9.42851 12.6055 9.42851 13.2875C9.42851 13.9695 9.69943 14.6236 10.1817 15.1058C10.6639 15.5881 11.318 15.859 12 15.859V15.858Z"
              fill="#E2E2E2"
            />
          </svg>
        </button>
      </div>
      <section className="flex justify-center gap-2  ">
        <button 
        className="h-[2rem] w-[8.2rem] bg-[#FCCF58] rounded-[1.15625rem] border border-solid border-[#FCFFFF]">
        <Link to={'/dashboard/transference'}>
          
        Transferir
        </Link>
         
        </button>
        <button className="h-[2rem] w-[8.2rem] rounded-[1.15625rem] border border-solid border-[#FCFFFF]">
          Ingresar
        </button>
        <button
          className=" border border-solid border-[#FCFFFF] rounded-[1.15625rem]
          h-[2rem] w-[8.2rem]"
        >
          Retirar
        </button>
      </section>
    </main>
  );
};

export default AccountData1;
