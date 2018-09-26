const express = require('express');
const router = express.Router();
const Movies = require('../handlers/movies');

router.use(function timeLog(req, res, next) {
    console.log('/movies, Time: ', Date.now());
    next();
});

router.post('/', Movies.post);
router.get('/', Movies.get);

module.exports = router;
