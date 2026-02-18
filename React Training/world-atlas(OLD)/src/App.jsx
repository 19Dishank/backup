
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Layout from './pages/Layout'
import Contact from './components/Contact'
import About from './components/About'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Country from './components/Country'
import CountryDetails from './components/CountryDetails'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/country',
          element: <Country />
        },
        {
          path: '/country/:id',
          element: <CountryDetails />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
