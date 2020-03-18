const express = require('express')
const Expense = require('../models/expense')
const auth = require('../middleware/auth')

const router = express.Router()

/*
@endpoint: /api/v1/expenses
@method: post
@Authorization: Bear token
@return: Saved Expense
*/

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

/*
@endpoint: /api/v1/expnses
@method: get
@Authorization: Bear token
@return: List of users expenses
*/

router.get('/api/v1/expenses', auth, async function (req, res) {
    try {

        const { _id } = req.user

        Expense.find({ user: _id }).then(expenses => res.json(expenses))
        
    } catch (error) {
        res.status(400).send(error)
    }
})

/*
@endpoint: /api/v1/expenses
@url param: id
@method: get
@Authorization: Bear token
@return: Details of an expense
*/

router.get('/api/v1/expenses/:id', auth, async (req, res) => {

    try {

        const { _id } = req.user

        Expense.findOne({ user: _id, _id: req.params.id }).then(expense => res.json(expense))
        
    } catch (error) {
        res.status(400).send(error)
    }
})

/*
@endpoint: /api/v1/expenses
@url param: id
@method: put
@Authorization: Bear token
@return: Updated expense
*/

router.put('/api/v1/expenses/:id', auth, async (req, res) => {
    try {

        const { _id } = req.user
        let { title, amount, supplier, comments, lastUpdatedAt } = req.body

        let expense

        await Expense.findOne({ user: _id, _id: req.params.id }).then(doc => {
            
            if (!doc) {
                res.status(400).send({ message: "Resource Not Found" })
                return
            }

            expense = doc

        })

        if (expense) {

            title = title ? title : expense.title
            amount = amount ? amount : expense.amount
            comments = comments ? comments : expense.comments
            lastUpdatedAt = lastUpdatedAt ? lastUpdatedAt : expense.lastUpdatedAt

            const supplierName = supplier.name ? supplier.name : expense.supplier.name
            const supplierPhone = supplier.phone ? supplier.phone : expense.supplier.phone
            const supplierAddress = supplier.address ? supplier.address : expense.supplier.address

            await Expense.findOneAndUpdate({ user: _id, _id: req.params.id }, {
                title,
                amount,
                supplier: {
                    name: supplierName,
                    phone: supplierPhone,
                    address: supplierAddress
                }
                ,
                comments
            },
            {
                new: true,
                strict: false
            },
            (error, doc) => {
                (error) ? res.status(400).send(error) : res.json(doc)
            })

        } else {
            res.status(400).send({ message: "Resource Not Found" })
        }
    } catch (error) {

        res.status(400).send(error)
    }

})

/*
@endpoint: /api/v1/expenses
@url param: id
@method: delete
@Authorization: Bear token
@return: Count of deleted expenses
*/

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