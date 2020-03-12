const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://owc:KsSlsCy7uptG2FZT@cluster0-vlond.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

