const { Comment } = require('../models/comment');

class Comments {
    static get(req, res) {
        Comment.find({}).then((comments) => {
            res.send({ comments });
        }, (e) => res.status(400).send(e));
    }

    static post(req, res) {
        const comment = new Comment({
            text: req.body.text,
            author: req.body.author
        });

        comment.save().then((doc) => {
            res.send(doc);
        }, (e) => res.status(400).send(e));
    }
}

module.exports = Comments;