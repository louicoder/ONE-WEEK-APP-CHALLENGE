require('dotenv').config()
const mongoose = require('mongoose')
const validator = require('validator')

const expenseSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    lastUpdatedAt: {
        type: Date
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    }
})

/* expenseSchema.pre('save', async function(next){
    const expense = this
    //Probably check for possible duplicates
}) */



const expense = mongoose.model('expense', expenseSchema)

module.exports = expense