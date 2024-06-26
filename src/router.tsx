import { createBrowserRouter } from 'react-router-dom'
import Search from './pages/Search'
import Layout from './layout'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import PrivateRoute from './components/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/favorites',
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
    ],
  },
])
