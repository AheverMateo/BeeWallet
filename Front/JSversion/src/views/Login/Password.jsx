import React, { useState } from "react";
import panel from "../../assets/icons/Imagen_Panal_contorno.svg";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";

const Password = () => {
  const [inputPassword, setIputPassword] = useState("");

  return (
    <div className="flex w-screen h-screen justify-between">
      <div className="w-[50%]">
        <div className="fixed flex w-[350px] top-[48%] right-[75%]">
          <img src={panel} alt="" />
        </div>
      </div>

      <section className="w-[50%]">
        <div className="flex justify-end mt-2">
          <Link to="/login">
            <img
              className="w-6 bg-proyectColor-blackOpac py-1 rounded-full h-6 mr-4"
              src={close}
              alt=""
            />
          </Link>
        </div>
        <div className="h-[86%] flex flex-col justify-center border-l border-l-[#323131CC] px-6 ">
          <div className="text-center mb-20 px-14 ">
            <h2 className="font-inter text-3xl text-white mb-4 font-semibold leading-[45px] tracking-wider">
              Te olvidaste la contraseña.
            </h2>
            <p className=" text-xs font-inter text-[#E2E2E2] font-semibold leading-[25px] tracking-wider">
              Si no podes acceder a tu cuenta, te enviaremos un link para
              restablecer tu contraseña.
            </p>
          </div>

          <form className="mb-20">
            <div className="flex flex-col mb-3">
              <input
                type="password"
                placeholder="Escribe tu correo electrónico"
                className="bg-transparent border border-gray-400 rounded-md text-gray-100 py-2 pl-3 mb-14"
                onChange={(e) =>
                  setIputPassword({
                    ...inputPassword,
                    password: e.target.value,
                  })
                }
              />
              <button className="rounded-full w-full mt-4 select-none font-semibold py-2 text-white bg-proyectColor-yellowOpac">
                Restablecer contraseña
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Password;
