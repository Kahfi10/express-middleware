const express = require('express');
const app = express();

morgan = require('morgan');

app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log('First middleware');
    next();
    console.log('First middleware after next');
})
app.use((req, res, next) => {
    console.log('Second middleware');
    next();
})

app.use(() => {
    console.log('hei')
})

app.get('/hello', (res, req) => {
    res.send('Hello Kahfi');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})