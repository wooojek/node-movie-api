const express = require('express');
const router = express.Router();

const Comment = require('../handlers/comments');

router.use(function timeLog(req, res, next) {
    console.log('/comments, Time: ', Date.now());
    next();
});

router.post('/', Comment.post);
router.get('/', Comment.get);

module.exports = router;