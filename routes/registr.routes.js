const { Router } = require('express')
const router = Router()
const User = require('../schema/userSchema')


router.post('/', async (req, res) => {
    try {
        const { name, mail, password } = req.body
        
        const candidat = await User.findOne({mail})

        if (candidat) {
            return res.status(400).json({message: `User with email ${mail} существует` })
        }

        const user = new User({name, mail, password})
        await user.save()
        return res.json({message: "User was create"})
        
    } catch(error) {
        console.log(error)
        res.send({message: "server messsage"})
    }
    
})

module.exports = router
