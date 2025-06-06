import React from 'react'
import Header from '../components/Header'
import Menu from './Menu'
import Fooddisplay from '../components/foodDisplay'
import { useState } from 'react'



const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
    </div>
  )
}

export default Home