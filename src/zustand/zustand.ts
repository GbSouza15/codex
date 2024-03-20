import { create } from 'zustand'

type UserMenu = {
    companyName: string,
    setUserName: (companyName: string) => void
}

export const useStore = create<UserMenu>((set) => ({
    companyName: "Oi",
    setUserName: (companyName) => set({ companyName })
}))