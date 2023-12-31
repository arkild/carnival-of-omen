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
        .then((entries) => res.render('guestbook/entry-index', {entries: entries}))
})

//New Route (localhost:3000/guestbook/new)
//Purpose of this is to render a form for the user to fill out to add an entry to the guestbook.
router.get('/new', (req, res) => {
    res.render('guestbook/new-entry')
})

//Create Route (localhost:3000/guestbook/create)
//This route will create a new guestbook entry and then re-direct to the guestbook page.
router.post('/', (req, res) => {
    db.Guestbook.create(req.body)
        .then(() => res.redirect('guestbook/'))
})

//Edit route (localhost:3000/guestbook/edit/ID)
//This edits a particular ID that you pick from the guestbook list.
router.get('/:id/edit', (req, res) => {
    db.Guestbook.findById(req.params.id)
        .then(entry => res.render('guestbook/edit-entry', {entry: entry}))
        .catch(() => res.render('404'))
})

//Update route (localhost:3000/guestbook/ID)
//After updating, this re-directs the user back to the page with the ID so you can see the changes made.
router.put('/:id', (req, res) => {
    db.Guestbook.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(entry => res.redirect(entry._id))
})

//Destroy route (localhost:3000/guestbook/ID)
//This will delete the entry. Afterwards we'll set up a redirect.
router.delete('/:id', (req, res) => {
    db.Guestbook.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/guestbook'))
        .catch(() => res.render('404'))
})

//Show Route (localhost:3000/guestbook/ID)
//The ID is a wildcard eater, so it has to go below all routes that are specific.
router.get('/:id', function (req, res) {
    db.Guestbook.findById(req.params.id)
        .then(entry => res.render('guestbook/entry-details', {entry: entry}))
        //This is returning 'null' currently. When we get to rendering pages, we'll see what happens.
        .catch(() => res.render('404'))
})



//Can't access this in server.js without doing this command here
module.exports = router