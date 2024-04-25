import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "@/assets/icons/eye";
import { Eye2 } from "@/assets/icons/eye2";
import { GoogleIcon } from "@/assets/icons/google";
import { AppleIcon } from "@/assets/icons/apple";
import panel from "../assets/icons/Imagen_Panal_contorno.svg";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [values, setValues] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    });

    if (response.ok) {
      // Assuming the server sends back user data on successful login
      const userData = await response.json();
      console.log("Login successful:", userData);
      navigate("/dashboard");
    } else {
      const errorData = await response.json();
      setError(errorData.error || "Unknown error");
    }
  };

  return (
    <div className=" w-screen h-screen container grid grid-cols-[3fr,3fr] mx-auto to place-content-center">
      <div className="size-full border-r">
        <div className="fixed flex w-[350px] top-[48%] right-[75%]">
          <img src={panel} alt="" />
        </div>
      </div>

      <div className="mx-auto w-full space-y-8 pl-8">
        <div className="flex flex-col text-center mt-10">
          <h2 className="font-semibold text-3xl text-white mb-14">
            Te damos la bienvenida <br /> nuevamente.
          </h2>
        </div>

        <form onSubmit={ handleLogin } className="mb-20">
          <div className="flex flex-col mb-3">
            <Input
              type="email"
              id="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className=" bg-transparent text-white"
              placeholder="Escribe tu correo electrónico"
              required
            />
          </div>
          <div className="relative flex flex-col gap-1">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              className="pr-12 bg-transparent text-white"
              placeholder="Contraseña"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
            <Button
              size="icon"
              variant="outline"
              type="button"
              disabled={!values.password}
              className="absolute right-0  bottom-0 border-none hover:bg-transparent/50 hover:text-secondary cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye2 /> : <Eye />}
            </Button>
          </div>
          <div className="text-center mt-1">
            <a href="" className="text-white text-xs border-b border-gray-300">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div>
            <Button
              type="submit"
              size="lg"
              variant={
                !values.email && !values.password ? "default" : "secondary"
              }
              className="rounded-full w-full mt-8 select-none font-semibold text-white bg-yellow-600"
              disabled={!values.email && !values.password}
            >
              Iniciar sesión
            </Button>
            { error && <p className="text-red-500">{ error }</p> }
          </div>
          <div className="flex flex-col mt-8 mb-10">
            <span className="text-xs text-white text-center mb-8">
              O inicia sesión con
            </span>
            <ul className="flex justify-between [&>li]:w-full [&>li>button]:w-full gap-4 select-none">
              <li>
                <Button
                  variant="outline"
                  className="rounded-full"
                  type="button"
                >
                  <GoogleIcon />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full"
                >
                  <AppleIcon />
                </Button>
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
}

export default Login;
