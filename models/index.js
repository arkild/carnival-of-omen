//Requires Mongoose and the environment configuration
const mongoose = require('mongoose');
require('dotenv').config()

//Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function() {
    console.log(`Mongo DB ${db.name} is connected at ${db.host}:${port}.`)
})