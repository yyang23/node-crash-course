const express = require('express');

// express app
const app = express();   // create an instance of an Express

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page  This must go at the bottom over here
app.use((req, res) => {
    //res.sendFile('./views/404.html', {root: __dirname});
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})
