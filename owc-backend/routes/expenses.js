const express = require('express')
const Expense = require('../models/expense')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/api/v1/expenses', auth, async function (req, res) {
    try {

        const { _id } = req.user

        Expense.find({ user: _id })
            .then(docs => {
                res.json(docs)
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/api/v1/expenses', auth, async function(req, res){

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

router.get('/api/v1/expenses/:id', auth, async (req, res) => {
    try {

        const { _id } = req.user

        Expense.findOne({ user: _id, _id: req.params.id })
            .then(docs => {
                res.json(docs)
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/api/v1/expenses/:id', auth, async (req, res) => {
    try {
        const { _id } = req.user

        const result = await Expense.deleteOne({ user: _id, _id: req.params.id })

        res.status(201).send({ deleted:result.deletedCount })

    } catch (error) {

        res.status(400).send(error)
    }
})



module.exports = router