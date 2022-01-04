import React, { useState, useContext } from 'react'
import './App.css'
import CartList from './CartList'
import CartIcon from './Trolley.js'
import { CartContext } from './CartContext'


const Nav = () => {
    const [carts, setCarts] = useContext(CartContext);
    const [open, setOpen] = useState(false);
    return (
        <div className='mainNav'>
            <div className='nav'>
                <h3>Bamzz cart</h3>
                <div onClick={() => setOpen(!open)} className='carts'>
                    <CartIcon width="30" height="30" />
                    <p>{carts.length}</p>
                </div>
            </div>
            <div className='myCarts'>
            <div className='scroll'>
            {open === true && <CartList />}
            </div>
            </div>
        </div>
    )
}

export default Nav
