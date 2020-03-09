const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Oooops!!')
})

app.listen(3000, () => {
  console.log('One week challenge server is running on port 3000');
});
