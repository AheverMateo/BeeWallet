import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/assets/icons/google";
import { AppleIcon } from "@/assets/icons/apple";
import panel from "../assets/icons/Imagen_Panal_contorno.svg"


export default function Register() {
    const [values, setValues] = useState<{ email: string }>({ email: "" });
    const [step, setStep] = useState<number>(1);

    return (
        <div className=" w-screen h-screen container grid grid-cols-[3fr,3fr] mx-auto place-content-center">
            <div className=" border-r">
                <div className='fixed flex w-[350px] top-[48%] right-[75%]'>
                    <img src={panel} alt="" />
                </div>
            </div>
                <div className="mx-auto w-full max-w-lg space-y-7 pl-8 mt-8">
                    <div className="flex flex-col gap-4 text-center mb-18">
                        <h2 className="font-semibold text-[26px] text-white">Te damos la bienvenida a <br />
                        <span className="text-center font-bold text-4xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">beewallet.</span></h2>
                        <p className=" text-xs text-yellow-600">Tu colmena financiera.</p>
                    </div>
                    <form className="space-y-4">
                        <h2 className="text-white text-2xl">Crea tu cuenta</h2>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="text-sm text-gray-300">Tu dirección de correo electrónico</label>
                            <Input
                                type="email"
                                id="email"
                                className="pr-12 bg-transparent text-white"
                                placeholder="ejemplo@beewallet.com"
                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                            />
                        </div>
                        <div className="" >
                            <Button
                                type="button"
                                size="lg"
                                variant={values.email ? "secondary" : "default"}
                                className="rounded-full w-full mt-4 select-none font-semibold text-white bg-yellow-600"
                                disabled={!values.email}
                                onClick={() => setStep(step + 1)}
                            >
                                Siguiente
                            </Button>
                        </div>
                        <div className="text-center mb-10">
                            <span className="text-xs text-white">¿Ya tienes una cuenta? <Link to="/login" className="border-b border-gray-300 text-white">Inicia sesion</Link></span>
                            </div>
                        <div className="">
                            <p className=" text-sm text-white text-center mb-8 mt-8">O continua con</p>
                            <ul className="flex justify-between [&>li]:w-full [&>li>button]:w-full gap-4">
                                <li><Button
                                    variant="outline"
                                    className="rounded-full"
                                    type="button"
                                ><GoogleIcon /></Button></li>
                                <li><Button type="button" variant="outline" className="rounded-full"><AppleIcon /></Button></li>
                            </ul>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-xs font-light text-white">Al registrarte, aceptas nuestras <Link to="/" className="underline underline-offset-2">Condiciones de Uso</Link> y <Link to="/" className="underline underline-offset-2">Política de Privacidad</Link></p>
                    </div>
                </div>
        </div>
    )
}        