import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='container m-auto grid min-h-screen max-w-5xl grid-rows-[auto,1fr,auto]'>
      <div className='absolute inset-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,46,137,0.3),rgba(255,255,255,0))]'></div>
      {/* <header></header> */}
      <Outlet />
      <footer className='mt-auto w-full border-t border-slate-200/5 py-4 text-center '>
        <p className='inline-block text-gray-500'>By&nbsp;</p>
        <a
          href='https://github.com/cundodev'
          target='_blank'
          className='font-bold hover:text-pink-600'
        >
          CundoDev
        </a>
      </footer>
    </div>
  )
}
