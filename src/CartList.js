import React, {useState, useContext} from 'react'
import Cart from './Cart'
import {CartContext} from './CartContext'

const CartList = () => {
    const [carts, setCarts] = useContext(CartContext);
    return (
        <div>
            {carts.map(cart => (
            <Cart {...cart} key={cart.id} />
            ))}
        </div>
    )
}

export default CartList
