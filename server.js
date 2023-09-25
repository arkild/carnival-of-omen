//Require all of the modules we've installed via node package manager
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

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
app.use(express.static('public'))
app.use(connectLiveReload());

//Mount Routes
app.get('/', function(req, res) {
    res.send('Carnival of Omen')
})

//This gets the app to listen on the specified port we've documented in the environment file.
app.listen(process.env.PORT, function (){
    console.log('Express is on port', process.env.PORT);
})