const express = require('express')

const db = require('../models/models.js')

const router = express.Router();

//Get ALL stories
router.get('/stories', (req, res) => {
    db.getAllStories()
    .then(stories => {
        res.status(200).json(stories)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//Get stories by ID
router.get('/stories/:id', (req, res) => {
    const id = req.params.id;
    db.getStoriesByID(id)
    .then(story => {
        res.status(200).json(story)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//POST -- 
router.post('/stories', (req, res) => {
    const body = req.body;
    db.addStories(body)
    .then(story => {
        res.status(200).json(story)
    })
    .catch(ress => {
        res.status(500).json({error: "POST ERROR: You are not getting story data back"})
    })
})

//DEL -- 
router.delete('/stories/:id', (req, res) => {
    const id = req.params.id;
    const {description, notes} = req.body;
    db.removeStories(id)
    .then(story => {
        res.status(200).json(story)
    })
    .catch(ress => {
        res.status(500).json({error: "DELETE ERROR: You are not getting story data back"})
    })
})

//Update -- WORKS
router.put('/stories/:id', (req, res) => {
    const id = req.params.id;
    //const {description, notes} = req.body;
    const body = req.body;
    db.updateStroies(id, body)
    .then(story => {
        res.status(200).json(story);
      })
      .catch(err => {
        res.status(500).json({ error: "You are not getting story data back" });
      });
})



module.exports = router;