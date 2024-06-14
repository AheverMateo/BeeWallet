import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Eye from "../../assets/icons/eye.svg";
import Eye2 from "../../assets/icons/eye2.svg";
import GoogleIcon from "../../assets/icons/google.svg";
import AppleIcon from "../../assets/icons/apple.svg";
import panel from "../../assets/icons/Imagen_Panal_contorno.svg";
import close from "../../assets/icons/close.svg";
import bw from "../../assets/icons/bw.svg"


/*
Falta hacer que el boton cambie de color cuando se active, mostrar un error por si la contraseña esta mal 
*/ 




const Login = function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://beewalletback.onrender.com/api/auth/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data) {
        const userData = response.data;
        console.log("Login successful:", userData);
        navigate("/dashboard");
      } else {
        setError("Unknown error");
      }
    } catch (err) {
      setError("Error during login");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen">
      <div className="hidden lg:flex lg:w-[50%]">
        <div className="fixed flex w-[350px] top-[48%] right-[75%]">
          <img src={panel} alt="" />
        </div>
      </div>

      <section className="w-full lg:w-[50%]">
        <div className="flex justify-end mt-2">
          <Link to="/login">
            <img
              className="w-6 lg:bg-proyectColor-blackOpac py-1 rounded-full h-10 lg:h-6 mr-4"
              src={close}
              alt=""
            />
          </Link>
        </div>
        <div className="h-[86%] flex flex-col justify-center border-l border-l-[#323131CC] px-6 mt-4">

          <div className="text-center px-4 lg:px-14">
            <img src={bw} alt="Logo" className="block lg:hidden mx-auto mb-10  "/>
            <h2 className="font-inter lg:text-3xl text text-white font-semibold lg:leading-[45px] tracking-wider">
              Te damos la bienvenida <br /> nuevamente.
            </h2>
          </div>

          <form className=" mt-12 lg:mt-20">
            <div className="flex flex-col mb-3">
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="bg-transparent border border-gray-400 rounded-md text-gray-100 py-3 pl-3"
                placeholder="Escribe tu correo electrónico"
                required
              />

              <div className="relative flex flex-col mt-3">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="bg-transparent border border-gray-400 rounded-md text-gray-100 py-3 pl-3"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  required
                />
                <button
                  size="icon"
                  variant="outline"
                  type="button"
                  disabled={!values.password}
                  className="absolute right-4 bottom-4 border-none hover:bg-transparent/50 hover:text-secondary cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img src={Eye2} alt="" />
                  ) : (
                    <img src={Eye} alt="" />
                  )}
                </button>
              </div>
            </div>
            <div className="text-center mt-2">
              <Link
                to="/password"
                className="text-white text-xs border-b border-gray-300"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              size="lg"
              variant={
                !values.email && !values.password ? "default" : "secondary"
              }
              className="rounded-full w-full mt-4 select-none font-semibold py-2 text-white bg-proyectColor-yellowOpac"
              disabled={!values.email && !values.password}
            >
              Iniciar sesión
            </button>
            {error && <p className="text-red-500">{error}</p>}

            <div className="flex flex-col">
              <span className="text-xs text-white text-center mt-8">
                O inicia sesión con
              </span>
              <ul className="flex flex-col md:flex-row justify-around w-auto gap-2 mt-4 md:mt-10">
                <li>
                  <button className="flex justify-center w-full md:w-64 py-2 bg-zinc-800 shadow-md rounded-full">
                    <img className="" src={GoogleIcon} alt="" />
                  </button>
                </li>
                <li>
                  <button className="flex justify-center w-full md:w-64 py-2 bg-zinc-800 shadow-md rounded-full">
                    <img className="" src={AppleIcon} alt="" />
                  </button>
                </li>
              </ul>
              <div className="text-center ml-6 mt-6">
                <p className="text-white text-xs">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    to="/register"
                    className="border-b border-gray-300 text-white"
                  >
                    Registrate
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
