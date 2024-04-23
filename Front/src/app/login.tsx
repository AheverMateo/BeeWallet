import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "@/assets/icons/eye";
import { Eye2 } from "@/assets/icons/eye2";
import { GoogleIcon } from "@/assets/icons/google";
import { AppleIcon } from "@/assets/icons/apple";
import styles from "./ui/imgMasquerade.module.css";

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [values, setValues] = useState<{ email: string, password: string }>({ email: "", password: "" });

    return (
        <div className="size-full container grid grid-cols-[3fr,5fr] mx-auto place-content-center">
            <div className="size-full border-r border-border/50">
                <div className='relative flex w-[170px] top-1/2'>
                    <div className={styles.image} />
                    <svg className='z-[1]' xmlns="http://www.w3.org/2000/svg" width="184" height="213" viewBox="0 0 184 213" fill="none">
                        <path d="M0.844701 53.4281L91.7641 0.780001L182.683 53.4281V158.728L91.7641 211.376L0.844701 158.728V53.4281Z" stroke="#FCCF58" strokeWidth="1.35" />
                    </svg>
                </div>
            </div>
            <div className="mx-auto w-full max-w-lg space-y-8 pl-8">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="font-semibold text-[26px]">Te damos la bienvenida de nuevo</h2>
                    <p className="text-sm">¿Por primera vez en x? <Link to="/register" className="font-semibold ml-2 hover:underline hover:underline-offset-4">Regístrate</Link></p>
                </div>
                <form className="space-y-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm">Tu dirección de correo electrónico</label>
                        <Input
                            type="email"
                            id="email"
                            className=""
                            placeholder="joedoe.2024@email.com"
                        />
                    </div>
                    <div className="relative flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm">Tu contraseña</label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="pr-12"
                            placeholder="Contraseña"
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                        />
                        <Button size="icon"
                            variant="outline"
                            type="button"
                            disabled={!values.password}
                            className="absolute right-0 bottom-0 border-none bg-transparent hover:bg-transparent/50 hover:text-secondary cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Eye2 /> : <Eye />}
                        </Button>
                    </div>
                    <div >
                        <Button
                            type="submit"
                            size="lg"
                            variant={!values.email && !values.password ? "default" : "secondary"}
                            className="rounded-full w-full mt-6 select-none font-semibold"
                            disabled={!values.email && !values.password}
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                    <div className="w-full flex justify-end px-2">
                        <Link to="/" className="text-sm font-semibold hover:underline hover:underline-offset-4">
                            ¿Problemas al iniciar sesión?
                        </Link>
                    </div>
                    <div className="space-y-2">
                        <br />
                        <span className="text-sm text-slate-600">O inicia sesión con</span>
                        <ul className="flex justify-between [&>li]:w-full [&>li>button]:w-full gap-4 select-none">
                            <li><Button
                                variant="outline"
                                className="rounded-full"
                                type="button"
                            ><GoogleIcon />
                            </Button>
                            </li>
                            <li><Button type="button" variant="outline" className="rounded-full"><AppleIcon /></Button></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}        