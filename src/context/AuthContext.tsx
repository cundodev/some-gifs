import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth } from '@/services/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'

interface AuthType {
  signup: (email: string, password: string) => Promise<UserCredential>
  signin: (email: string, password: string) => Promise<UserCredential>
  user: User | null
}

export const AuthContext = createContext<AuthType>({
  signup: async () => {
    throw new Error('signup not implemented')
  },
  signin: async () => {
    throw new Error('signin not implemented')
  },
  user: null,
})

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)
  const signin = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ signup, signin, user }}>{children}</AuthContext.Provider>
}
