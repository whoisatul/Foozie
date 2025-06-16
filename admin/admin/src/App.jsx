import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <div>
          <Navbar />
          <hr />
          <Sidebar />
      
        </div>
      
    },
    {
      path:'/add',
      element: <div>
        <ToastContainer />
        <Navbar />
        <hr />
       <div className='flex'>
       <Sidebar />
       <Add />
       </div>
        
      </div>
    },{
      path:'/list',
      element: <div>
        <Navbar />
        <hr />
        <div className='flex'>
       <Sidebar />
       <List/>
       </div>
        
      </div>
    },{
      path:'/order',
      element: <div>
        <Navbar />
        <hr />
        <div className='flex'>
       <Sidebar />
       <Order />
       </div>
        
      </div>
    }
  ])
  
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
