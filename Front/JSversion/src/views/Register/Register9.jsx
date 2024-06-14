import HeaderRegister from "./HeaderRegister";
import stepper4 from "../../assets/icons/stepper4.svg";
import { useState } from "react";
import Select from "react-select";
import { useGlobalStore } from "../../Stores/globalStore";

const numberPhone = [
  { value: "+54", label: "+54" },
  { value: "+591", label: "+591" },
  { value: "+55", label: "+55" },
  { value: "+56", label: "+56" },
  { value: "+57", label: "+57" },
  { value: "+593", label: "+593" },
  { value: "+595", label: "+595" },
  { value: "+51", label: "+51" },
  { value: "+598", label: "+598" },
];

const customStyles = {
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#6F5308" : null,
      color: isFocused ? "white" : "black",
    };
  },
  control: (provided, state) => ({
    ...provided,
    border: "1px solid black",
    borderRadius: "6px",
    padding: "2px",
    boxShadow: state.isFocused ? "0 0 0 1px black" : null,
    "&:hover": {
      borderColor: "black",
    },
  }),
};

const Register9 = () => {
  const setNumberPhone = useGlobalStore((store) => store.setNumberPhone);

  const [number, setNumber] = useState({
    caracter: "",
    phone: "",
  });

  // Función para manejar cambios en el input
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setNumber((prevNumber) => ({
      ...prevNumber,
      [property]: value,
    }));

    console.log(number);
  };

  // Función para manejar cambios en el Select
  const handleSelectChange = (selectedOption) => {
    setNumber((prevNumber) => ({
      ...prevNumber,
      caracter: selectedOption.value,
    }));

    console.log(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumberPhone(number);
  };

  return (
    <div className="h-screen bg-white">
      <div>
        <HeaderRegister />
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-10">
          <img src={stepper4} alt="Stepper" />
        </div>
        <div className="text-center mt-12">
          <p className="font-bold text-xs">Autenticación 2FA</p>
          <h2 className="mt-6 text-2xl font-bold">
            Verifica tu número de teléfono con un código.
          </h2>
          <p className="mt-3 text-xs text-gray-900">
            Esto nos ayuda a mantener tu cuenta segura.
          </p>
        </div>

        <form className="flex flex-col mt-16 w-[40%]" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <Select
              placeholder="Numero"
              options={numberPhone}
              styles={customStyles}
              className="w-48"
              value={numberPhone.find(
                (option) => option.value === number.caracter
              )}
              onChange={handleSelectChange}
            />
            <input
              value={number.phone}
              onChange={handleInputChange}
              className="py-2 border border-black rounded-[6px] pl-3 w-full"
              placeholder="Numero de Telefono"
              name="phone"
            />
          </div>

          <button
            type="submit"
            size="lg"
            disabled={!number.phone || !number.caracter}
            className="rounded-full px-52 py-2 mt-8 select-none font-semibold text-white bg-yellow-600"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register9;
