//This file puts all routes prefixed with `localhost:3000/guestbook`

//Require routing(so we can do routes) and express(so we can use .ejs)
const express = require('express');
const router = express.Router()

//Require the database connection and the models in it
const db = require('../models')

//Routes:
//Index Route (localhost:3000/guestbook)
router.get('/', function(req, res) {
    db.Guestbook.find({})
        .then(entries => res.json(entries))
})

//New Route (localhost:3000/guestbook/new)
//Purpose of this is to render a form for the user to fill out to add an entry to the guestbook.
router.get('/new', (req, res) => {
    res.send(`This will generate a form for guestbook entries`)
})

//Show Route (localhost:3000/guestbook/ID)
//The ID is a wildcard eater, so it has to go below all routes that are specific.
router.get('/:id', function (req, res) {
    db.Guestbook.findById(req.params.id)
        .then(entry => res.json(entry))
        .catch(() => res.send('404: Page not found'))
})



//Can't access this in server.js without doing this command here
module.exports = router