import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { IconButton, Badge } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import './Navbar.css'

const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <a href="/">
                            My Shop !
                        </a>
                    </div>
                    <nav className="navbar-menu">
                        <ul>
                            <li>
                                <a href="/" className="navbar-menu__item">
                                    <IconButton>
                                        <HomeIcon style={{ fontSize: 28 }} />
                                    </IconButton>
                                </a>
                            </li>
                            <li>
                                <a href="/shopping-cart" className="navbar-menu__item">
                                    <IconButton>
                                        <Badge badgeContent={1} color="secondary">
                                            <ShoppingCartIcon style={{ fontSize: 28 }} />
                                        </Badge>
                                    </IconButton>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Router>
    )
}

export default Navbar