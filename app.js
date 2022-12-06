const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();   // create an instance of an Express

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@clusterschool.mxvsbfq.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');     //app.set('views', 'myviews'); give an example 

app.use(express.static('public')); // use express as middleware to contect static file
app.use(express.urlencoded({ extended: true}));  //middleware. without it, cannot find the req.body
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.redirect('blogs');
});

app.get('/about', (req, res) => {    
    res.render('about', {title: 'About'});
});

// blog routes
app.use('/blogs/', blogRoutes);

// 404 page  This must go at the bottom over here
app.use((req, res) => {
    //res.sendFile('./views/404.html', {root: __dirname});
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
});

