/*const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, GitHub CI/CD World!'));

app.listen(port, () => console.log(`Server running on port ${port}`));

*/
// index.js
const http = require('http');

const hostname = '0.0.0.0';
//const port = 3000;
const port = process.env.PORT; //render

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Github CI/CD World! - Test2 - render:commit - git: branch2');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

