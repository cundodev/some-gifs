import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeartFill } from './Icons'
import useFavorites from '@/hooks/useFavorites'
import useAuth from '@/hooks/useAuth'

export default function User() {
  const [show, setShow] = useState<boolean>(false)
  const { favsStorage } = useFavorites()
  const { user, logout } = useAuth()

  return (
    <div className='flex justify-between gap-2'>
      <div className='relative'>
        <button
          onClick={() => {
            setShow((prevState) => !prevState)
          }}
          className='text-nowrap rounded-md border-2 border-pink-600 bg-[#422733] px-4 py-2 font-semibold'
        >
          {user?.displayName || user?.email}
        </button>
        {show && (
          <div className='absolute right-0 top-[120%] z-20 flex w-full flex-col gap-4  rounded-md border-2 border-pink-600 bg-[#422733] p-2'>
            {favsStorage.size > 0 && (
              <NavLink
                to='/favorites'
                className='flex w-full items-center gap-2 p-2 text-left font-semibold hover:rounded-md hover:bg-pink-900'
              >
                <HeartFill /> Favorites
              </NavLink>
            )}

            <button
              onClick={logout}
              className='border-t-2 border-t-pink-600/50 p-2 text-right font-semibold text-red-600 hover:rounded-md hover:bg-red-600 hover:text-pink-200'
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
