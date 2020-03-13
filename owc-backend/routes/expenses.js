const express = require('express')
const Expense = require('../models/expense')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/expenses', auth, async function (req, res) {
})

router.post('/expenses', auth, async function(req, res){

    try {
        const { _id } = req.user
        
        req.body.user = _id

        const expense = new Expense(req.body)

        await expense.save()

        res.status(201).send({expense})
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/expense/:id', auth, async (req, res) => {

})

router.delete('/expense/:id', auth, async (req, res) => {

})



module.exports = router