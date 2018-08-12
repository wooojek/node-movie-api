const express = require('express');
const bodyParser = require('body-parser');

const comments = require('./routes/comments');
const movies = require('./routes/movies');

const app = express();

app.use(bodyParser.json());
app.use('/comments', comments);
app.use('/movies', movies);

app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = { app };