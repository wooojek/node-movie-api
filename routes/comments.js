const express = require('express');
const router = express.Router();

const Comment = require('../handlers/comments');

router.use(function timeLog(req, res, next) {
    console.log('/comments, Time: ', Date.now());
    next();
});

/**
 * 
 * @api {post} /comments add comment to the database
 * @apiName Add
 * @apiGroup Comments
 * @apiVersion  0.0.1
 * 
 * 
 * @apiParam  {String} text Comment text
 * @apiParam  {String} author Author name
 * 
 * @apiSuccess (200) {String} text Comment text
 * @apiSuccess (200) {String} author Author name
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *     "text": "Example comment"
 *     "author": "Caulo Pohelo"
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     "text": "Example comment"
 *     "author": "Caulo Pohelo"
 * }
 * 
 * 
 */
router.post('/', Comment.post);

/**
 * 
 * @api {get} /comments Fetch all comments from database
 * @apiName GetComments
 * @apiGroup Comments
 * @apiVersion  0.0.1
 * 
 * 
 * @apiSuccess (200) {Object[]} comments List of all comments
 * @apiSuccess (200) {String} comments._id comment unique id
 * @apiSuccess (200) {String} comments.text comment text
 * @apiSuccess (200) {String} comments.author comment author
 * @apiSuccess (200) {String} comments.createdAt comment creation date
 * @apiSuccess (200) {Number} comments.__v mongo model version
 * 
 * 
 * @apiParamExample  {json} Request-Example:
 * {}
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "comments": [
        {
            "_id": "5babc2d5d6731c09d58d3d0a",
            "text": "1st test comment",
            "author": "1st test author",
            "createdAt": "2018-09-26T17:33:09.779Z",
            "__v": 0
        },
        {
            "_id": "5babc2d5d6731c09d58d3d0b",
            "text": "2nd test comment",
            "author": "2nd test author",
            "createdAt": "2018-09-26T17:33:09.780Z",
            "__v": 0
        }
    ]
 * }
 * 
 * 
 */
router.get('/', Comment.get);

module.exports = router;