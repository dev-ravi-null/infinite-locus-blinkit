import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../data'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const dispatch = useDispatch();
    if (!product) return <div>Product Not Found</div>
    return (
        <div style={{ padding: "40px", display: "flex", gap: "40px" }}>
            <img src={product.image} alt={product.name} style={{ width: "240px" }} />
            <p >{product.name}</p>
            <p >{product.weight}</p>
            <p >{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))} style={{
                padding: '10px 20px',
                borderRadius: "5px",
                border: 'none',
                color: "#fff",
                backgroundColor: "#60b246"
            }}>Add To Cart</button>
        </div>
    )
}

export default ProductDetails