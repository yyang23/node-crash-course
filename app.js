const express = require('express');

// express app
const app = express();   // create an instance of an Express

// register view engine
app.set('view engine', 'ejs');
//app.set('views', 'myviews'); give an example 

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', {root: __dirname}); // tutorial 6
    const blogs =[
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consecteur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consecteur'},
        {title: 'How toi defeat bowser', snippet: 'Lorem ipsum dolor sit amet consecteur'},
    ];
    res.render('index', {title: 'Home', blogs});  // tutorial 7
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

// redirects tutorial 6
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// tutorial 7
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
});

// 404 page  This must go at the bottom over here
app.use((req, res) => {
    //res.sendFile('./views/404.html', {root: __dirname});
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
});
