import React , { createContext, useEffect, useState} from 'react'
import allProducts from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 1 ; index < allProducts.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart());
   
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){  //item enrathu key objectnta
                let itemInfo = allProducts.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price* cartItems[item];

            }
            return totalAmount
        }
    }

    const addToCart = (itemId) =>{
        console.log(itemId);
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));  
    }
    useEffect(() => {
        // console.log(cartItems);
    }, [cartItems]);
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartItems = () => {
        let totalItem = 0; 
        for (const item in cartItems) {
            console.log("Hi");
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
    
        return totalItem;
    }
    
    const contextValue = {allProducts,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}
    // console.log(cartItems)
    return(
        <ShopContext.Provider value = {contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider