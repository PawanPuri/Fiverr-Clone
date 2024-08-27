import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Orders from './pages/orders/Orders'
import Gig from './pages/gig/Gig'
import Add from './pages/add/Add'
import Mygigs from './pages/mygigs/Mygigs'
import Gigs from './pages/gigs/Gigs'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import './App.scss'
const App = () => {

  const Layout=()=>{
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    );

  }
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <Mygigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ]
    },

    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
