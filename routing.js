const http = require('http');
//const fs = require('fs');

// const server = http.createServer((req,res) => {
//     res.setHeader('Content-Type','text/html');
//     let params = './pages/';
//     switch(req.url){
//         case '/':
//             params += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/contact':
//             params += 'contact.html';
//             res.statusCode = 200;
//             break;
//         case '/contact-me':
//             res.statusCode = 301;
//             res.setHeader('Location','/contact');
//             res.end();
//             break;
//         default:
//             res.statusCode = 404;
//             params += '404.html';      
//     }

//     fs.readFile(params,(err,data)=> {
//         if(err){
//             console.log('some error occurs');
//             res.end('<h1> Some error occurs</h1>');
//         }else {
//             res.write(data);
//             res.end();
//         }
//     });
// });
const url = require('url');
http.createServer((req,res) => {
    const q = url.parse(req.url,true);
    console.log('host = ',q.host);
    console.log('pathname = ',q.pathname);
    console.log('query = ',q.search);
    res.write('<h1>Another Server STart Listening at port no 5000');

    res.end();
}).listen(5000,'localhost',() => {
    console.log('port at 5000 start listening');
});
// server.listen(3000,'localhost',() => {
//     console.log('server start listening');
// });