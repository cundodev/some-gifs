import { AuthContext } from '@/context/AuthContext'
import { useContext } from 'react'

export default function useAuth() {
  const Authentication = useContext(AuthContext)!
  return Authentication
}
