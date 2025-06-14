import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  
  return (
   <div>
    <Navbar />
    <hr />
    <div className='flex'>
      <Sidebar />
    </div>
   </div>
  )
}

export default App
