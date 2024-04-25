import { Link } from "react-router-dom";
import React, { useRef } from "react";

const Register3 = () => {
  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef<HTMLInputElement>(null));

  const handleKeyUp = (index: number) => {
    if (index < 5 && inputRefs[index + 1].current) {
      (inputRefs[index + 1].current as HTMLInputElement).focus();
    }
  };

  return (
    <main className="bg-[#0E0E0E] min-h-svh font-inter text-[#E2E2E2] md:flex">
      <div className="relative md:w-[49.32%] hidden md:block">
        <img
          src="/Polygon22.png"
          alt=""
          style={{ position: "absolute", bottom: 0, left: 0 }}
        />
      </div>

      <div className=" md:w-[50.68%] p-5">
        <main
          className="md:border-l-[#323231cc]
       md:border-l-[3px] flex flex-col items-center gap-10 h-full"
        >
          <section className="flex justify-between p-2 w-full ">
            <div>
              <br className="max-sm:hidden" />
            </div>
            <div>
              <img src="/icons/bwLogo.svg" alt="" />
            </div>
            <div>
              <img src="/icons/CloseYellow.svg" alt="" />
            </div>
          </section>
          <section>
            <h1 className="text-[1.125rem] text-center font-600">
              Indicanos el código de digitos{" "}
            </h1>
          </section>
          <section>
            <h2>
              Te hemos enviado un código de verificación al correo electrónico:
            </h2>
            <p>janedoe2024@outlook.com</p>
          </section>
          <section className="flex flex-col justify-center items-center gap-5 mt-8">
            <h2>Tú código de 6 digitos</h2>

            <form className="max-w-sm mx-auto">
              <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
                {inputRefs.map((ref, index) => (
                  <div key={index}>
                    <label htmlFor={`code-${index + 1}`} className="sr-only">
                      Code {index + 1}
                    </label>
                    <input
                      type="text"
                      maxLength={1}
                      id={`code-${index + 1}`}
                      ref={ref}
                      onKeyUp={() => handleKeyUp(index)}
                      className="block w-[2.96rem] h-[4.2rem] py-3 
                      text-[1.25rem] text-center text-[#FCCF58] 
                      bg-[#0E0E0E] border border-[#E2E2E2] rounded-[0.63rem]
                       focus:ring-[#FCCF58] focus:border-[#6F5308] 
                       "
                      required
                    />
                  </div>
                ))}
              </div>
            </form>
          </section>
          <section className="flex flex-col justify-center items-center gap-4">
            <Link to="/register/1">
              <button
                className="bg-[#6F5308] text-[#FCCF58] hover:bg-[#FCCF58] hover:text-[#6F5308] rounded-[1.5625rem]
          h-[3rem] w-[20.5rem] shadow-[#00000040] shadow-md"
              >
                Hecho
              </button>
            </Link>
            <p className="underline">No he recibido el código</p>
          </section>
        </main>
      </div>
    </main>
  );
};
export default Register3;
