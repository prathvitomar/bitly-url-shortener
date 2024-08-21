const express = require('express');
const app = express();
const PORT = 8000;
const {connectToDb} = require('./connection');


connectToDb('mongodb://127.0.0.1:27017/url-shortener')
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log(err))

// mongodb://127.0.0.1:27017/url-shortener

app.listen(PORT, ()=> console.log('Listening on port 8000'))