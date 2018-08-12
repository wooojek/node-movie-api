const express = require('express');
const router = express.Router();

const { getMovieData } = require('../utils/utils');
const { mongoose } = require('../db/mongoose');
const { Movie } = require('../models/movie');

router.use(function timeLog(req, res, next) {
    console.log('/movies, Time: ', Date.now());
    next();
});

router.post('/', async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    let response = undefined;

    try {
        if (id) {
            response = await getMovieData('i', id);
        } else if (title) {
            response = await getMovieData('t', title);
        } else {
            throw new Error('Unable to get movie without id or title');
        }
    } catch (e) {
        res.status(400).send();
        return;
    }

    if (response.Response === 'False') {
        res.status(404).send(response.Error);
        return;
    }

    Movie.find({
        imdbID: response.imdbID
    }).then((movies) => {
        if (!movies.length) {
            const movie = new Movie(response);
            movie.save().then((doc) => {
                res.send(doc);
            }, (e) => res.status(400).send(e));
            return;
        }
        res.status(422).send('Movie already present in database');
    });
});

router.get('/', async (req, res) => {
    Movie.find({}).then((movies) => {
        res.send({ movies });
    }, (e) => res.status(400).send(e));
})

module.exports = router;
