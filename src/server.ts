const https = require('https');
const fs = require('fs');

https.createServer({
    key: fs.readFileSync('./key.pem', 'utf8'),
      cert: fs.readFileSync('./server.crt', 'utf8')
}, (request : any, result: any) => {
    result.writeHead(200);
    const url = request.url;
if (url=== '/about'){
    result.write('about page');
    result.end();

}else

    result.end('Hello from Node!\n');


}).listen(5000);
console.log("Server listening on https://localhost:5000/");