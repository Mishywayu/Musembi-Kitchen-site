//acquiring our express module
const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();

//set templating engine as Ejs
app.set('view engine', 'ejs');

//serving static file
app.use(express.static('public'));
//body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());

//database url
// const url = 'mongodb+srv://mishykitch:123456789@projectexpress.7gxtzyu.mongodb.net/?retryWrites=true&w=majority';
//connecting application with DB
/**
 * mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Mongo DB connected!")).catch(err => console.log(err));
*/

//import Book model
// const Booktable = require('./models/Booktable');

//Routing
//Route for Home (/)
app.get('/', (req, res) => {
    res.render('Home');
});
//route for about us
app.get('/about', (req, res) => {
    res.render('About');
});
//route for menu
app.get('/menu', (req, res) => {
    res.render('Menu');
}
);
//route for contact us
app.get('/contact', (req, res) => {
    res.render('Contact');
});
//route for book
app.get('/book', (req, res) => {
    res.render('Book');
});
//ROUTE FOR SAVING BOOK TO DB
/**
 * app.post('/book-table', (req, res) => {
    //save the data to the DB
    const Data = new Booktable({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        meal: req.body.meal,
        persons: req.body.persons,
        date: req.body.date
    });

    Data.save().then(() => {
        res.redirect('/');
    }).catch(err => console.log(err));
});
*/

//creating a server
app.listen(3000, () => {
    console.log('Server is running');
});