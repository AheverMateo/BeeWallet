import {create} from 'zustand'

export const useGlobalStore = create((set) => ({
    country: "", 
    setCountry: (newCountry) => set({ country: newCountry }),
    form: {},
    setForm: (newForm) => set({ form: newForm }),
    numberPhone: "",
    setNumberPhone: (newNumberPhone) => set({numberPhone: newNumberPhone})
  }));