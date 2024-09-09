const express = require('express');
const app = express();

morgan = require('morgan');

const ErrorHandler = require('./ErrorHandler');

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
    res.status(401);
    throw new ErrorHandler('Password is incorrect', 401);
})

app.get('/',(res, req) => {
    req.send('Home Page');
})

app.get('/hello', (res, req) => {
    console.log(req.timeRequest);
    req.send('Hello Kahfi');
})

app.get('/error', (res, req) => {
    bird.Fly()
})

app.get('/admin', auth, (res, req) => {
    req.send('Admin Page');
})

app.get('/general/error', (req, res) => {
    throw new ErrorHandler();
})

// app.use((err, req, res, next) => {
//     console.log('*******************************ERROR BRO*******************************');
//     next(err)
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something wnet Wrong' } = err;
    res.status(status).send(message);
})

app.use((req, res) => {
    res.status(404).send('404 Not Found');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})