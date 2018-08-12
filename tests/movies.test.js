const expect = require('expect');
const request = require('supertest');

const { getMovieData } = require('../utils/utils');
const { app } = require('../index');
const { Movie } = require('../models/movie');

const movies = [{
    text: '1st test comment',
    author: '1st test author'
}, {
    text: '2nd test comment',
    author: '2nd test author'
}];

beforeEach((done) => {
    Movie.remove({}).then(() => {
        return await getMovieData('i', 'tt3896198');
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
            .end(done);
    });
});