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

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar setShowLogin={setShowLogin} />
          <Home />
        </div>
      ),
    },
    { path: '/cart', element: <div><Navbar cartMode={true} setShowLogin={setShowLogin}  /><Cart /><Footer/></div> },
    { path: '/order', element: <><PlaceOrder /><Footer/></> },
    { path: '/menu', element: <div><Navbar setShowLogin={setShowLogin} /><Menu /></div> }
  ]);

  return (
    <>
      {showLogin && <Signup setShowLogin={setShowLogin} />}
      <RouterProvider router={router} />
    </>
  );
}

export default App