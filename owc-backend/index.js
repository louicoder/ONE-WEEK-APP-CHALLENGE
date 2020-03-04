const app = require('http');
const server = app.createServer();

server.listen(3000, () => {
  console.log('One week challenge server is running on port 3000');
});
