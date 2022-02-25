const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/employees') {
    console.log(req)
    res.setHeader('Content-Type', 'application/json');
    let employeeData = [
      { id: 121, name: 'hardik', age: 29 },
      { id: 121, name: 'hardik', age: 29 }
    ]
    return res.end(JSON.stringify(employeeData));
  }

  if (url === '/manager') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }

});

server.listen(3000);
console.log('Node.js web server at port 3000 is running..')
