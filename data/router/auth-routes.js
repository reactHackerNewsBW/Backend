const express = require('express')

const db = require('../models/models.js')

const router = express.Router();

////////////////////////////AUTHORIZED ROUTES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

router.get('/stories', (req, res) => {
    db.getAllStoriesAuth()
    .then(stories => {
        res.status(200).json(stories)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//Get stories by ID -- WORKS
router.get('/stories/:id', (req, res) => {
    const id = req.params.id;
    db.getStoriesByIDAuth(id)
    .then(story => {
        res.status(200).json(story)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//POST -- WORKS
router.post('/poststories', (req, res) => {
    const body = req.body;
    db.addStoriesAuth(body)
    .then(story => {
        res.status(200).json(story)
    })
    .catch(ress => {
        res.status(500).json({error: "POST ERROR: You are not getting story data back"})
    })
})

//DEL -- WORKS
router.delete('/deletestories/:id', (req, res) => {
    const id = req.params.id;
    const {description, notes} = req.body;
    db.removeStoriesAuth(id)
    .then(story => {
        res.status(200).json(story)
    })
    .catch(ress => {
        res.status(500).json({error: "DELETE ERROR: You are not getting story data back"})
    })
})

//Update -- WORKS
router.put('/updatestories/:id', (req, res) => {
    const id = req.params.id;
    //const {description, notes} = req.body;
    const body = req.body;
    db.updateStoriesAuth(id, body)
    .then(story => {
        res.status(200).json(story);
      })
      .catch(err => {
        res.status(500).json({ error: "You are not getting story data back" });
      });
})

module.exports = router;