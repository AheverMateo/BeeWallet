import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roles: string[];
}

interface WalletData {
  userId: string;
  _id: string;
  cvu: string;
  balance: string;
  currency: string;
  transactions: string[];
}

const CVU = () => {

  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessionData = async () => {
      const response = await fetch("https://beewalletback.onrender.com/api/auth/session", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const dataUser: UserData = await response.json();
        setUserData(dataUser);
      } else if (response.status === 401) {
        console.error("Session not valid, redirecting to login.");
        navigate("/login");
      } else {
        console.error("Error fetching session data:", response.statusText);
        alert("Error fetching data. Please try again later.");
      }
    };

    fetchSessionData();
  }, [navigate]);

  useEffect(() => {
    const fetchWalletData = async () => {
      const response = await fetch("https://beewalletback.onrender.com/api/wallets/me", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const dataWallet: WalletData = await response.json();
        setWalletData(dataWallet);
      } else if (response.status === 401) {
        console.error("Wallet not valid, redirecting to login.");
        navigate("/login");
      } else {
        console.error("Error fetching wallet data:", response.statusText);
        alert("Error fetching data. Please try again later.");
      }
    };

    fetchWalletData();
  }, [navigate]);

  return (
    <main className='bg-[#0E0E0E] flex flex-col items-center z-20 max-md:w-[10.5rem] 
    max-md:h-[63.9375rem] md:w-[43.75rem] md:h-[46.9375rem] rounded-[1rem] fixed p-3 font-inter'>
      <>
        <section className="flex justify-between w-full">
          <div className="">Datos de cuenta</div> 
          <br />
          <div className=""><Link  to={'/dashboard'}>
            <img src="/icons/close.svg" alt="" />
            </Link></div>
        </section>
        <section className="p-5 max-sm:w-[19.625rem] max-sm:h[13.1875rem]
        flex flex-col gap-1">
          <p className="pl-1">Para ingresar y recibir dinero desde cuentas digitales</p>
          <div className="bg-[#232323] flex flex-col p-5 gap-4 rounded-[1rem]">
            <section className="p-6 flex flex-col gap-5">
              <h2>Tu alias: {walletData?._id}</h2>
              <h2 className="pt-5 border-t-[1px] boder-t-[#323131cc]">Tu cvu: {walletData?.cvu}</h2>
            </section>
            <section className="flex justify-center">
            <button className="border-[#FCCF58] hover:bg-[#FCCF58] hover:text-[#0E0E0E] border-[1px] 
            rounded-[6.25rem] md:w-[35.8125rem] w-[20rem] p-2 ">compartir datos</button>
            </section>
          </div>
        </section>

        <section className="p-5 flex flex-col gap-1">
          <p className="pl-1">
            Pedí dinero a otras cuentas de Beewallet con tu teléfono o e-mail
          </p>
          <div className="bg-[#232323] flex flex-col p-5 gap-4 rounded-[1rem]">
            <section className="p-6 flex flex-col gap-5">
            <h2>Telefono: {userData?.phoneNumber}</h2>
            <h2 className="pt-5 border-t-[1px] boder-t-[#323131cc]">Correo electrónico: {userData?.email}</h2>
            </section>
            <section className="flex justify-center">
            <button className="border-[#FCCF58] hover:bg-[#FCCF58] hover:text-[#0E0E0E] border-[1px] 
            rounded-[6.25rem] md:w-[35.8125rem] w-[20rem] p-2">Pedir dinero</button>
            </section>
          </div>
          
        </section>
      </>
    </main>
  );
};

export default CVU;
