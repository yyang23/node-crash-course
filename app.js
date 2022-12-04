const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

// mongoose ans mongo sandbox routes
// app.get('/add-blog', (req, res) => {        //  '/add-blog' url browser
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('6386715d8a7c3ccb0fbba750')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// belowe code use without 'morgan'
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');    
//     next();
// });

// routes
app.get('/', (req, res) => {
    res.redirect('blogs');
});

app.get('/about', (req, res) => {    
    res.render('about', {title: 'About'});
});

// tutorial 7
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })

});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    //console.log(id);
    Blog.findById(id)
        .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
        console.log(err);
        });
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });

// 404 page  This must go at the bottom over here
app.use((req, res) => {
    //res.sendFile('./views/404.html', {root: __dirname});
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
});
