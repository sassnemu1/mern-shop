import React from 'react'

import './ProductInfoButtonBuy'

const ProductInfoButtonBuy = products => {
    const product = products.product

    const test = () => {
        console.log(product)
    }

    return (
        <div>
            <button onClick={test}>
                Купить
            </button>
        </div>
    )
}

export default ProductInfoButtonBuy
