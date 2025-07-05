import React,{useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Suggestion from './Suggestion'
import Fooddisplay from '../components/foodDisplay'
import Footer from '../components/Footer'

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState("All");
  const [highlightedFood, setHighlightedFood] = useState(null);

  useEffect(() => {
    // Check if there are URL parameters for category and highlight
    const categoryParam = searchParams.get('category');
    const highlightParam = searchParams.get('highlight');
    
    if (categoryParam) {
      setCategory(categoryParam);
    }
    
    if (highlightParam) {
      setHighlightedFood(highlightParam);
      // Clear the highlight after a short delay to remove the URL parameters
      setTimeout(() => {
        setHighlightedFood(null);
        // Update URL to remove parameters
        window.history.replaceState({}, '', '/menu');
      }, 2000);
    }
  }, [searchParams]);

  return (
    <div className='mt-[100px]'>
       <Suggestion category={category} setCategory={setCategory}/>
       <Fooddisplay category={category} highlightedFood={highlightedFood}/>
       <Footer />
    </div>
  )
}

export default Menu
