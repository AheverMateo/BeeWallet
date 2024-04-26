import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const AccountData2 = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessionData = async () => {
      const response = await fetch(
        "https://beewalletback.onrender.com/api/auth/session",
        {
          method: "GET",
          credentials: "include",
        }
      );

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
      const response = await fetch(
        "https://beewalletback.onrender.com/api/wallets/me",
        {
          method: "GET",
          credentials: "include",
        }
      );

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
    <section
      className="flex  sm:w-[27.12rem]  
    justify-center gap-5 "
    >
      <div
        className="flex object-center justify-center 
      bg-[#161616] rounded-[1rem] p-4 h-[4.69rem] w-[12.94rem]"
      >
        <img
          src="/icons/UpCircle1.svg"
          alt="GastosTotales"
          className="w-[4.125rem] h-[2.8rem] object-cover rotate-180"
        />
        <div className="grid">
          <h1 className="text-xs">Ingresos Totales de: {userData?.firstName}</h1>
          <h2>{walletData?.balance}</h2>
        </div>
      </div>
      <div
        className="flex item-center justify-center 
      bg-[#161616] h-[4.69rem] w-[12.94rem] rounded-[1rem] p-4"
      >
        <img
          src="/icons/UpCircle1.svg"
          alt="GastosTotales"
          className="w-[4.125rem] h-[2.8rem] object-cover"
        />
        <div className="grid">
          <h1 className="text-xs"> Gastos Totales</h1>
          <h2>{}</h2>
        </div>
      </div>
    </section>
  );
};

export default AccountData2;
