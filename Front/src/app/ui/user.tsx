import SideBar from "../dashboard/SideBar";
import imgUser from "../../assets/icons/unsplash_ZXfUUM_LR0k.png";
import discard from "../../assets/icons/discard.svg";
import visto from "../../assets/icons/visto.svg";
import logo from "../../assets/icons/Logo.svg";
import HeaderR from "../../app/dashboard/HeadR";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type UserData = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const User = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessionData = async () => {
      const response = await axios.get(
        // "https://beewalletback.onrender.com/api/auth/session",
        "http://localhost:3000/api/auth/session",
        { withCredentials: true }
      );

      if (response.status === 200) {
        const data: UserData = response.data.user;
        setUserData(data);
      } else if (response.status === 401) {
        console.error("Session not valid, redirecting to login.");
        navigate("/login");
      } else {
        console.error("Error fetching session data:", response.statusText);
      }
    };

    fetchSessionData();
  }, [navigate]);

  const handleLogout = async () => {
    const response = await axios.get(
      // "https://beewalletback.onrender.com/api/auth/logout",
      "http://localhost:3000/api/auth/logout",
      { withCredentials: true }
    );
    if (response.status === 200) {
      console.log("Logout successful");
      navigate("/login");
    } else {
      console.error("Logout failed:", response.statusText);
    }
  };

  return (
    <div className="flex ">
      <div className="ml-6 fixed">
        <SideBar />
      </div>
      <div className="flex justify-end w-[100%] ml-28">
        <section className="mt-28 w-[65%] mr-[6%]">
          <h1 className="text-2xl font-bold text-white">Personal</h1>
          <div className=" flex w-full rounded-xl px-6 py-4 mt-8 bg-zinc-900">
            <img className="ml-2" src={imgUser} alt="" />
            <div className=" flex flex-col ml-10 justify-center">
              <h4 className=" text-gray-400 text-sm">Nombre y Apellido</h4>
              <p className="text-gray-300 text-xl font-bold">
                {userData.firstName} {userData.lastName}
              </p>
            </div>
          </div>

          <div className=" flex flex-col w-full rounded-xl px-8 py-6 mt-10 bg-zinc-900">
            <h4 className="text-gray-400 text-sm mb-2">Telefono</h4>
            <div className="flex justify-between">
              <p className="text-gray-300 text-xl mb-2">
                +54 {userData.phoneNumber}
              </p>
              <img
                className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900"
                src={visto}
                alt=""
              />
            </div>
            <hr className="border-gray-400" />
            <h4 className="text-gray-400 text-sm mt-4 mb-2">
              Correo electrónico
            </h4>
            <div className="flex justify-between">
              <p className="text-gray-300 text-xl mb-2">{userData.email}</p>
              <img
                className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900"
                src={visto}
                alt=""
              />
            </div>
            <hr className="border-gray-400" />
            <h4 className="text-gray-400 text-sm mt-4 mb-2">
              Fecha de Nacimiento
            </h4>
            <div className="flex justify-between">
              <p className="text-gray-300 text-xl mb-2">21/08/2001</p>
              <img
                className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900"
                src={visto}
                alt=""
              />
            </div>
            <hr className="border-gray-400" />
          </div>

          <div className=" flex flex-col w-full rounded-xl px-8 py-6 mt-10 bg-zinc-900">
            <h4 className="text-gray-400 text-sm mb-2">
              Dirección (calle y número)
            </h4>
            <div className="flex justify-between">
            <p className="text-gray-300 text-xl mb-2">Mitre 853</p>
            <img
                className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900"
                src={visto}
                alt=""
              />
            </div>
            <hr className="border-gray-400" />
            <h4 className="text-gray-400 text-sm mt-4 mb-2">Código Postal</h4>
            <div className="flex justify-between">
            <p className="text-gray-300 text-xl mb-2">9108</p>
            <img
                className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900"
                src={visto}
                alt=""
              />
            </div>
            <hr className="border-gray-400" />
            <h4 className="text-gray-400 text-sm mt-4 mb-2">Ciudad y País</h4>
            <div className="flex justify-between">
            <p className="text-gray-300 text-xl mb-2">
              Bahia Blanca, Argentina
            </p>
            <img
                className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900"
                src={visto}
                alt=""
              />
            </div>
            <hr className="border-gray-400" />
          </div>
          <div className=" mt-20">
            <h1 className="text-2xl font-bold text-white mb-8">
              Configuracion
            </h1>
            <div className="  flex flex-col w-full rounded-xl  px-6 py-10  mt-5 bg-zinc-900">
              <h4 className="text-gray-400 text-sm mt-4 mb-2"></h4>
              <p className="text-gray-300 text-xl mb-2"></p>
              <hr className="border-gray-400" />
              <h4 className="text-gray-400 text-sm mt-4 mb-2"></h4>
              <p className="text-gray-300 text-xl mb-2"></p>
              <hr />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-20">
            <button
              onClick={handleLogout}
              className="border-yellow-400 border rounded-full px-10 py-2 text-yellow-300"
            >
              Cerrar Sesion
            </button>
            <div className="mt-10 flex">
              <img className="mr-2" src={discard} alt="" />
              <p className="text-gray-300 cursor-pointer">Eliminar Cuenta</p>
            </div>
          </div>
          <hr className="border-gray-400 mt-10" />
          <footer className=" flex justify-between py-6 mt-5">
            <img src={logo} alt="" />
            <p className="text-gray-300 text-end">
              © Beewallet 2024. Todos los derechos reservados.
              <br />
              Sitio web diseñado y desarrollado por Beewalle.
            </p>
          </footer>
        </section>
        <div className="mr-9 mt-6">
          <HeaderR />
        </div>
      </div>
    </div>
  );
};

export default User;
