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
        .then(subjects => res.render('magic/magicshow', {subjects: subjects}))
})

//New Route (localhost:3000/magicshow/creation)
router.get('/creation', (req, res) => {
    res.render('magic/new-creation')
})

//Create Route (localhost:3000/magicshow/magic)
//Rather than re-direct to the list of subject, we are re-directing to an intermediary page that will display some magic mumbo-jumbo and then after a certain period of time will redirect to where we need it to go.
router.post('/magic', (req, res) => {
    db.Magic.create(req.body)
        .then(subject => res.json(subject))
        //This will just render the hocus-pocus.ejs file. That page will issue the re-direct separate from this.
})

//We're not showing details on this controller, so a Show route is not required.
//We're also not editing our subjects. We're either making them appear or disappear. That's it.

//Destroy route (localhost:3000/magicshow/ID)
//This will delete the entry. Afterwards we'll set up a redirect.
router.delete('/magic/:id', (req, res) => {
    db.Magic.findByIdAndRemove(req.params.id)
        .then(() => res.render('magic/hocuspocus'))
        .catch(() => res.render('404'))
})

//Can't access this in server.js without doing this command here
module.exports = router