require ('dotenv').config();
const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const mongosession = require('connect-mongodb-session')(session)
const morgan = require('morgan');

const connectDB = require('./database/db');


const app = express() 
connectDB();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use((express.static('public')))


const store = new mongosession({
    uri: process.env.DB,
    collection: "sessions",
});

app.use(
    session({
        key: 'uid',
        secret: 'scrt',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000 * 60 * 12,
            
        },
        store: store,
    })
);


const isAuth = (req,res,next) => {
    if (req.session.isAuth) {
        next()
    }
    else {
        res.redirect('login');
    }
}



app.set('view engine','ejs');
app.set('views','views'); 


app.use(express.json()) 

const users = require('./routes/auth.js');
const land = require('./routes/landing.js');
const navigate = require('./routes/navigate.js');
const newblog = require('./routes/newblog.js');
const blogcrud = require('./routes/blogcrud.js');
const interact = require('./routes/interactions.js');

app.use('/',users);
app.use('/',land);
app.use('/',navigate);
app.use('/',newblog);
app.use('/',blogcrud);
app.use('/',interact);


app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if (err) {
            throw err;
        }
        res.redirect('/')
    });
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
{   
    console.log(`listening on ${PORT}`);
});