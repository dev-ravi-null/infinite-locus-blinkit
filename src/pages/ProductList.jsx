import React from 'react'
import { products } from '../data'
import ProductCard from '../components/ProductCard'
const ProductList = () => {
    return (
        <div style={{ padding: "30px", display: "flex", gap: '100px' }}>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    )
}

export default ProductList