import React from 'react'

import './ProductsItem.css'

const ProductsItem = (product) => {
    return (
            <li className="products-item">
                    <img 
                        className="products-image" 
                        src={product.imgURL} 
                        alt={product.name} 
                    />     
                    <span className="products-name">{product.name}</span>
                    <span className="products-brend">{product.brend}</span>
                    <span className="products-price">{product.price} р.</span>
            </li>
    )
}

export default ProductsItem