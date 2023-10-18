const express = require('express');
const app = express();
const route = express.Router();
const isAuth = require('../public/js/authcheck.js');

const {handleLike, handleComment} = require('../controllers/interactions.js');

route.post('/like/:bid', isAuth, handleLike);
route.post('/comment/:bid', isAuth, handleComment);


module.exports = route;