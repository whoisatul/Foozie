import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";



export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

    const[cartItems, setCartItems] = useState({}) 
    
 const contextValue = {
 food_list
 }
 return(
    <StoreContext.Provider value = {contextValue}>
        {props.children}
    </StoreContext.Provider>
 )
}
export default StoreContextProvider