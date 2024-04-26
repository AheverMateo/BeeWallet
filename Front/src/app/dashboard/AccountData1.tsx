import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Dashboard from "../dashboard";
import eyeIcon from "/icons/eye.svg";
import eyeOffIcon from "/icons/eye-off.svg";

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

const AccountData1 = () => {
  const [isBlurred, setIsBlurred] = useState(false);
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

  // const [isTransferenceOpen, setIsTransferenceOpen] = useState(false);
  const icon: string = isBlurred ? eyeOffIcon : eyeIcon;

  // const handleClick = () => {
  //   setIsBlurred(!isBlurred);
  // };
  // const handleOpenTransference = () => {
  //   setIsTransferenceOpen(true);
  // };

  // const handleCloseTransference = () => {
  //   setIsTransferenceOpen(false);
  // };

  return (
    <main
      className=" flex flex-col relative
    sm:w-[27.0625rem] sm:h-[15.625rem]
    rounded-[1rem] gap-2 p-5 bg-[#161616]"
    >
      <section className="flex justify-between">
        <p>Cuenta { userData?.roles } Beelancer</p>
        <Link to={"/dashboard/CVU"}>
          <button className="bg-[#323131] rounded-[6.25rem] w-[7.4375rem] md:w-[8rem] p-1">
            Tu CVU
          </button>
        </Link>
      </section>
      <h1 className="md:text-[1.625rem] text-[1.5rem] text-[#B5B5B5]">
        Disponible
      </h1>
      <div className="flex gap-8">
        <h2 className={`text-[3rem] ${isBlurred ? "blur-lg" : ""}`}>
          ${ walletData?.balance }
        </h2>

        <button onClick={() => setIsBlurred(!isBlurred)}>
          <img src={icon} alt="icon" />
        </button>
      </div>
      <section className="flex justify-center gap-2  ">
        <button className="h-[2rem] w-[8.2rem] bg-[#FCCF58] rounded-[1.15625rem] border border-solid border-[#FCFFFF]">
          <Link to={"/dashboard/transference"}>Transferir</Link>
        </button>
        <button className="h-[2rem] w-[8.2rem] rounded-[1.15625rem] border border-solid border-[#FCFFFF]">
          Ingresar
        </button>
        <button
          className=" border border-solid border-[#FCFFFF] rounded-[1.15625rem]
          h-[2rem] w-[8.2rem]"
        >
          Retirar
        </button>
      </section>
    </main>
  );
};

export default AccountData1;
