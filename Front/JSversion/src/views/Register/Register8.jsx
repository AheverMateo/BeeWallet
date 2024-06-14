import HeaderRegister from "./HeaderRegister";
import stepper3 from "../../assets/icons/stepper3.svg";
import { useGlobalStore } from "../../Stores/globalStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register8 = () => {

 const setForm = useGlobalStore((state) => state.setForm);

 const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nombre:"",
    direccion:"",
    localidad:"",
    codigo:"",
  });

  const handlerInfo = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(formData);
    navigate("/Register9")
  };

  return (
    <div className="h-screen bg-white">
      <div>
        <HeaderRegister />
      </div>
      <div className=" flex flex-col items-center">
        <div className="mt-10">
          <img src={stepper3} alt="" />
        </div>
        <div className=" text-center mt-12">
          <p className=" text-xs font-semibold font-inter">Datos personales</p>
          <h2 className="mt-6 font-inter text-2xl font-semibold leading-6 tracking-wide">
            Completa con tus datos personales.
          </h2>
          <p className="font-inter mt-3 text-xs text-gray-900 f">
            Esta información debe ser precisa.
          </p>
        </div>

        <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col">
            <input
              value={formData.nombre}
              name="nombre"
              className="py-2 mb-3 border border-black rounded-[6px] pl-3"
              placeholder="Nombre y apellido"
              onChange={handlerInfo}
            />
            <input
              value={formData.direccion}
              name="direccion"
              className="py-2 border border-black rounded-[6px] pl-3"
              placeholder="Dirección: Calle y número"
              onChange={handlerInfo}
            />
          </div>
          <div className="flex gap-4">
            <input
              value={formData.localidad}
              name="localidad"
              className="py-2 border border-black rounded-[6px] pl-3"
              placeholder="Ciudad/Localidad"
              onChange={handlerInfo}
            />
            <input
              value={formData.codigo}
              name="codigo"
              className="py-2 border border-black rounded-[6px] pl-3"
              placeholder="Código postal"
              onChange={handlerInfo}
            />
          </div>
            <button
              type="submit"
              className="rounded-full px-52 py-2 mt-8 select-none font-semibold text-white bg-yellow-600"
            >
              Contiuar
            </button>
        </form>
      </div>
    </div>
  );
};

export default Register8;
