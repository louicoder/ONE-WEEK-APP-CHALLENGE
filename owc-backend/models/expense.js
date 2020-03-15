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
        default: Date.now
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    currency: {
        type: String,
        required: true,
    },
    supplier: {
        name: String,
        address: String,
        phone:String
    },
    comments: {
        type: String,
        required: false,
        trim: true
    },
    remoteID: string,
    devices: [
        {
            device: {
                name: String,
                model: String,
                serial: String,
                date: Date.now
            }
        }
    ]
})

module.exports =  mongoose.model('expense', expenseSchema)