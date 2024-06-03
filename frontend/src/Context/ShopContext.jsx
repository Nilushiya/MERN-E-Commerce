import React , { createContext, useEffect, useState} from 'react'
import { json } from 'react-router-dom';
// import allProducts from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 1 ; index < 300+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [allProducts,setAllProducts] = useState([]);
    const [cartItems , setCartItems] = useState(getDefaultCart());
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:4000/product/allProduct');
                const data = await res.json();
                setAllProducts(data);
                console.log("hhh"+allProducts)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    // console.log("hhh"+{allProducts})
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
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/user/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json()).then((data)=>console.log(data));
        }
    }
   
    
    useEffect(() => {
        // console.log(cartItems);
    },[cartItems]);
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/user/removetocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json()).then((data)=>console.log(data));
        }
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