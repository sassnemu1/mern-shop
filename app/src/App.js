import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './libs/routes'

import Navbar from './components/Navbar/Navbar'
import ProductNavbar from './components/ProductNavbar/ProductNavbar'

import './App.css'

const App = () => {
    const routes = useRoutes()

    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <ProductNavbar />
                { routes }
            </div>
        </Router>
    )
}

export default App