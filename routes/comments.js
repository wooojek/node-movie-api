const express = require('express');
const router = express.Router();

const { mongoose } = require('../db/mongoose');
const { Comment } = require('../models/comment');

router.use(function timeLog(req, res, next) {
    console.log('POST /comments, Time: ', Date.now());
    next();
});

router.post('/', (req, res) => {
    const comment = new Comment({
        text: req.body.text,
        author: req.body.author
    });

    comment.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

module.exports = router;