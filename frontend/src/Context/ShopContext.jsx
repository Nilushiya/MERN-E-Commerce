import React , { createContext} from 'react'
import allProducts from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {allProducts}

    return(
        <ShopContext.Provider value = {contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider