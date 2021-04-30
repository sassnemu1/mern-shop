import React from 'react'
import { Link } from 'react-router-dom'

import ProductsItem from '../ProductsItem/ProductsItem'
import './Catalog.css'

const Catalog = ({ loading, catalog }) => {
    return(
        <>
            <ul className="catalog-container">
                {loading 
                    ? <p>loading...</p>
                    : catalog.map(({ _id, name, brend, price, imgURL }) => 
                        <Link to={`/product/${_id}`} key={_id}>
                            <ProductsItem 
                                name={name} 
                                brend={brend}
                                price={price} 
                                imgURL={imgURL}
                            />
                        </Link>
                    )
                }
            </ul>
        </>
    )
}

export default Catalog