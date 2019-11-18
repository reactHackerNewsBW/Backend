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



module.exports = router;