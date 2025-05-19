const fs = require('fs');
const http = require('http');
const path = require('path')
const url = require('url');
    const server = http.createServer((req,res)=>{

        const pathname = url.parse(req.url).pathname;
        const PathExt = path.extname(pathname);
        const CheckCode = pathname.slice(0,5);

        
            if(CheckCode === "iframe"){
               const iframeNum = pathname.replace(PathExt,"").replace('iframe','').replace('[','').replace(']','')
               res.end(iframeNum);


            }
        
        

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            
            res.end('success!!!');
    

        
    })

 
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});