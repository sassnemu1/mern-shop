import React, { useState, useEffect } from 'react'

import { PRODUCT_URL } from '../../constants/catalogURL'
import { getCatalogServer } from '../../libs/getUrlServer'

import ProductInfo from '../../components/ProductInfo/ProductInfo'
import './ProductsPage.css'

const ProductsPage = ({ match }) => {
    const [productInfo, setProductInfo] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            const id = match.params.id
            const result = await getCatalogServer(`${PRODUCT_URL + id}/`)
            
            if (result) {
                setProductInfo([ result[0] ])
                setLoading(false)
                setError(false)
            } else {
                setError(true)
            }
        })()
    }, [match.params.id])

    return (
        error 
        ? <h2>error</h2>
        : (
            <div className="products-page">
                {productInfo.map((information) => (
                    information && (
                        <ProductInfo 
                            key={information._id}
                            information={information}
                            loading={loading}
                        />
                    )
                ))}
            </div>
        )
    )
}

export default ProductsPage