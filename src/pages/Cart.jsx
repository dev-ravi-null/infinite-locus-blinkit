import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
const Cart = () => {
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }
    const items = useSelector((state) => state.cart.items)
    return (
        <div style={{ padding: "30px" }}>
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>cart is empty</p>
            ) : (
                <ul>
                    {items.map((item, idx) => (
                        <li key={idx}>{item.name}- ${item.price} <img style={{ width: "5%", height: "5%" }} src={item.image} alt="" />
                            <button onClick={() => handleRemove(item.id)}>Delete</button></li>

                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart