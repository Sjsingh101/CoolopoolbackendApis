const express = require('express');
const bodyParser = require('body-parser');
var mongoose=require('mongoose');
var authenticate = require('../authenticate');
var Posts=require('../models/posts');

const postRouter = express.Router();
postRouter.use(bodyParser.json());


postRouter.route('/username')
.options(authenticate.verifyUser, (req, res) => { res.sendStatus(200); })
.get(authenticate.verifyUser, (req,res,next) => {
    Posts.find({'authorId': req.user._id})
    .then((post) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(post);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,(req, res, next) => {
    req.body.authorId = req.user._id;
    Posts.create(req.body)
    .then((post)=>{
      console.log('Post created',post);
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(post);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
/*
.put(authenticate.verifyUser,(req, res, next) => {
    Posts.findByUsernameAndUpdate(req.params.username, {
        $set: req.body
    }, { new: true })
    .then((post) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(post);
    }, (err) => next(err))
    .catch((err) => next(err));
})
*/
.delete(authenticate.verifyUser,(req, res, next) => {
    Posts.find({'authorId': req.user._id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
;


postRouter.route('/username/:postid')
.options(authenticate.verifyUser, (req, res) => { res.sendStatus(200); })
.get(authenticate.verifyUser, (req,res,next) => {
    Posts.findById(req.params.postid)
    .then((post) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(post);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /posts/'+ req.params.postid);
})
.put(authenticate.verifyUser,(req, res, next) => {
    Posts.findByIdAndUpdate(req.params.postid, {
        $set: req.body
    }, { new: true })
    .then((post) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(post);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(authenticate.verifyUser,(req, res, next) => {
    Posts.findByIdAndRemove(req.params.postid)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = postRouter;