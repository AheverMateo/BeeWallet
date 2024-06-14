import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Eye from "../../assets/icons/eye.svg";
import Eye2 from "../../assets/icons/eye2.svg";
import GoogleIcon from "../../assets/icons/google.svg";
import AppleIcon from "../../assets/icons/apple.svg";
import panel from "../../assets/icons/Imagen_Panal_contorno.svg";
import close from "../../assets/icons/close.svg";

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
    <div className="  w-screen h-screen container grid grid-cols-[3fr,3fr] mx-auto place-content-center">
      <div className="size-full border-r">
        <div className="fixed flex w-[350px] top-[48%] right-[75%]">
          <img src={panel} alt="" />
        </div>
      </div>

      <div className="space-y-4 w-[100%] ml-10 mt-8">
      <div className=" flex justify-end">
            <img
              className="w-6 bg-proyectColor-blackOpac py-1 rounded-full h-6 mr-4"
              src={close}
              alt=""
            />
          </div>

        <div className="text-center">
          <h2 className="font-semibold text-3xl text-white mb-14">
            Te damos la bienvenida <br /> nuevamente.
          </h2>
        </div>

        <form onSubmit={handleLogin} className="mb-20">
          <div className="flex flex-col mb-3">
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="bg-transparent border border-gray-400 rounded-md text-gray-100 py-3 pl-3"
              placeholder="Escribe tu correo electrónico"
              required
            />
          </div>
          <div className="relative flex flex-col gap-1">
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
              className="absolute right-4  bottom-4 border-none hover:bg-transparent/50 hover:text-secondary cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img src={Eye2} alt="" />
              ) : (
                <img  src={Eye} alt="" />
              )}
            </button>
          </div>
          <div className="text-center mt-1">
            <Link to="/password">
            <p className="text-white text-xs border-b border-gray-300">
              ¿Olvidaste tu contraseña?
            </p>
            </Link>
          </div>
          <div>
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
          </div>
          <div className="flex flex-col mt-8 mb-10">
            <span className="text-xs text-white text-center mb-8">
              O inicia sesión con
            </span>
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
    </div>
  );
};

export default Login;