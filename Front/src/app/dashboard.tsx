import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import AccountData1 from "./dashboard/AccountData1";
import AcData2 from "./dashboard/AccountData2";
import AccountData3 from "./dashboard/AccountData3";
import Movements from "./dashboard/Movements";
import SideBar from "./dashboard/SideBar";
import SideBarHeader1 from "./dashboard/SideBarHeader1";
// import SideBarHeader2 from "./dashboard/SideBarHeader2";
import SideBarFooter from "./dashboard/SideBarFooter";
import HeadR from "./dashboard/HeadR";

type UserData = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  phoneNumber: string;
};

type WalletData = {
  userId: string;
  _id: string;
  cvu: string;
  balance: string;
  currency: string;
  transactions: string[];
};

type Decimal128 = {
  $numberDecimal: string;
};

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [walletData, setWalletData] = useState<WalletData>({} as WalletData);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isDecimal128 = (value: any): value is Decimal128 => {
      return value && typeof value === "object" && "$numberDecimal" in value;
    };

    const processDecimal128 = (value: unknown): string | unknown => {
      if (isDecimal128(value)) {
        return value.$numberDecimal;
      }
      return value;
    };

    const fetchSessionData = async () => {
      const response = await axios.get(
        "https://beewalletback.onrender.com/api/auth/session",
        // "http://localhost:3000/api/auth/session",
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

    const fetchWalletData = async () => {
      // const response = await axios.get("http://localhost:3000/api/wallets/me", { withCredentials: true });
      const response = await axios.get("https://beewalletback.onrender.com/api/wallets/me", { withCredentials: true });
      if (response.status === 200) {
        const dataWallet = response.data.payload;
        // Assuming 'balance' might be a Decimal128 object
        dataWallet.balance = processDecimal128(dataWallet.balance);
        setWalletData(dataWallet);
      } else if (response.status === 401) {
        console.error("Wallet not valid.");
      } else {
        console.error("Error fetching wallet data:", response.statusText);
      }
    };    

    fetchSessionData();
    fetchWalletData();
  }, [navigate]);

  if (!userData) return <p>Loading...</p>;
  if (!walletData) return <p>Loading...</p>;

  return (
    <main
      className=" absolute min-h-screen md:w-screen bg-[#0E0E0E] text-[#FCFFFF] font-inter
    md:flex md:justify-center p-3 md:gap-5"
    >
      <Outlet />
      <main className="flex flex-col md:flex-row md:justify-between">
        <section className="hidden p-5 md:block h-full">
          <SideBar />
        </section>
        <div className="flex flex-col gap-2">
          <section className="flex justify-between gap-5 p-1">
            <div className="md:hidden">
              <SideBarHeader1 />
            </div>
            <br className=" hidden md:block" />
            <HeadR />
          </section>
          <section className="flex justify-between pl-4">
            <p className="text-[1.625rem]">Hola {userData.firstName}</p>
            <br />
          </section>
          <section className="flex gap-5">
            <div className="flex flex-col gap-5">
              <AccountData1
                roles={userData.roles}
                cvu={walletData.cvu}
                balance={walletData.balance}
              />
              <AcData2 totalIncome={"100"} totalExpenses={"100"} />
            </div>
            <div>
              <AccountData3 />
            </div>
          </section>
          <section className="md:absolute md:bottom-0 lg:pb-5">
            <Movements />
          </section>
        </div>
        <section className="max-sm:block md:hidden">
          <SideBarFooter />
        </section>
      </main>
    </main>
  );
}
