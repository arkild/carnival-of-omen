//Require all of the modules we've installed via node package manager
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const methodOverride = require('method-override');

//This requires the routes in the controllers folder
const guestCtrl = require('./controllers/guestbook')
const magicCtrl = require('./controllers/magicshow')

//Require DB connection, models, and seed data.
const db = require('./models');
//Require Express.
const app = express();

//This lets the browser refresh on nodemon restart.
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    //The page will refresh when nodemon fully restarts
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

//Configure the app (app.set)
app.set('view engine', 'ejs');
//Every time this server file is rendering something, it's going to default the directory to /views.
app.set('views', path.join(__dirname, 'views'));

//Middleware
//This is for CSS and my images/assets
app.use(express.static('public'))
//This is for livereload
app.use(connectLiveReload());
//request.body parser to use for post/put/patch.
app.use(express.urlencoded({extended: true}));
//This changes post requests to other requests of our choosing
app.use(methodOverride('_method'));

//Mount Routes (The ones not in controllers)
//Home Page
app.get('/', function(req, res) {
    res.render('home')
})

//The main menu or amusement selection
app.get('/attractions', function(req, res) {
    res.render('attractions')
})



//This gets the app to listen on the specified port we've documented in the environment file.
app.listen(process.env.PORT, function (){
    console.log('Express is on port', process.env.PORT);
})

//Seed the collections when a get request is sent to /seed.
app.get('/seed', function(req, res) {
    //Remove all current entries from one database...
    db.Guestbook.deleteMany({})
        .then(removedEntries => {
            console.log(`Removed ${removedEntries.deletedCount} guestbook entries.`)
            db.Guestbook.insertMany(db.seedData.guestbook)
                .then(addedEntries => {
                    console.log(`Added ${addedEntries.length} guestbook entries to the database.`)
                })
        })
    // And the other.
    db.Magic.deleteMany({})
        .then(removedSubjects => {
            console.log(`Removed ${removedSubjects.deletedCount} magic participants.`)
            db.Magic.insertMany(db.seedData.subjects)
                .then(addedEntries => {
                    console.log(`Added ${addedEntries.length} magicshow subjects to the database.`)
                })
        })
})

//These next 2 lines tell server.js to reference our controllers if it finds routes that begin with the controller names.
app.use('/guestbook', guestCtrl)
app.use('/magicshow', magicCtrl)

//404 Route
//Has to be at the ABSOLUTE BOTTOM or it soaks up everything, even the controllers
app.get('/*', function(req, res) {
    res.render('404')
})