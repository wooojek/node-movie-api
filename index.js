const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Comment } = require('./models/comment');

const app = express();

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
    const comment = new Comment({
        text: req.body.text,
        author: req.body.author
    });

    comment.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})

app.listen(3000, () => {
    console.log('started on port 3000');
});
