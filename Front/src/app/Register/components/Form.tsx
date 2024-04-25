import { useState, ChangeEvent } from "react";

const Form = () => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const validatePassword = (password: string): string | null => {
    // Agrega aquí tus propias reglas de validación
    if (password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }

    if (!/[A-Z]/.test(password)) {
      return "La contraseña debe contener al menos una letra mayúscula";
    }

    if (!/[a-z]/.test(password)) {
      return "La contraseña debe contener al menos una letra minúscula";
    }

    if (!/[0-9]/.test(password)) {
      return "La contraseña debe contener al menos un número";
    }

    return null;
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const validationError = validatePassword(event.target.value);
    setError(validationError);
  };
  return (
    <form action="">
      <input
        type="password"
        placeholder="Contraseña"
        className="border-b-2 border-[#6F5308] w-[20.5rem] md:w-[55.375rem] h-[2.5rem] mt-5"
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};
export default Form;
