'use strict';

const express = require('express');

const router = express.Router();

// a route that gets something specific.
router.get('/posts', (req, res) => {
  const { postId, banana } = req.params;

  res.send(`you have requested post number ${postId}`);
});

// url query --able to get data (filter the array) in a restful way.
router.get('/posts', (req, res) => {
  console.log(req,query);
  res.send(`your search query is {req,query.postId}`);
});

module.exports = router;