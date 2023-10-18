const express = require('express');
const app = express();
const route = express.Router();

const {create, post} = require('../controllers/newblog');
const isAuth = require('../public/js/authcheck.js');

route.get('/create', isAuth, create);
route.post('/create', isAuth, post);

module.exports = route;