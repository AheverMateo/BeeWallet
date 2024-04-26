import { create } from 'zustand'


export const useGlobalStoreForm = create((set) => ({
    formData: {
        nombre: "",
        direccion: "",
        localidad: "",
        codigo: ""
    },
    setFormData: (data:any) => set((state:any) => ({ formData: { ...state.formData, ...data } })),
    }));

export const userStore = create(() => {

    async function fetchSessionData() {
        try {
        const response = await fetch('https://beewalletback.onrender.com/api/auth/session', {
            credentials: 'include'
        });
        const data = await response.json();
        if (data.success) {
            console.log('User data:', data.user);
        } else {
            console.log('No active session:', data.message);
        }
        } catch (error) {
        console.error('Error fetching session data:', error);
        }
    }

    fetchSessionData();
})
