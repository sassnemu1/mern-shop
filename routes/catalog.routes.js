const { Router } = require('express')
const { isValidObjectId } = require('mongoose')
const router = Router()
const cards = require('../schema/productsSchema')

router.get('/', (req, res) => {
    cards.find(( err, data ) => {
        if (err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

router.get('/men', (req, res) => {
    cards.find({ gender: "men" }, ( err, data ) => {
        if (err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

router.get('/women', (req, res) => {
    cards.find({ gender: "women" }, ( err, data ) => {
        if (err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

router.get('/new', (req, res) => {
    
})

router.get('/brend', (req, res) => {
    
})

router.get('/sale', (req, res) => {
    
})

module.exports = router