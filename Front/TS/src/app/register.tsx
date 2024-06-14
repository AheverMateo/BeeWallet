import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/assets/icons/google";
import { AppleIcon } from "@/assets/icons/apple";
import panel from "../assets/icons/Imagen_Panal_contorno.svg";

const Register = () => {
  const [form, setForm] = useState({ email: "" });
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForm({ ...form, email });
    setEmailError(
      email !== "" && !validateEmail(email)
        ? "Por favor ingresa un correo electrónico válido."
        : ""
    );
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className=" w-screen h-screen container grid grid-cols-[3fr,3fr] mx-auto place-content-center">
        <div className=" border-r">
          <div className="fixed flex w-[350px] top-[48%] right-[75%]">
            <img src={panel} alt="" />
          </div>
        </div>
        <div className=" space-y-4 w-[100%] ml-10 mt-8">
          <div className=" flex justify-end">
            <img
              className="w-6 bg-slate-800 py-1 rounded-full h-6 mr-4"
              src={close}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 text-center mb-18">
            <h2 className="font-semibold text-[26px] text-white">
              Te damos la bienvenida a <br />
              <span className="text-center font-bold text-4xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                beewallet.
              </span>
            </h2>
            <p className=" text-xs  text-yellow-600">Tu colmena financiera.</p>
          </div>
          <form className="space-y-4">
            <h2 className="text-white text-2xl">Crea tu cuenta</h2>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-sm text-gray-300">
                Tu dirección de correo electrónico
              </label>
              <input
                type="email"
                className="bg-transparent border border-gray-400 rounded-xl text-gray-100 py-3 pl-3"
                placeholder="ejemplo@beewallet.com"
                value={form.email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <span className="text-red-500 text-xm">{emailError}</span>
              )}
            </div>
            <div className="">
              <Link to="/register/auth">
                <button
                  type="submit"
                  size="lg"
                  className={`rounded-full w-full mt-4 select-none font-semibold py-2 text-white ${
                    !form.email || emailError
                      ? "bg-yellow-800"
                      : "bg-yellow-600"
                  }`}
                  disabled={!form.email || emailError}
                >
                  Siguiente
                </button>
              </Link>
            </div>

            <div className="text-center mb-10">
              <span className="text-xs text-white">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/login"
                  className="border-b border-gray-300 text-white"
                >
                  Inicia sesion
                </Link>
              </span>
            </div>
            <div className="">
              <p className=" text-sm font-inter text-white text-center mb-8 mt-8">
                O continua con
              </p>
              <ul className="flex justify-around w-auto gap-2">
                <li>
                  <button className="flex justify-center w-64 py-2 bg-zinc-800 shadow-md rounded-full">
                    <img className="" src={GoogleIcon} alt="" />
                  </button>
                </li>
                <li>
                  <button className="flex justify-center w-64 py-2 bg-zinc-800 shadow-md rounded-full">
                    <img className="" src={AppleIcon} alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </form>
          <div className="text-center">
            <p className="text-xs font-light text-white">
              Al registrarte, aceptas nuestras{" "}
              <Link to="/" className="underline underline-offset-2">
                Condiciones de Uso
              </Link>{" "}
              y{" "}
              <Link to="/" className="underline underline-offset-2">
                Política de Privacidad
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
