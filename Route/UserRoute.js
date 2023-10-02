const express = require('express');
const {home,register,welc} = require('../Controllers/userController')


const app = express.Router();

app.get('/',welc);
app.get('/signup',home)
app.post('/signup',register)


module.exports = app