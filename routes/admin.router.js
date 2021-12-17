const { Router } = require('express')
const router = Router()

const admins = require('../schema/adminsSchema')


router.post('/', async (req, res) => {
    const { login, password } = req.body
    const user = await admins.findOne({login})
    let token = false;

    if (!user) {
        return res.status(404).json({message: "User not found"})
    } 
    if (!password === user.password) {
        return res.status(400).json({message: "Invalid Password"})
    } 
    else {
        token = true
    }

    return res.json({
        token: token,
        admin: {
            id: user._id,
            login: user.login,
        }
    })
})

module.exports = router