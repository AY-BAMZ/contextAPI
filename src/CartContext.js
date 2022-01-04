import React, {useState, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = props => {
    const [carts, setCarts] = useState([
        {
            name: "cart one",
            price: "$300",
            id: 23749,
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1605608075/klipartz.com_1_ux9rbh.png'
        },
        {
            name: "cart two",
            price: "$400",
            id: 232314,
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1605608078/klipartz.com_4_dk6dgh.png'
        },
        {
            name: "cart three",
            price: "$500",
            id: 237849,
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1605608072/klipartz.com_2_ge056u.png'
        }
    ])
    return (
        <CartContext.Provider value={[carts, setCarts]}>
            {props.children}
        </CartContext.Provider>
    )
}
