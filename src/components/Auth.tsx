import { FormEvent, useState } from 'react'
import { DEFAULT_ERROR_MESSAGE, ErrorMessage } from '@/utils/constants'
import useAuth from '@/hooks/useAuth'
import AuthForm from './AuthForm'
import User from './User'

export default function Auth() {
  const { user } = useAuth()

  return (
    <div className='w-full md:w-auto'>
      {user ? (
        <User />
      ) : (
        <div className='flex gap-2'>
          <button
            className='w-full text-nowrap rounded-md border border-pink-600 px-4 py-2 font-semibold'
            popovertarget='signin'
          >
            Sign in
          </button>
          <button
            className='w-full text-nowrap rounded-md border border-pink-600 bg-pink-600 px-4 py-2 font-semibold text-pink-100'
            popovertarget='signup'
          >
            Sign up
          </button>
        </div>
      )}
      <Signin />
      <Signup />
    </div>
  )
}

function Signin() {
  const [error, setError] = useState<string>('')
  const { signin, user } = useAuth()

  async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget)
    const email = data.get('email') as string
    const password = data.get('password') as string

    try {
      await signin(email, password)
    } catch (error) {
      if (error instanceof Error) {
        console.error(ErrorMessage[error.code] || DEFAULT_ERROR_MESSAGE)
        setError(ErrorMessage[error.code] || DEFAULT_ERROR_MESSAGE)
      }
    }
  }

  if (user) return null

  return (
    <div id='signin' popover='auto' className='rounded-lg bg-neutral-950 p-4'>
      <AuthForm handleSubmit={handleSubmit} label='Sign in' errorMessage={error} />
    </div>
  )
}

function Signup() {
  const [error, setError] = useState<string>('')
  const { signup, user } = useAuth()

  async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget)
    const email = data.get('email') as string
    const password = data.get('password') as string

    try {
      await signup(email, password)
    } catch (error) {
      if (error instanceof Error) {
        console.error(ErrorMessage[error.code] || DEFAULT_ERROR_MESSAGE)
        setError(ErrorMessage[error.code] || DEFAULT_ERROR_MESSAGE)
      }
    }
  }
  if (user) return null

  return (
    <div id='signup' popover='auto' className='rounded-lg bg-neutral-950 p-4'>
      <AuthForm handleSubmit={handleSubmit} label='Sign up' errorMessage={error} />
    </div>
  )
}
