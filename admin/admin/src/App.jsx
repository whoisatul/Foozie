import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
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
        <div >
          <div className='flex'>
            <Sidebar/>
           <Home /></div>
          </div>
      
    },
    {
      path:'/add',
      element: <div >
        <ToastContainer />
       <div className='flex '>
       <Sidebar/>
       <Add />
       </div>
        
      </div>
    },{
      path:'/list',
      element: <div>
        <div className='flex'>
        <Sidebar/>
       <List/>
       </div>
      </div>
    },{
      path:'/order',
      element: <div >
        <div className='flex'>
        <Sidebar/>
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
