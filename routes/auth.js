const express = require('express');
const app = express();
const route = express.Router();

const {signup, login, onboardUser, verifyLogin} = require("../controllers/auth");

const isAuth = (req,res,next) => {
    if (req.session.isAuth) {
        next()
    }
    else {
        res.redirect('login');
    }
}

route.get('/signup', signup);
route.post('/signup', onboardUser);
route.get('/login', login);
route.post('/login', verifyLogin);
route.get('/test', isAuth, (req,res)=>{
    res.send('session auth implemented');
});

module.exports = route;