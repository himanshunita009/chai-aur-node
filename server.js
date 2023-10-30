const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type' , 'text/html');
    res.write('<head><title>Node JS</title><link rel="stylesheet" href="#"></head>')
    res.write('<body> <h1> Himanshu Seth </h1></body>');
    res.end();
});

server.listen(3000,'localhost',() => {
    console.log('server is listening at port no 3000');
});

