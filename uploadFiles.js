const http = require('http');
const fs = require('fs');
var formidable = require('formidable'); 
http.createServer((req,res)=>{
    if(req.url = '/fileupload'){
        const form = new formidable.IncomingForm();
        form.parse(req,(err,fields,files)=>{
            console.log('file uploaded');
            res.end();
        });
    }else {
        fs.readFile('./pages/index.html',(err,data)=>{
            if(err){
                res.write('<head><title>Node Js : File Error </title><script>alert("some error happen")</script></head>')
                res.end();
            }
            else 
                res.end(data);
        });
    }
}).listen(3000);
