const fs = require('fs');
// const http = require('http');

// http.createServer((req,res) => {
//     fs.readFile('./docs/index.html',(err,data) => {
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         if(err){
//             res.write(err.message);
//         }else {
//             res.write(data);
//             console.log(data);
//         }
//         res.end();
//     });
// }).listen(8000);

//reading files 
// fs.readFile()

// fs.readFile('./docs/blog1.txt',(err,data) => {
//     if(err){
//         console.log(err.message);
//         console.log('there is some error here');
//     }else {
        
//         console.log(data);
//     }
// });

// console.log('lst line');

//writing files
// fs.writeFile('./docs/blog3.txt','data',() => {
//     console.log('the file was written');
// });

// fs.writeFile('./docs/blog2.txt','hello again this is node second',() => {
//     console.log('the file was written');
// })

//Append File 
// fs.appendFile('./docs/blog2.txt','\n This is added Text',(err) => {
//     if(err)
//         console.log(err.message);
// });
 

//directories....
// if(!fs.existsSync('./newfolder')){
//     fs.mkdir('./newfolder',(err) => {
//         if(err)
//             console.log(err.message);
//         else 
//             console.log('folder is created');
//     });
// }else {
//     fs.rmdir('./newfolder',(err) => {
//         if(err)
//             console.log(err.message);
//         else 
//             console.log('folder deleted');
//     })
// } 
//delete files 
// if(fs.existsSync('./docs/deleteMe.txt')){
//     fs.unlink('./docs/deleteMe.txt',(err) => {
//         if(err)
//             console.log(err.message);
//         else 
//             console.log('file deleted');
//     }); 
// }else {
//     fs.writeFile('./docs/deleteMe.txt','This is some Text',(err) => {
//         console.log(err);
//     }); 
// }


// Create file using Open

// fs.open('./docs/opnefile.txt','w',(err,file) => {
//     if(err)
//         console.log(err)
// });   

// fs.rename('./docs/openfile.txt','./docs/open2file.txt',(err) => {
//     if(err)
//         console.log(err);
// });