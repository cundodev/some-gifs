import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth } from '@/services/firebase'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'

interface AuthType {
  signup: (email: string, password: string) => Promise<UserCredential>
  signin: (email: string, password: string) => Promise<UserCredential>
  logout: () => Promise<void>
  user: User | null
}

export const AuthContext = createContext<AuthType>({
  signup: async () => {
    throw new Error('signup not implemented')
  },
  signin: async () => {
    throw new Error('signin not implemented')
  },
  logout: async () => {
    throw new Error('logout not implemented')
  },
  user: null,
})

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)
  const signin = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)
  const logout = () => signOut(auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ signup, signin, logout, user }}>{children}</AuthContext.Provider>
}
