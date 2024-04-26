import { useState } from "react";
import { Link } from "react-router-dom";
// import Dashboard from "../dashboard";
import eyeIcon from "/icons/eye.svg";
import eyeOffIcon from "/icons/eye-off.svg";

type AccountDataProps = {
  roles: string[];
  cvu: string;
  balance: string;
}

const AccountData1: React.FC<AccountDataProps> = ({ roles, cvu, balance }) => {
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
        <p>Cuenta { roles } Beelancer</p>
        <Link to={"/dashboard/CVU"}>
          <button className="bg-[#323131] rounded-[6.25rem] w-[7.4375rem] md:w-[8rem] p-1">
            Tu CVU: { cvu }
          </button>
        </Link>
      </section>
      <h1 className="md:text-[1.625rem] text-[1.5rem] text-[#B5B5B5]">
        Disponible
      </h1>
      <div className="flex gap-8">
        <h2 className={`text-[3rem] ${isBlurred ? "blur-lg" : ""}`}>
          ${ balance }
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
