import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { GifsContextProvider } from './context/GifsContext.tsx'
import { FavsContextProvider } from './context/FavsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GifsContextProvider>
    <FavsContextProvider>
      <RouterProvider router={router} />
    </FavsContextProvider>
  </GifsContextProvider>,
)
