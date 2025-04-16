import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
const Navbar = () => {
  const cartCount = useSelector((state) => state.cart)
  const [state, setState] = useState(cartCount)
  // console.log(cartCount)
  return (
    <>
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 40px", background: "#fff", boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
        position: "sticky", top: 0, zIndex: 10
      }}>
        <Link to="/" style={{ textDecoration: "none", fontSize: "24px", fontWeight: "bold", color: "#60b246" }}>
          Blinkit
        </Link>
        <div>
          <Link to="/cart" style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "#000" }}>
            Cart
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar