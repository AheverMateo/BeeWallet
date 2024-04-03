import { useState } from "react";
import { registerSteps } from "@/assets/static-data/register-steps"
import { Slider } from "@/components/ui/custom-slider"
import clsx from "clsx";

interface RegisterStepProps {
    step: number;
    setStep: (step: number) => void;
}

export function RegisterSteps({step, setStep}: RegisterStepProps) {
    const [selectOption, setSelectOption] = useState<string>("")

    return (
        <div className="h-full container mx-auto grid grid-rows-[auto,1fr]">
            <div className="mt-8 space-y-2 max-w-4xl w-full mx-auto">
                <Slider className="w-[85%] mx-auto" min={1} max={registerSteps.length} value={[step]} step={1}/>
                <ul className="grid grid-cols-6 gap-2 font-semibold text-[10px]">
                    {registerSteps.map((step) => (
                        <li key={step.id} className="flex gap-4 font-semibold justify-center">
                            <span className="sr-only">{step.id}</span>
                            <p className="text-center">{step.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-8 mx-auto h-full justify-center">
                <div className="text-center space-y-4">
                    <h2 className="font-bold text-2xl">¿Qué tipo de cuenta te gustaría abrir hoy?</h2>
                    <p className="text-sm">También puedes añadir una cuenta más tarde.</p>
                </div>
                <div className="flex flex-row justify-center gap-8">
                    <button className={clsx("border border-slate-100 shadow-md p-4 max-w-64 w-full text-center rounded-lg hover:ring-2 ring-secondary focus-visible:outline-2 outline-secondary transition-all", {
                        "ring-2 ring-secondary bg-accent": selectOption === "personal"
                    })} 
                        onClick={() => {
                            setSelectOption("personal")
                            setStep(3)
                        }}
                    >
                        <div className="size-32 flex mx-auto aspect-square justify-center items-center">
                            <img src="/icons/personal.png" alt="personal icon" className="h-[6rem] w-auto object-cover"/>
                        </div>
                        <h3 className="font-bold text-xl">Cuenta Personal</h3>
                        <p className="text-xs">Enviar, gastar y recibir dinero en todo el mundo.</p>
                    </button>
                    <button className={clsx("border border-slate-100 shadow-md p-4 max-w-64 w-full text-center rounded-lg hover:ring-2 ring-secondary focus-visible:outline-2 outline-secondary transition-all", {
                        "ring-2 ring-secondary bg-accent": selectOption === "business"
                    
                    })}
                        onClick={() => {
                            setSelectOption("business")
                            setStep(3)
                        }}
                    >
                        <div className="size-32 flex mx-auto aspect-square justify-center items-center">
                            <img src="/icons/business.png" alt="business icon" className="h-[6rem] w-auto object-cover"/>
                        </div>
                        <h3 className="font-bold text-xl">Cuenta Empresa</h3>
                        <p className="text-xs">Hacer negocios o trabajar como autónomo de manera internacional.</p>
                    </button>
                </div>
            </div>
        </div>
    )
}