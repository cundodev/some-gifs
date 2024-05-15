import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { GifsContextProvider } from './context/GifsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GifsContextProvider>
    <RouterProvider router={router} />
  </GifsContextProvider>,
)
