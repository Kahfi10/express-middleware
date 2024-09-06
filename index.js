const express = require('express');
const app = express();

morgan = require('morgan');

// app.use(morgan('dev'));

app.use((req, res, next) => {
    req.timeRequest = Date.now();
    console.log(req.method, req.url);
    next();
})

app.use('/halaman', (req, res, next) => {
    res.send('Ini adalah halaman');
    next();
})

app.get('/hello', (res, req) => {
    console.log(req.timeRequest);
    req.send('Hello Kahfi');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})