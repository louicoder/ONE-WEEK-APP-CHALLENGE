const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = express.Router()

router.post('/users', async function(req, res) {
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

router.get('/users/profile', auth, async (req, res) => {

    res.send(req.user)
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter( token => token.token != req.token)
        await req.user.save()
        res.send()

    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/logout-all', auth, async (req, res) => {
    try {
        req.user.tokens.splice(0, token => req.user.tokens.length)
        await req.user.save()
        res.send()

    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/users/:id', auth, async (req, res) => {

})

router.delete('/users/delete/:id', auth, async (req, res) => {

})

module.exports = router