import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import  Download  from '../components/Download'
import Homesection from '../components/Homesection'
import Orderdone from './Orderdone'



const Home = () => {
  return (
    <div>
      <Header/>
      <Homesection/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default Home