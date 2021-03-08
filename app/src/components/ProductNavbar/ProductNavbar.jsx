import React from 'react'
import { NavLink } from 'react-router-dom'

import { CardActionArea } from '@material-ui/core'
import './ProductNavbar.css'

const ProductNavbar = () => {
    return (
        <div className="product-navbar">
            <div className="product-navbar__section">
                <ul className="product-navbar__menu">
                    <NavLink to="/catalog/new" activeClassName="product-navbar__menu_itemActive">
                        <CardActionArea>
                            <li> Новинки </li>
                        </CardActionArea>
                    </NavLink>

                    <NavLink to="/catalog/men"activeClassName="product-navbar__menu_itemActive"> 
                        <CardActionArea> 
                            <li> Мужское </li>
                        </CardActionArea> 
                    </NavLink>
               
                    <NavLink to="/catalog/women" activeClassName="product-navbar__menu_itemActive">
                        <CardActionArea>
                            <li> Женское </li>
                        </CardActionArea>
                    </NavLink>

                    <NavLink to="/catalog/sale" activeClassName="product-navbar__menu_itemActive">
                        <CardActionArea>
                            <li> SALE </li>
                        </CardActionArea>
                    </NavLink>

                    <NavLink to="/catalog/brend" activeClassName="product-navbar__menu_itemActive">
                        <CardActionArea>
                            <li> Бренды </li>
                        </CardActionArea>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default ProductNavbar 