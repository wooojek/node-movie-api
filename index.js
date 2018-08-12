const express = require('express');
const bodyParser = require('body-parser');

const comments = require('./routes/comments');
const movies = require('./routes/movies');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/comments', comments);
app.use('/movies', movies);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };