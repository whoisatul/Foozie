import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

   

    const[cartItems, setCartItems] = useState({}) 
    const[accesstoken,setaccesstoken] = useState("")
    const[refreshtoken,setrefreshtoken] = useState("")
    const[food_list,setfoodlist] = useState([])
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
        totalAmount += itemInfo.price * cartItems[item];
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
    
    const fetchfoodlist = async () => {
        const url = "http://localhost:8000"
        const response = await axios.get(`${url}/api/v1/food/list`)
        setfoodlist(response.data.data)
    }
    
    useEffect (()=>{
        async function loadData () {
            fetchfoodlist();
            if (localStorage.getItem("acesstoken")) {
                setaccesstoken(localStorage.getItem("acesstoken" ))
                }
        }
        loadData();
    },[]);

    const contextValue = {
    food_list,
    cartItems, setCartItems, addToCart,
    removeFromCart, getTotal, getTotalCartItems,accesstoken,refreshtoken,setaccesstoken,setrefreshtoken,fetchfoodlist
 }
 return(
    <StoreContext.Provider value = {contextValue}>
        {props.children}
    </StoreContext.Provider>
 )
}
export default StoreContextProvider