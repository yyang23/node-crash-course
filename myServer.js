const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {  // req:request; res:response
    console.log(req.url, req.method);

    // set header content type
    //res.setHeader('Content-type', 'text/plain');
    //res.write('hello, ninjas');  // what content we want to send back to the browser
    
    // res.setHeader('Content-type', 'text/html'); // send back HTML 
    // res.write('<head><link rel="stylesheet" href="#"></head>');   
    // res.write('<p>hello, ninjas</p>');
    // res.write('<p>hello again, ninjas</p>');
    // res.end();  // end the response

    // set header content type
    res.setHeader('Content-type', 'text/html'); // send back HTML

    let path ='./views/';
    switch(req.url) {
        case '/index':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':            
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send a html file
    fs.readFile(path, (err, data) => {
       if(err) {
            console.log(err);
            res.end();
       } else{
            //res.write(data);
            res.end(data);
       } 
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})