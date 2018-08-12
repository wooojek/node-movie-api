const expect = require('expect');
const request = require('supertest');

const { getMovieData } = require('../utils/utils');
const { app } = require('../index');
const { Movie } = require('../models/movie');

before((done) => {
    Movie.remove({}).then(async () => {
        const movieData = await getMovieData('i', 'tt1856101');
        return Movie.create([movieData]);
    }).then((() => done()));
});

describe('POST /movies', () => {
    it('should get additional movie data by id and save it to database', (done) => {
        const id = 'tt3896198';
        request(app)
            .post('/movies')
            .send({
                id
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.imdbID).toBe(id);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Movie.find({
                    imdbID: id
                }).then((movies) => {
                    expect(movies.length).toBe(1);
                    expect(movies[0].imdbID).toBe(id);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should get additional movie data by title and save it to database', (done) => {
        const title = 'Guardians of the Galaxy';
        request(app)
            .post('/movies')
            .send({
                title
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.Title).toBe(title);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Movie.find({
                    Title: title
                }).then((movies) => {
                    expect(movies.length).toBe(1);
                    expect(movies[0].Title).toBe(title);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not get additional data if movie is present in database', (done) => {
        const id = 'tt1856101';
        request(app)
            .post('/movies')
            .send({
                id
            })
            .expect(422)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Movie.find({
                    imdbID: id
                }).then((movies) => {
                    expect(movies.length).toBe(1);
                    expect(movies[0].imdbID).toBe(id);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not get additional data if supplied with wrong body.data', (done) => {
        const ida = 'tt1856101';
        request(app)
            .post('/movies')
            .send({
                ida
            })
            .expect(400)
            .end(done);
    });

    it('should not save movie if there is none', (done) => {
        const title = 'HappyLittleTrees';
        request(app)
            .post('/movies')
            .send({
                title
            })
            .expect(404)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Movie.find({
                    Title: title
                }).then((movies) => {
                    expect(movies.length).toBe(0);
                    done();
                }).catch((e) => done(e));
            });
    })
});

describe('GET /movies', (done) => {
    before((done) => {
        Movie.remove({}).then(async () => {
            const movieData1 = await getMovieData('i', 'tt1856101');
            const movieData2 = await getMovieData('i', 'tt3896198');
            return Movie.create([movieData1, movieData2]);
        }).then((() => done()));
    });

    it('should get all movies saved in database', (done) => {
        request(app)
            .get('/movies')
            .expect(200)
            .expect(((res) => {
                expect(res.body.movies.length).toBe(2);
            }))
            .end(done);
    });
});