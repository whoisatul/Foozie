import React from 'react'
import { useState } from 'react'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/Placeorder'
import Menu from './Pages/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Navbar />
    <Home />
    </div>
  },{
    path: '/cart',
    element: <Cart />
  },{
     path: '/order',
     element: <PlaceOrder />
  },{
    path: '/menu',
     element: <Menu />
  }
])

const App = () => {
  return (
    <div><RouterProvider router={router}></RouterProvider></div>
  )
}

export default App