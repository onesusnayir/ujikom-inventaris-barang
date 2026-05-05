import { create } from "zustand";

const API_URL = "http://localhost:3000/api";

export const useAuthStore = create((set) => ({
    user: null,
    isChecking: false,

    login: async (email, password) => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            set({ user: data.user });
        } catch (error) {
            throw error;
        }
    },

    logout: async () => {
        try{
            await fetch(`${API_URL}/auth/logout`, {
                method: "POST"
            })
            set({ user:null})
        }catch (error) {
            set({ user: null });
        }
    },

    checkLogin: async () => {
        try {
            set({ isChecking: true})
            const res = await fetch(`${API_URL}/auth/check-auth`, {
                credentials: "include",
            });
            
            const data = await res.json();
            
            if (res.ok) {
                set({ user: data.user });
            } else {
                set({ user: null });
            }
        } catch (error) {
            set({ user: null });
        }finally{
            set({ isChecking: false})
            
        }
    },
}));