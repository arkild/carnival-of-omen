//Requires Mongoose and the environment configuration
const mongoose = require('mongoose');
require('dotenv').config()

//Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function() {
    console.log(`Mongo DB ${db.name} is connected at ${db.host}:${db.port}.`)
})

module.exports = {
    Guestbook: require('./guestbook'), Magic: require('./magicshow'),
    //I initially did "require('./magic')", completely forgetting that the requirements need filenames.
    seedData: require('./seed'),
};