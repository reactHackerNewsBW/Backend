//basic above

const server = require('./server.js');

const PORT = process.env.PORT || 5200;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
