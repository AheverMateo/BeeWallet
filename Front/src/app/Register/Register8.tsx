import HeaderRegister from "./HeaderRegister";
import stepper3 from "../../assets/icons/stepper3.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useGlobalStoreForm } from "@/store/userStore";

const Register8 = () => {
  // const  [formData, setFormData]  = useState();

  // const handlerInfo = (event: ChangeEvent<HTMLInputElement>) => {
  //   const property = event.target.name;
  //   const value = event.target.value;

  //   setFormData((prevState: any) => ({ ...prevState, [property]: value }));
  // };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log();
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
          <p className="font-bold text-xs">Datos personales</p>
          <h2 className="mt-6 text-2xl font-bold">
            Completa con tus datos personales.
          </h2>
          <p className="mt-3 text-xs text-gray-900 f">
            Esta información debe ser precisa.
          </p>
        </div>

        <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
          <div className="mb-3">
            <Input
              //value={formData?.nombre}
              name="nombre"
              className="bg-transparent mb-3 border-black rounded-md"
              placeholder="Nombre y apellido"
              //onChange={handlerInfo}
            />
            <Input
              //value={formData.direccion}
              name="direccion"
              className="bg-transparent border-black rounded-md"
              placeholder="Dirección: Calle y número"
              //onChange={handlerInfo}
            />
          </div>
          <div className="flex gap-4">
            <Input
              //value={formData.localidad}
              name="localidad"
              className=" bg-transparent border-black rounded-md"
              placeholder="Ciudad/Localidad"
              //onChange={handlerInfo}
            />
            <Input
              //value={formData.codigo}
              name="codigo"
              className=" bg-transparent border-black rounded-md"
              placeholder="Código postal"
              //onChange={handlerInfo}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            //</form>disabled={
              //!formData.nombre ||
              //!formData.direccion ||
              //!formData.localidad ||
              //!formData.codigo
            //}
            className="rounded-full w-full mt-8 select-none font-semibold text-white bg-yellow-600"
          >
            Contiuar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register8;
