import {useState, useEffect } from "react";



function UpdateCart(e){
    const [cartItem, setCartItems] = useState(false)

    useEffect(() => {
        setCartItems(e)
    },[e]) 
    console.log(e)
    return cartItem
}


export {UpdateCart}

