const expect = require('expect');
const request = require('supertest');

const { app } = require('../index');
const { Comment } = require('../models/comment');

const comments = [{
    text: '1st test comment',
    author: '1st test author'
}, {
    text: '2nd test comment',
    author: '2nd test author'
}];

beforeEach((done) => {
    Comment.remove({}).then(() => {
        return Comment.insertMany(comments);
    }).then((() => done()));
});

describe('POST /comments', () => {
    it('should create a new comment', (done) => {
        const text = 'Test comment';
        const author = 'Test author';

        request(app)
            .post('/comments')
            .send({
                text,
                author
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
                expect(res.body.author).toBe(author);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Comment.find({text}).then((comments) => {
                    console.log(comments)
                    expect(comments.length).toBe(1);
                    expect(comments[0].text).toBe(text);
                    expect(comments[0].author).toBe(author);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create comment with invalid body data', (done) => {
        request(app)
            .post('/comments')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Comment.find().then((comments) => {
                    expect(comments.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('GET /comments', () => {
    it('should get all comments', (done) => {
        request(app)
            .get('/comments')
            .expect(200)
            .expect(((res) => {
                expect(res.body.comments.length).toBe(2);
            }))
            .end(done);
    });
});