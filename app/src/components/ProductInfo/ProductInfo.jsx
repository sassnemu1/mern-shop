import React from 'react'

import ProductInfoButtonBuy from '../ProductInfoButtonBuy/ProductInfoButtonBuy'

import './ProductInfo.css'

const ProductInfo = ({ information, loading }) => {
    return (
        <>
            {loading 
                ? <p>loading...</p>
                : (
                    <div className="product-info__wrapper">
                        <div className="product-info__images_container">
                            <img 
                                src={information.imgURL} 
                                alt={information.name}
                                className="product-info__images"
                            />
                        </div>
                        <div className="product-info__container">
                            <span className="product-info__text product-info__name">
                                {information.name}
                            </span>
                            <h2 className="product-info__text product-info__price">
                                {information.price} р.
                            </h2>
                            <span className="product-info__text product-info__brend">
                                {information.brend}
                            </span>
                            
                            {/* Кнопка Купить */}
                            <ProductInfoButtonBuy product={information} />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ProductInfo