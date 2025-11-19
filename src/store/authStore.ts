import { create } from "zustand";
import { persist } from 'zustand/middleware'
import type { User } from '../lib/supabase'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isGuest: boolean
  showWelcome: boolean
  login: (user: User) => void
  logout: () => void
  setGuest: () => void
  hideWelcome: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isGuest: false,
      showWelcome: false,
      login: (user) => set({ user, isAuthenticated: true, isGuest: false, showWelcome: true }),
      logout: () => set({ user: null, isAuthenticated: false, isGuest: false, showWelcome: false }),
      setGuest: () => set({ user: null, isAuthenticated: false, isGuest: true, showWelcome: false }),
      hideWelcome: () => set({ showWelcome: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
)