const https = require('https');
const fs = require('fs');

https.createServer({
    key: fs.readFileSync('./key.pem', 'utf8'),
      cert: fs.readFileSync('./server.crt', 'utf8')
}, (req, res) => {
    res.writeHead(200);
    res.end('Hello from Node!\n');
}).listen(4430);
console.log("Server listening on https://localhost:4430/");