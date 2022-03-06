const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

// Index

router.get('/', (req, res) => {
  Bug.find({}, (error, allBugs) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'found successfully!',
        bugs: allBugs
      })
    }
  })
})

// Delete



// Update



// Create

router.post('/', (req, res) => {
  Bug.create(req.body, (error, createdBug) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('successfully created!');
      res.json({
        message: 'success'
      });
    }
  });
});

// Show

router.get('/:id', (req, res) => {
  Bug.findOne({
    _id: req.params.id
  }, (error, foundBug) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'successfully found',
        bug: foundBug
      });
    }
  });
});

module.exports = router;