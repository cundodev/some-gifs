import useAuth from '@/hooks/useAuth'
import { FormEventHandler } from 'react'
import ErrorMessage from './ErrorMessage'

export default function AuthForm({
  handleSubmit,
  label,
  errorMessage,
}: {
  handleSubmit: FormEventHandler<HTMLFormElement>
  label: string
  errorMessage: string
}) {
  const { google } = useAuth()

  const handleGoogle = async () => {
    try {
      await google()
    } catch (error) {
      error instanceof Error && console.error(error.message)
    }
  }

  return (
    <div className='flex flex-col gap-4 divide-y divide-pink-400'>
      <div className='flex flex-col gap-4'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <label className='block'>
            Email:
            <input
              className='mt-2 w-full rounded-md px-2 py-2 '
              type='email'
              name='email'
              placeholder='john@example.com'
            />
          </label>
          <label className='block'>
            Password:
            <input className='mt-2 w-full rounded-md px-2 py-2 ' type='password' name='password' placeholder='******' />
          </label>
          <button className='rounded-md bg-pink-600 px-4 py-2 font-semibold' type='submit'>
            {label}
          </button>
        </form>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
      <div>
        <button className='mt-4 w-full rounded-md border px-4 py-2 font-semibold' onClick={handleGoogle}>
          Google
        </button>
      </div>
    </div>
  )
}
