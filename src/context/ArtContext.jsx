import React, { createContext , useState } from "react";
import all_product from '../components/Images/all_product';
// import React, { useState } from 'react';

const getDefaultCart =()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] =0; 
    }
    return cart;
}

export const ArtContext = createContext(null);

const ArtContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart};
    return(
        <ArtContext.Provider value={contextValue}>
            {props.children}
        </ArtContext.Provider>
    )
}
export default ArtContextProvider;