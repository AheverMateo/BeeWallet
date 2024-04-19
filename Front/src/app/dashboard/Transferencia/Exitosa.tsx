import React from "react";
import { Link } from "react-router-dom";

const Exitosa = () => {
  return (
    <main className="bg-[#0E0E0E] fixed z-20 w-[43.75rem] h-[46.93rem] p-3 
    rounded-[1rem] shadow-2xl shadow-[#B5B5B5] ">
      <div>
        <section className="flex justify-between p-1">
          <br />
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
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M22.0459 11.4691C22.4085 11.0641 22.3741 10.4417 21.9691 10.0791C21.5641 9.71647 20.9417 9.75085 20.5791 10.1559L16.1571 15.0951C15.261 16.0959 14.6576 16.7664 14.1417 17.2C13.6502 17.6131 13.3615 17.7031 13.1094 17.7031C12.8572 17.7031 12.5685 17.6131 12.0771 17.2C11.5612 16.7664 10.9577 16.0959 10.0617 15.0951L8.92089 13.8209C8.55826 13.4158 7.93594 13.3815 7.53089 13.7441C7.12585 14.1067 7.09148 14.729 7.45411 15.1341L8.64361 16.4627C9.47818 17.3949 10.1743 18.1725 10.8103 18.7071C11.4832 19.2726 12.2089 19.6719 13.1094 19.6719C14.0098 19.6719 14.7356 19.2726 15.4084 18.7071C16.0445 18.1725 16.7405 17.395 17.5751 16.4628L22.0459 11.4691Z"
              fill="#34A853"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.75 0.640625C6.95761 0.640625 0.640625 6.95761 0.640625 14.75C0.640625 22.5424 6.95761 28.8594 14.75 28.8594C22.5424 28.8594 28.8594 22.5424 28.8594 14.75C28.8594 6.95761 22.5424 0.640625 14.75 0.640625ZM2.60938 14.75C2.60938 8.04492 8.04492 2.60938 14.75 2.60938C21.4551 2.60938 26.8906 8.04492 26.8906 14.75C26.8906 21.4551 21.4551 26.8906 14.75 26.8906C8.04492 26.8906 2.60938 21.4551 2.60938 14.75Z"
              fill="#34A853"
            />
          </svg>
          <p className="text-[#34A853] text-[1.625rem]">¡Transferencia Exitosa!</p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-7">
        <p>Comprobante</p>
        <div className="size-[9.625rem] bg-white rounded-full"></div>
      </section>
      <section  className="flex flex-col items-center mt-5 gap-7">
        <p>Jane Doe</p>
        <p>$2000</p>
      </section>
      <section className="flex flex-col items-center gap-7">
        <p>15 de Abril de 2024, 11:25 am</p>
        <p>Transferencia ID: 544556565</p>
      </section>
      <div className="flex flex-col items-center">
      <button className="bg-[#FCCF58] text-[#6F5308] h-[3.125rem] w-[39.4375rem] rounded-[6.25rem]">Compartir comprobante</button>
      </div>
      </div>
    </main>
  );
};

export default Exitosa;
