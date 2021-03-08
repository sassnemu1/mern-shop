import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
import CatalogPage from '../pages/Catalog/CatalogPage'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import ProductsPage from '../pages/ProductsPage/ProductsPage'


export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact >
                <HomePage />
            </Route>
            
            <Route path="/catalog/men" exact >
                <CatalogPage name="men" />
            </Route>
            <Route path="/catalog/women" exact >
                <CatalogPage name="women" />
            </Route>
            <Route path="/catalog/new" exact >
                <CatalogPage name="new" />
            </Route>
            <Route path="/catalog/sale" exact >
                <CatalogPage name="sale" />
            </Route>
            <Route path="/catalog/brend" exact >
                <CatalogPage name="brend" />
            </Route>

            <Route path="/shopping-cart" exact >
                <ShoppingCart />
            </Route>

            <Route path="/catalog/:id" >
                <ProductsPage />
            </Route>
        </Switch>
    )
}

