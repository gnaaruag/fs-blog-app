const express = require('express');
const app = express();
const route = express.Router();

const {admin, read, filter} = require('../controllers/navigate');
const isAuth = require('../public/js/authcheck.js');

route.get('/admin-dashboard', isAuth, admin);
route.get('/read/',isAuth,read);
route.post('/filter', isAuth, filter);

module.exports = route;