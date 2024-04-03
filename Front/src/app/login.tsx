import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "@/assets/icons/eye";
import { GoogleIcon } from "@/assets/icons/google";
import { AppleIcon } from "@/assets/icons/apple";

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [values, setValues] = useState<{ email: string, password: string }>({ email: "", password: "" });

    return (
        <div className="size-full flex items-center">
            <div className="mx-auto w-full max-w-lg space-y-8">
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
                            className="absolute right-0 bottom-0 border-none bg-transparent hover:bg-transparent/5 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <Eye />
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
                        <ul className="flex justify-between [&>li]:w-full [&>li>button]:w-full gap-4">
                            <li><Button
                                variant="outline"
                                className="rounded-full"
                                type="button"
                            ><GoogleIcon /></Button></li>
                            <li><Button type="button" variant="outline" className="rounded-full"><img src="/facebookIco.png" alt="facebook icon" className="aspect-square size-6" /></Button></li>
                            <li><Button type="button" variant="outline" className="rounded-full"><AppleIcon /></Button></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}        