import stepper2 from "../../assets/icons/stepper2.svg";
import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import HeaderRegister from "./HeaderRegister";
import { useGlobalStore } from "../../Stores/globalStore";

const countrys = [
  { value: "Argentina", label: "Argentina" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Brasil", label: "Brasil" },
  { value: "Chile", label: "Chile" },
  { value: "Colombia", label: "Colombia" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Uruguay", label: "Uruguay" },
];

const customStyles = {
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#6F5308" : null,
      color: isFocused ? "white" : "black",
    };
  },
};

const Register7 = () => {
  const useCountry = useGlobalStore((state) => state.setCountry);

  const handleCountryChange = (event) => {
    useCountry(event.value);
  };

  return (
    <div className="h-screen bg-white">
      <div>
        <HeaderRegister />
      </div>

      <div className=" flex flex-col items-center">
        <div className="mt-10 flex items-center">
          <Link to="/register">
            <img className="mr-10" src="/icons/ArrowLeft.svg" alt="" />
          </Link>
          <img src={stepper2} alt="" />
        </div>

        <div className=" text-center mt-16">
          <p className="font-bold text-xs">Pais</p>
          <h2 className="mt-6 text-2xl font-bold">
            ¿Dónde vives la mayor parte del tiempo?
          </h2>
          <p className="mt-3 text-xs text-gray-900 f">
            Por ley, puede que tengamos que pedirte un comprobante de tu
            dirección.
          </p>
        </div>
        <form>
          <div className="mt-10">
            <Select
              placeholder="Pais"
              options={countrys}
              onChange={handleCountryChange}
              styles={customStyles}
            />
          </div>
          <Link to="/Register8">
            <button
              type="submit"
              className="rounded-full px-52 py-2 mt-8 select-none font-semibold text-white bg-yellow-600"
            >
              Contiuar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register7;
