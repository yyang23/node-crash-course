const http = require('http');

const server = http.createServer((req, res) => {  // req:request; res:response
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})