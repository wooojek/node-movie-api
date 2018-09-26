const express = require('express');
const router = express.Router();
const Movies = require('../handlers/movies');

router.use(function timeLog(req, res, next) {
    console.log('/movies, Time: ', Date.now());
    next();
});

/**
 * 
 * @api {post} /movies add movie to database
 * @apiName Add
 * @apiGroup Movies
 * @apiVersion  0.0.1
 * @apiDescription Fetch movie from omdb api by id or title and add it to the database
 * 
 * @apiParam  {String} id OMDB movie id
 * @apiParam  {String} title Movie title
 * 
 * @apiSuccess (200) {String} id OMDB movie id
 * @apiSuccess (200) {String} title OMDB movie title
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *     "id": "tt3896198"
 * }
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *     "title": "Guardians of the Galaxy"
 * }
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "imdbID": "tt3896198"
 * }
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "Title": "Guardians of the Galaxy"
 * }
 * 
 * 
 */
router.post('/', Movies.post);

/**
 * 
 * @api {get} /movies Fetch all movies from database
 * @apiName GetAll
 * @apiGroup Movies
 * @apiVersion  0.0.1
 * 
 * 
 * @apiSuccess (200) {Object[]} movies Saved movies list
 * @apiSuccess (200) {Object[]} movies.Ratings Ratings for movie
 * @apiSuccess (200) {String} movies.Ratings.Source Rating source
 * @apiSuccess (200) {String} movies.Ratings.Value Rating value
 * @apiSuccess (200) {String} movies._id database id
 * @apiSuccess (200) {String} movies.Title Title
 * @apiSuccess (200) {String} movies.Year Year
 * @apiSuccess (200) {String} movies.Rated Rating
 * @apiSuccess (200) {String} movies.Released Release date
 * @apiSuccess (200) {String} movies.Runtime Runtime
 * @apiSuccess (200) {String} movies.Genre Genre
 * @apiSuccess (200) {String} movies.Director Director
 * @apiSuccess (200) {String} movies.Writer Writer
 * @apiSuccess (200) {String} movies.Actors Actors
 * @apiSuccess (200) {String} movies.Plot Plot
 * @apiSuccess (200) {String} movies.Language Language of the movie
 * @apiSuccess (200) {String} movies.Country Countries appearing in the movie
 * @apiSuccess (200) {String} movies.Awards Awards
 * @apiSuccess (200) {String} movies.Poster Poster
 * @apiSuccess (200) {String} movies.Metascore Metascore
 * @apiSuccess (200) {String} movies.imdbRating imdbRating
 * @apiSuccess (200) {String} movies.imdbVotes imdbVotes
 * @apiSuccess (200) {String} movies.imdbID imdbID
 * @apiSuccess (200) {String} movies.Type Type
 * @apiSuccess (200) {String} movies.DVD DVD premiere
 * @apiSuccess (200) {String} movies.BoxOffice Box office
 * @apiSuccess (200) {String} movies.Production Production
 * @apiSuccess (200) {String} movies.Website Website
 * @apiSuccess (200) {Number} movies.__v Mongo model version
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *    "movies": [
 *       {
 *          "Ratings": [
 *               {
 *                   "Source": "Internet Movie Database",
 *                   "Value": "8.1/10"
 *               },
 *               {
 *                   "Source": "Rotten Tomatoes",
 *                   "Value": "87%"
 *               },
 *               {
 *                   "Source": "Metacritic",
 *                   "Value": "81/100"
 *               }
 *           ],
 *           "_id": "5babc2d5d6731c09d58d3d08",
 *           "Title": "Blade Runner 2049",
 *           "Year": "2017",
 *           "Rated": "R",
 *           "Released": "06 Oct 2017",
 *           "Runtime": "164 min",
 *           "Genre": "Drama, Mystery, Sci-Fi",
 *           "Director": "Denis Villeneuve",
 *           "Writer": "Hampton Fancher (screenplay by), Michael Green (screenplay by), Hampton Fancher (story by), Philip K. Dick (based on characters from the novel \"Do Androids Dream of Electric Sheep?\" by)",
 *           "Actors": "Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold",
 *           "Plot": "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
 *           "Language": "English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish",
 *           "Country": "USA, UK, Hungary, Canada",
 *           "Awards": "Won 2 Oscars. Another 81 wins & 131 nominations.",
 *           "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
 *           "Metascore": "81",
 *           "imdbRating": "8.1",
 *           "imdbVotes": "324,811",
 *           "imdbID": "tt1856101",
 *           "Type": "movie",
 *           "DVD": "16 Jan 2018",
 *           "BoxOffice": "$91,800,042",
 *           "Production": "Warner Bros. Pictures",
 *           "Website": "http://bladerunnermovie.com",
 *           "__v": 0
 *       }
 *   ]
 * }
 * 
 * 
 */
router.get('/', Movies.get);

module.exports = router;
