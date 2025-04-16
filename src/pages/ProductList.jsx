import React from 'react'
import { products } from '../components/ProductCard'
import ProductCard from '../components/ProductCard'
const ProductList = () => {
    return (
        <div style={{ padding: "30px", display: "grid", gap: '20px', gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))`" }}>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    )
}

export default ProductList