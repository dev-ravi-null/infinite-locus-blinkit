import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div onClick={() => navigate(`/product/${product.id}`)} style={{
      border: "1px solid #eee"
      , borderRadius: "12px",
      padding: "10px",
      cursor: "pointer",
      fontFamily: "Popins,sans-serif",

    }}>
      <img src='product.image' alt='{product.name}' style={{ width: "100%", height: "120px", objectFit: "contain" }} />
      <p style={{ fontSize: "14px", color: "#333", margin: "" }}>{product.name}</p>
      <p style={{ fontSize: "14px", color: "", margin: "" }}>{product.weight}</p>
      <p style={{ fontSize: "14px", color: "", margin: "" }}>{product.price}</p>
      <button onClick={(e) => {
        e.stopPropagation();
        dispatch(addToCart(product))
      }} style={{
        padding: "6px  12px",
        color: "#fff",
        border: "none",
        borderRadius: '4px',
        fontSize: "13px",
        marginTop: "4px",
        width: "100%"
      }}>
        ADD
      </button>
    </div>
  )
}

export default ProductCard