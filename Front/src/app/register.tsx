import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/assets/icons/google";
import { AppleIcon } from "@/assets/icons/apple";
import { RegisterSteps } from "./ui/register-steps";

export default function Register() {
  const [values, setValues] = useState<{ email: string }>({ email: "" });
  const [step, setStep] = useState<number>(1);

  return (
    <div className="size-full flex items-center">
      {step === 1 ? (
        <div className="mx-auto w-full max-w-lg space-y-8">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-semibold text-[26px]">Crea tu cuenta</h2>
            <p className="text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="font-semibold ml-2 hover:underline hover:underline-offset-4"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
          <form className="space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Tu dirección de correo electrónico
              </label>
              <Input
                type="email"
                id="email"
                className=""
                placeholder="joedoe.2024@email.com"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div>
              <Button
                type="button"
                size="lg"
                variant={values.email ? "secondary" : "default"}
                className="rounded-full w-full mt-6 select-none font-semibold hover:bg-secondary/80"
                disabled={!values.email}
                onClick={() => setStep(step + 1)}
              >
                Siguiente
              </Button>
            </div>
            <div className="space-y-2">
              <br />
              <span className="text-sm text-slate-600">O continúa con</span>
              <ul className="flex justify-between [&>li]:w-full [&>li>button]:w-full gap-4">
                <li>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    type="button"
                  >
                    <GoogleIcon />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full"
                  >
                    <img
                      src="/facebookIco.png"
                      alt="facebook icon"
                      className="aspect-square size-6"
                    />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full"
                  >
                    <AppleIcon />
                  </Button>
                </li>
              </ul>
            </div>
          </form>
          <div className="text-center">
            <p className="text-xs font-light">
              Al registrarte, aceptas nuestras{" "}
              <Link to="/" className="underline underline-offset-2">
                Condiciones de Uso
              </Link>{" "}
              y{" "}
              <Link to="/" className="underline underline-offset-2">
                Política de Privacidad
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <RegisterSteps step={step} setStep={setStep} />
      )}
    </div>
  );
}
