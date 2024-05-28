import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './pages/Blog'
import Tour from './pages/Tour'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Hotel from './pages/Hotel'
import Cruise from './pages/Cruise'
// import Gallery from './pages/Gallery'
import Flights from './pages/Flights'
import Booking from './compoments/Booking'
import Login from './compoments/Login'
import Contact from './compoments/Contact'
import AboutUs from './compoments/AboutUs'
import Register from './compoments/Register'
import Base from './layouts/Base'
import NotFound from './compoments/404'


const router = createBrowserRouter([
  {
      path: '/',
      element: <Base />,
      errorElement: <NotFound />,
      children: [
        {
          path:"/blog",
          element: <Blog />
      
        },
        {
          path:"/",
          element: <Home />
      
        },
        {
          path:"/tour",
          element: <Tour />
      
        },
        {
          path:"/booking",
          element: <Booking />
      
        },
        {
          path:"/car",
          element: <Cars />
      
        },
        {
          path:"/hotel",
          element: <Hotel />
      
        },
        {
          path:"/cruise",
          element: <Cruise />
      
        },
        {
          path:"/aboutus",
          element: <AboutUs />
      
        }
        ,
        {
          path:"/contact",
          element: <Contact />
      
        }
        ,
        {
          path:"/login",
          element: <Login />
      
        }
        ,
        {
          path:"/register",
          element: <Register />
      
        }
        ,
        // {
        //   path:"/gallery",
        //   element: <Gallery />
      
        // } ,
        {
          path:"/flights",
          element: <Flights />
      
        }
      ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)