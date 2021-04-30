import React, { useState, useEffect } from 'react'

import { CATALOG_URL } from '../../constants/catalogURL'
import { getCatalogServer } from '../../libs/getUrlServer'

import Catalog from '../../components/Catalog/Catalog'
import './CatalogPage.css'

const CatalogPage = props => {
    const catalogURL = CATALOG_URL + props.name

    const [catalog, setCatalog] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getCatalog = async (url) => {
        const result = await getCatalogServer(url)
        
        if(result) {
            setCatalog(result);
            setLoading(false)
            setError(false)
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        setLoading(true)
        getCatalog(catalogURL)
    }, [catalogURL])

    return (
        <>
            {error 
                ? <h2>Error</h2>
                : (
                    <div className="catalog">
                        <Catalog 
                            loading={loading}
                            catalog={catalog}
                        />
                    </div>
                )
            } 
        </>
    )
}

export default CatalogPage

