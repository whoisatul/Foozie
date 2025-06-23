import React, { useState } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/Placeorder'
import Menu from './Pages/Menu'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Myorders from './Pages/Myorders'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const router = createBrowserRouter([
    { path: '/', element: <div><Navbar setShowLogin={setShowLogin} /><Home /></div> },
    { path: '/cart', element: <div><Navbar cartMode={true} setShowLogin={setShowLogin}  /><Cart /><Footer/></div> },
    { path: '/order', element: <><Navbar cartMode={true} /><PlaceOrder /><Footer/></> },
    { path: '/menu', element: <div><Navbar cartMode={true} setShowLogin={setShowLogin} /><Menu /></div> },
    { path: '/myorder', element: <div><Navbar cartMode={true} setShowLogin={setShowLogin}  /><Myorders/><Footer/></div> },
    
  ]);

  return (
    <>
      {showLogin && <Signup setShowLogin={setShowLogin} />}
      <RouterProvider router={router} />
    </>
  );
}

export default App