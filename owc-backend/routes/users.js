const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/users', async function(req, res){

    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async function(req, res){
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router