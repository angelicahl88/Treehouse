'use strict';

var express = require('express');
var router = express.Router();
var Question = require('./models').Question;

// Question parameter handler
router.param('qid', function(req, res, next, id) {
  Question.findById(id, function(err, doc) {
    if (err) return next(err);
    if(!doc) {
      err = new Error('The page you were looking for was not found');
      err.status = 404;
      return next(err);
    }
    req.question = doc;
    return next();
  });
});

// Answer paramter handler
router.param('aid', function(req, res, next, id) {
  req.answer = req.question.answers.id(id);
  if(!req.answer) {
    err = new Error('The page you were looking for was not found');
    err.status = 404;
    return next(err);
  }
  return next();
});

//GET /questions
//Return all the questions
router.get('/', function(req, res, next) {
  Question.find({})
    .sort({createdAt: -1})
    .exec(function(err, questions) {
      if (err) return next(err);
      res.json(questions);
    });
});

//POST /questions
//Route for creating questions
router.post('/', function(req, res, next) {
  var question = new Question(req.body);
  question.save(function(err, question) {
    if (err) return next(err);
    res.status(201);
    res.json(question);
  });
});

//GET /questions/:id
//Return a specific question
router.get('/:qid', function(req, res, next) {
  res.json(req.question);
});

//POST /questions/:id/answers
//Route for creating an answer
router.post('/:qid/answers', function(req, res, next) {
  req.question.answers.push(req.body);
  req.question.save(function(err, answer) {
    if (err) return next(err);
    res.status(201);
    res.json(answer);
  });
});

//PUT /questions/:id/answers/:aid
//Edit a specific an answer
router.put('/:qid/answers/:aid', function(req, res, next) {
  req.answer.update(req.body, function(err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

//DELETE /questions/:id/answers/:aid
//Delete a specific an answer
router.delete('/:qid/answers/:aid', function(req, res, next) {
  req.answer.remove(function(err) {
    req.question.save(function(err, question) {
      if (err) return next(err);
      res.json(question);
    });
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
    req.vote = req.params.dir;
    next();
  }
}, function(req, res, next) {
  req.answer.vote(req.vote, function(err, answer) {
    if (err) return next(err);
    res.json(answer)
  });
});





module.exports = router;
