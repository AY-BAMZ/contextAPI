import React, {useContext} from 'react'
import './App.css'
import {CartContext} from './CartContext'
import { useCart } from './hooks/useCart';


const  Cart = ({ image, name, price, id }) => {

    const [carts, setCarts] = useContext(CartContext);
    const {deleteCart} = useCart()
    
    return (
        <div className='cartStyle'>
            <img src={image} alt='' />
            <h3>this is {name}</h3>
            <p>{price}</p>
            <h5 onClick={ () => deleteCart(id)}>x</h5>
        </div>
    )
}

export default Cart
