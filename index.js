const express = require('express');
const app = express();

morgan = require('morgan');

app.use(morgan('dev'));

app.use(() => {
    console.log('hei')
})

app.get('/hello', (res, req) => {
    req.send('Hello Kahfi');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})