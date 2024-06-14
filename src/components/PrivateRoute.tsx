import useAuth from '@/hooks/useAuth'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  return user ? children : <Navigate to='/' />
}
