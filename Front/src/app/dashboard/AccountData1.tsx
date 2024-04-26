import { useState } from "react";
import { Link } from "react-router-dom";
// import Dashboard from "../dashboard";
import eyeIcon from "/icons/eye.svg";
import eyeOffIcon from "/icons/eye-off.svg";

type AccountDataProps = {
  cvu: string;
  balance: string;
};

const AccountData1: React.FC<AccountDataProps> = ({ cvu, balance }) => {
  const [isBlurred, setIsBlurred] = useState(false);

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
        <p>Cuenta Beelancer</p>
          <p className="w-[7.4375rem] md:w-[14.5rem]">
            Tu CVU: <span className="text-[12px]">{cvu}</span>
          </p>
      </section>
      <h1 className="md:text-[1.2rem] text-[1.5rem] text-[#B5B5B5]">
        Dinero disponible
      </h1>
      <div className="flex gap-4">
        <h2 className={`text-[3rem] ${isBlurred ? "blur-lg" : ""}`}>
          ${balance}
        </h2>

        <button onClick={() => setIsBlurred(!isBlurred)}>
          <img src={icon} alt="icon" />
        </button>
      </div>
      <section className="flex justify-center gap-2  ">
        <button className="h-[2rem] w-[8.2rem] bg-[#FCCF58] rounded-[1.15625rem] border border-solid border-[#FCCF58]">
          <Link to={"/dashboard/transference"} className="text-[#0E0E0E]">Transferir</Link>
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
