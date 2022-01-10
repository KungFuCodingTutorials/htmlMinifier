const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

fs.readFile(__dirname+'/index.html','utf-8', function(err,data){
    const server = http.createServer((req,res)=>{
        firstStep = data.replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'');
        finalString = firstStep.replace(/\>\s*\</g,'><');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(finalString);


    })

    server.listen(port,hostname, function(){
        console.log('Server running on port: '+port);
    })
})
