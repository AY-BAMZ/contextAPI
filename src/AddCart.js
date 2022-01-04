import React, { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import { useCart } from './hooks/useCart';

const AddCart = () => {
    const [product, setProduct] = useState({ image: '', name: '', price: '', id: '' });
    const [carts, setCarts] = useContext(CartContext);
    const { addCart } = useCart();

    const createId = () => Math.floor(Math.random() * 100000000)

    const handleAddToCart = (e) => {
        e.preventDefault();
        addCart(product)
    }

    return (
        <div className='addItems'>
            <form onSubmit={handleAddToCart}>
                <div className='form'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1605608075/klipartz.com_1_ux9rbh.png' alt='' />
                    <h4 name='name' value={product.name} >cart one</h4>
                    <h2 name='price' value={product.price} >$300</h2>
                    <button onClick={() => setProduct({ image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1605608075/klipartz.com_1_ux9rbh.png', name: 'cart one', price: '$300', id: createId() })}>Add To Cart</button>
                </div>
                <div className='form'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1605608078/klipartz.com_4_dk6dgh.png' alt='' />
                    <h4 name='name' value={product.name} >cart one</h4>
                    <h2 name='price' value={product.price} >$400</h2>
                    <button onClick={() => setProduct({ image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1605608078/klipartz.com_4_dk6dgh.png', name: 'cart two', price: '$400', id: createId() })}>Add To Cart</button></div>
                <div className='form'>
                    <img src='https://res.cloudinary.com/dmixz7eur/image/upload/v1605608072/klipartz.com_2_ge056u.png' alt='' />
                    <h4 name='name' value={product.name} >cart three</h4>
                    <h2 name='price' value={product.price} >$500</h2>
                    <button onClick={() => setProduct({ image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1605608072/klipartz.com_2_ge056u.png', name: 'cart two', price: '$500', id: createId() })}>Add To Cart</button></div>
            </form>
        </div>
    )
}

export default AddCart
