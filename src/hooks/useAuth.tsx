import { AuthContext } from '@/context/AuthContext'
import { useContext } from 'react'

export default function useAuth() {
  const { signup, signin, user } = useContext(AuthContext)!
  return { signup, signin, user }
}
