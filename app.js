const { fstat } = require('fs');
const http = require('http');
const fs =  require('fs');
const path = require('path');

// Create the server with http variable
const server = http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end("Welcome");


// Give path and response
if (req.url === '/') {
  let filePath =  path.join(__dirname, 'public', 'index.html')
  fs.readFile(filePath, 'utf8', (err, data)=> {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
}
if (req.url === '/about') {
  let filePath =  path.join(__dirname, 'public', 'about.html')
  fs.readFile(filePath, 'utf8', (err, data)=> {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
}
  if (req.url === '/') {
  let filePath =  path.join(__dirname, 'public', 'index.html')
  fs.readFile(filePath, 'utf8', (err, data)=> {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
}
if (req.url === '/contact') {
  let filePath =  path.join(__dirname, 'public', 'contact.html')
  fs.readFile(filePath, 'utf8', (err, data)=> {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
}
if (req.url === '/home') {
  let filePath =  path.join(__dirname, 'public', 'index.html')
  fs.readFile(filePath, 'utf8', (err, data)=> {
    // res.writeHead(200, {'Content-Type': 'text/html'})
    res.writeHead(302 , {
      'Location' : '/' // This is your url which you want
   });
    res.end(data)
  })
}
});

server.listen(5000, '127.0.0.1');

console.log("a server have been created");