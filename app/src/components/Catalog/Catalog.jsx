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
                        <Link to={`/catalog/${_id}`} key={_id}>
                            <ProductsItem 
                                    _id={_id}
                                    name={name} 
                                    brend={brend}
                                    price={price} 
                                    imgURL={imgURL}
                                    //urlName={ item.urlName }
                                />
                        </Link>
                    ) 
                }
            </ul>
        </>
    )
}

export default Catalog