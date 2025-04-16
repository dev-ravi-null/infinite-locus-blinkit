import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length)
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", fontSize: "24px", fontWeight: "bold", color: "#60b246" }}>
          Blinkit
        </Link>
        <div>
          <Link to="/cart" style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "#000" }}>
            Cart {{ cartCount }}
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar