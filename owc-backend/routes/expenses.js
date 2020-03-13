const express = require('express')
const Expense = require('../models/expense')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('api/v1/expenses', auth, async function (req, res) {
    try {

        const { _id } = req.user

        Expense.find({ user: _id }).limit(1)
            .then(docs => {
                res.json(docs)
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('api/v1/expenses', auth, async function(req, res){

    try {
        const { _id } = req.user
        
        req.body.user = _id

        const expense = new Expense(req.body)

        await expense.save()

        res.status(201).send({ expense })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('api/v1/expense/:id', auth, async (req, res) => {
    try {

        const { _id } = req.user

        Expense.findOne({ user: _id, _id: parseInt(req.params.id) })
            .then(docs => {
                res.json(docs)
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/expense/:id', auth, async (req, res) => {

})



module.exports = router