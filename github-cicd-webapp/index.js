/*const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, GitHub CI/CD World!'));

app.listen(port, () => console.log(`Server running on port ${port}`));

*/
// index.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;
//const port = process.env.PORT; //render

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Github CI/CD World! --- main - Test4 - Auto deploy: After CI checks pass option - 2/16 - 2');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

