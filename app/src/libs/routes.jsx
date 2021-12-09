import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import RegistrPage from '../pages/RegistrPage/RegistrPage'
import AuthPage from '../pages/AuthPage/AuthPage'


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

            <Route path="/registr" exact >
                <RegistrPage />
            </Route>
            <Route path="/auth" exact >
                <AuthPage />
            </Route>

            <Route path="/shopping-cart" exact component={ShoppingCart} />
            <Route path="/product/:id" component={ProductsPage} />
        </Switch>
    )
}

