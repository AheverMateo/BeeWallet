import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./components/Form";

const Register18 = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
    console.log(formData);
    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor
  };

  return (
    <main className="bg-[#E2E2E2] min-h-screen flex items-center flex-col gap-5">
      <br />
      <section className="flex justify-between px-10 w-full">
        <div className="bg-[#F6F6F6] rounded-full p-2">
          <img src="/icons/ArrowLeft.svg" alt="" />
        </div>
        <div>
          <img
            className="w-[20.5rem] md:w-[55.375rem]"
            src="/icons/step5.svg"
            alt=""
          />
        </div>
        <br />
      </section>
      <br />
      <section className="flex flex-col items-center gap-5">
        <p className="font-semibold text-[1rem]">Contraseña</p>
        <h1>Crea tu contraseña.</h1>
        <h2 className="flex gap-1">
          La contraseña: debe contener: 8 o más caracteres, un
          <p className="font-bold"> número</p>, una
          <p className="font-bold"> letra</p> y un
          <p className="font-bold"> caracter especial</p>.
        </h2>
      </section>
      <section className="flex flex-col items-center gap-5">
        <Form />
        <Link to={""}>
          <button
            className="bg-[#6F5308] hover:bg-[#FCCF58] text-[#FCCF58] hover:text-[#6F5308]
          rounded-[1.56rem] md:w-[41.25rem] md:h-[3rem] w-[20.5rem] h-[2.87rem]"
          >
            Continuar
          </button>
        </Link>
      </section>
    </main>
  );
};
export default Register18;
