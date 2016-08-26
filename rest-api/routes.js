'use strict';

var express = require('express');
var router = express.Router();

//GET /questions
//Return all the questions
router.get('/', function(req, res) {
  res.json({
    response: "You sent me a GET request"
  });
});

//POST /questions
//Route for creating questions
router.post('/', function(req, res) {
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

//GET /questions/:id
//Return a specific question
router.get('/:qid', function(req, res) {
  res.json({
    response: "You sent me a GET request for ID" + req.params.qid
  });
});

//POST /questions/:id/answers
//Route for creating an answer
router.post('/:qid/answers', function(req, res) {
  res.json({
    response: "You sent me a POST request to /answers",
    questionId: req.params.qid,
    body: req.body
  });
});

//PUT /questions/:id/answers/:aid
//Edit a specific an answer
router.put('/:qid/answers/:aid', function(req, res) {
  res.json({
    response: "You sent me a PUT request to /answers/" + req.params.aid,
    questionId: req.params.qid,
    answerId: req.params.aid
  });
});

//DELETE /questions/:id/answers/:aid
//Delete a specific an answer
router.delete('/:qid/answers/:aid', function(req, res) {
  res.json({
    response: "You sent me a DELETE request to /answers/" + req.params.aid,
    questionId: req.params.qid,
    answerId: req.params.aid
  });
});

//POST /questions/:id/answers/:aid/vote-up
//POST /questions/:id/answers/:aid/vote-down
//Vote on a specific an answer
router.post('/:qid/answers/:aid/vote-:dir', function(req, res, next) {
  if(req.params.dir.search(/^(up|down)$/) === -1) {
    var err = new Error('The page you were looking for was not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
}, function(req, res) {
  res.json({
    response: "You sent me a POST request to /vote-" + req.params.dir,
    questionId: req.params.qid,
    answerId: req.params.aid,
    vote: req.params.dir
  });
});





module.exports = router;
