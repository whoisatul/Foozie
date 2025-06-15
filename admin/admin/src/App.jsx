import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


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
