import React, {useContext} from 'react'
import { CartContext } from '../CartContext';

export const useCart = () => {

    const [carts, setCarts] = useContext(CartContext);
    const addCart = (product) => {
        setCarts(prevCarts => [...prevCarts, {...product}])
    }

    const deleteCart = (id) => {
        console.log(id)
        let cartItems = carts.filter(prevCart => prevCart.id !== id);

        // console.log(cartItems)

        setCarts([...cartItems])
    } 
    return{deleteCart, addCart}
}
