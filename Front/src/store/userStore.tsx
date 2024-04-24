import { create } from 'zustand'



export const userStore = create(() => {


    async function fetchSessionData() {
        try {
        const response = await fetch('http://localhost:3000/api/auth/session', {
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