import { FormEventHandler } from 'react'

export default function AuthForm({
  handleSubmit,
  label,
}: {
  handleSubmit: FormEventHandler<HTMLFormElement>
  label: string
}) {
  return (
    <form className='flex flex-col gap-4 leading-6' onSubmit={handleSubmit}>
      <label className='block'>
        Email:
        <input className='mt-2 w-full rounded-md px-2 py-2 ' type='email' name='email' placeholder='john@example.com' />
      </label>
      <label className='block'>
        Password:
        <input className='mt-2 w-full rounded-md px-2 py-2 ' type='password' name='password' placeholder='******' />
      </label>
      <button className='rounded-md bg-pink-600 px-4 py-2 font-semibold' type='submit'>
        {label}
      </button>
    </form>
  )
}
