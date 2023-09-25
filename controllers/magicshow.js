//This file puts all routes prefixed with `localhost:3000/magicshow`

//Require routing(so we can do routes) and express(so we can use .ejs)
const express = require('express');
const router = express.Router()

//Require the database connection and the models in it
const db = require('../models')

//Routes:
//Index Route (localhost:3000/magicshow)
router.get('/', function(req, res) {
    db.Magic.find({})
        .then(entries => res.json(entries))
})

//New Route (localhost:3000/magicshow/creation)
router.get('/creation', (req, res) => {
    res.send(`This will redirect to a page for making magic show participants.`)
})

//We're not showing details on this controller, so a Show route is not required.

//Can't access this in server.js without doing this command here
module.exports = router