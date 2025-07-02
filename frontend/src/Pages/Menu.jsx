import React,{useState} from 'react'
import Suggestion from './Suggestion'
import Fooddisplay from '../components/foodDisplay'
import Footer from '../components/Footer'

const Menu = () => {

  const [category, setCategory] = useState("All");
  return (
    <div className='mt-[100px]'>
       <Suggestion category={category} setCategory={setCategory}/>
       <Fooddisplay category={category}/>
       <Footer />
    </div>
  )
}

export default Menu
