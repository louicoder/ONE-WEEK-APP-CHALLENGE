const express = require('express')
require('./db/db')
const userRouter = require('./routes/users')
const expenseRouter = require('./routes/expenses')
const PORT = process.env.PORT || 4000

const app = express();

app.use(express.json())
app.use(userRouter)
app.use(expenseRouter)

app.get('/', (req, res) => {
  res.send('Oooops!!')
})

app.listen(PORT, () => {
  console.log(`One week challenge server is running on port ${PORT}`)
});
