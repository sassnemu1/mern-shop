import React from 'react'

import './ProductsItem.css'

const ProductsItem = ({ imgURL, name, brend, price }) => {
    return (
            <li className="products-item">
                    <img 
                        className="products-image" 
                        src={imgURL} 
                        alt={name} 
                    />     
                    <span className="products-name">{name}</span>
                    <span className="products-brend">{brend}</span>
                    <span className="products-price">{price} р.</span>
            </li>
    )
}

export default ProductsItem