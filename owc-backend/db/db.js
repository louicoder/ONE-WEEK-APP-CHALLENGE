const mongoose = require('mongoose')
require('dotenv').config()

//'mongodb+srv://owc:KsSlsCy7uptG2FZT@cluster0-vlond.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})