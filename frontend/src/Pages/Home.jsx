import React from 'react'
import Header from '../components/Header'
import Suggestion from './suggestion'
import Fooddisplay from '../components/foodDisplay'
import { useState } from 'react'
import Footer from '../components/Footer'
import  Download  from '../components/Download'



const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Suggestion category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default Home