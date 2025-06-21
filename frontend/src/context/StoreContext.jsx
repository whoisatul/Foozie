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
    const url = "http://localhost:8000";
    //add to cart
    const addToCart = async (itemId) => {
        // Update local cart state first
        setCartItems((prev) => ({
          ...prev,
          [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }));
      
        // Get token from localStorage or context
        const token = localStorage.getItem("accesstoken");
      
        try {
          await axios.post(
            `${url}/api/v1/cart/add`,
            { itemId },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
        } catch (err) {
          console.error("Add to cart error:", err);
        }
      };
      
    //remove from cart
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] - 1 : 1
          }));
        
          // Get token from localStorage or context
          const token = localStorage.getItem("accesstoken");
        
          try {
            await axios.post(
              `${url}/api/v1/cart/remove`,
              { itemId },
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );
          } catch (err) {
            console.error("remove from cart error:", err);
          }
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
    
    const getcart = async(token) => {


      const response = await axios.post(`${url}/api/v1/cart/getcart`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setCartItems(response.data.cartdata)

    }

    const fetchfoodlist = async () => {
        const response = await axios.get(`${url}/api/v1/food/list`)
        setfoodlist(response.data.data)
    }
    
    useEffect (()=>{
        async function loadData () {
            fetchfoodlist();
            if (localStorage.getItem("accesstoken")) {
                setaccesstoken(localStorage.getItem("accesstoken" ))
                await getcart(localStorage.getItem("accesstoken"));
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