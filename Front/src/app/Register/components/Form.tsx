import { useState, ChangeEvent } from "react";

const Form = () => {
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push("La contraseña debe tener al menos 8 caracteres");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("La contraseña debe contener al menos una letra mayúscula");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("La contraseña debe contener al menos una letra minúscula");
    }

    if (!/[0-9]/.test(password)) {
      errors.push("La contraseña debe contener al menos un número");
    }

    return errors;
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const validationErrors = validatePassword(event.target.value);
    setErrors(validationErrors);
  };

  return (
    <form action="">
      <div className="flex flex-col justify-center items-center">
        <input
          type="password"
          placeholder="Contraseña"
          className="border-b-2 border-[#6F5308] w-[20.5rem] md:w-[55.375rem] h-[2.5rem] mt-5"
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.map((error, index) => (
          <div key={index} className="text-red-500">
            {error}
          </div>
        ))}
      </div>
    </form>
  );
};
export default Form;
