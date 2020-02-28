'use strict'
const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');


app.listen(5555, () => {
    console.log('Server running on 5555');
});

app.use(express.static('public'));


const rootController = require('./routes/index');

app.use('/', rootController);