const express = require('express');
const app = express();

morgan = require('morgan');

// app.use(morgan('dev'));

app.use((req, res, next) => {
    // req.timeRequest = Date.now();
    console.log(req.method, req.url);
    next();
})

const auth = ('/', (req, res, next) => {
    const { password } = req.query;
    if (password === 'kahfi') {
        next();
    } 
    throw new Error('Password is incorrect');
})

app.get('/',(res, req) => {
    req.send('Home Page');
})

app.get('/hello', (res, req) => {
    console.log(req.timeRequest);
    req.send('Hello Kahfi');
})

app.get('/admin', auth, (res, req) => {
    req.send('Admin Page');
})

app.use((req, res) => {
    res.status(404).send('404 Not Found');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})