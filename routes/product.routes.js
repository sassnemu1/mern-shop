const { Router } = require('express')
const router = Router()
const cards = require('../schema/productsSchema')

router.get('/:id', (req, res) => {
    const id = req.params.id
    cards.find({ _id: id }, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

module.exports = router