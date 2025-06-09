import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";



export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

    const[cartItems, setCartItems] = useState({}) 
    //add to cart
    const addToCart = (itemId) =>{
        if (!cartItems[itemId]) { setCartItems ((prev)=>({...prev, [itemId] :1})) }
        else { setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) }
    } 
    //remove from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        if (cartItems [item] >0) {
        let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price* cartItems[item];
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {
    food_list,
    cartItems, setCartItems, addToCart,
    removeFromCart, getTotal, getTotalCartItems
 }
 return(
    <StoreContext.Provider value = {contextValue}>
        {props.children}
    </StoreContext.Provider>
 )
}
export default StoreContextProvider