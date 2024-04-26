import { create } from "zustand";
interface FormData {
  nombre: string;
  direccion: string;
  localidad: string;
  codigo: string;
}

export const useGlobalStoreForm = create((set) => ({
  formData: {
    nombre: "",
    direccion: "",
    localidad: "",
    codigo: "",
  },
  setFormData: (data: FormData) =>
    set((state: { formData: FormData }) => ({
      formData: { ...state.formData, ...data },
    })),
}));
