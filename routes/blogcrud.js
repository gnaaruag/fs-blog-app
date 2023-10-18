const express = require('express');
const app = express();
const route = express.Router();
const isAuth = require('../public/js/authcheck.js');

const {requestUpdate, handleUpdate, deletePost, viewPost } = require('../controllers/blogcrud.js');

route.get('/update/:bid', isAuth, requestUpdate);
route.post('/handle-update/:bid', isAuth, handleUpdate);
route.get('/view/:bid', viewPost);
route.get('/delete/:bid', isAuth, deletePost);

module.exports = route;