import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/google.svg";
import AppleIcon from "../../assets/icons/apple.svg";
import panel from "../../assets/icons/Imagen_Panal_contorno.svg";
import close from "../../assets/icons/close.svg";
import bw from "../../assets/icons/bw.svg"

/*
Falta hacer que el boton cambie de color cuando se active, mostrar un error por si la contraseña esta mal 
y tambien el diseño responsivo
*/

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
    <div className="flex flex-col lg:flex-row w-screen h-screen justify-between">
      <div className="hidden lg:flex lg:w-[50%]">
        <div className="fixed flex w-[350px] top-[48%] right-[75%]">
          <img src={panel} alt="" />
        </div>
      </div>
      <section className="w-full lg:w-[50%]">
        <div className="flex justify-end mt-2">
          <Link to="/landing">
            <img
              className="w-6 lg:bg-proyectColor-blackOpac py-1 rounded-full h-10 lg:h-6 mr-4"
              src={close}
              alt=""
            />
          </Link>
        </div>
        <div className="h-[86%] flex flex-col justify-center border-l border-l-[#323131CC] px-6 mt-4">
          <div className="text-center px-14 ">
            <img src={bw} alt="Logo" className="block lg:hidden mx-auto mb-8  "/>
            <h2 className="font-semibold font-inter text-lg lg:text-2xl text-[#E2E2E2]">
              Te damos la bienvenida a <br />
              <span className="text-center font-bold text-3xl lg:text-4xl bg-gradient-to-r from-[#FCCF58] to-[#967B34] text-transparent bg-clip-text">
                beewallet.
              </span>
            </h2>
            <p className="mt-1 text-xs text-[#FCCF58]">
              Tu colmena financiera.
            </p>
          </div>

          <form className="mt-12">
            <h2 className="text-white text-2xl font-inter">Crea tu cuenta</h2>
            <div className="flex flex-col gap-3 mt-8">
              <label htmlFor="email" className="text-sm text-[#E2E2E2]">
                Indicanos tu correo electrónico
              </label>
              <input
                type="email"
                className="bg-transparent border border-[#E2E2E2] rounded-lg text-[#E2E2E280] py-3 pl-3"
                placeholder="ejemplo@beewallet.com"
                value={form.email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <span className="text-red-500 text-xm">{emailError}</span>
              )}
            </div>
            <div className="mt-2">
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
            <div className="text-center mt-1">
              <span className="text-xs text-[#E2E2E2] mt-3 font-inter">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/login"
                  className="border-b border-gray-300 text-[#E2E2E2] font-inter"
                >
                  Inicia sesion
                </Link>
              </span>
            </div>

            <div className="flex flex-col mt-6">
              <span className="text-xs text-white text-center font-inter">
                O continua con
              </span>
              <ul className="flex justify-around w-auto gap-2 mt-8">
                <li>
                  <button className="flex justify-center w-40 lg:w-64 py-2 bg-zinc-800 shadow-md rounded-full">
                    <img className="" src={GoogleIcon} alt="" />
                  </button>
                </li>
                <li>
                  <button className="flex justify-center w-40 lg:w-64 py-2 bg-zinc-800 shadow-md rounded-full">
                    <img className="" src={AppleIcon} alt="" />
                  </button>
                </li>
              </ul>
              
            </div>
          </form>
          <div className="text-center mt-10">
            <p className="text-xs font-inter text-white">
              Al registrarte, aceptas nuestras <br className="lg:hidden" />{" "}
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
      </section>
    </div>
  );
};

export default Register;
