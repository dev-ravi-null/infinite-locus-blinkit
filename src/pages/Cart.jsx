import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const items = useSelector((state) => state.cart(items))
    return (
        <div style={{ padding: "30px" }}>
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>cart is empty</p>
            ) : (
                <ul>
                    {items.map((item, idx) => (
                        <li key={idx}>{item.name}- ${item.price}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart