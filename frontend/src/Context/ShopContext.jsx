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

    const contextValue = {allProducts,cartItems,addToCart,removeFromCart}
    // console.log(cartItems)
    return(
        <ShopContext.Provider value = {contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider