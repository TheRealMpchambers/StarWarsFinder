const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    htmlRoutes = require('./app/routing/htmlRoutes.js'),
    apiRoutes = require('./app/routing/apiRoutes.js'),
    app = express(),
    PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.post('/api/friends', apiRoutes);
app.get('/api/friends', apiRoutes);
app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
