import React from 'react'

import HomeImage from '../../assets/header1.jpg'
import './HomePage.css'

const HomePage = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img 
                    src={ HomeImage } 
                    alt="" 
                    className="header__images"
                />
            </div>
        </header>
    )
}

export default HomePage