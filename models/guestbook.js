//Require Mongoose
const mongoose = require('mongoose');

// Making a schema for the guestbook
const guestbookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    entryTitle: {type: String, required: true},
    haveFun: {type: String, required: true},
    description: {type: String, default: "This is the best place in the whole world and I can't wait to come back!"},
    dateAdded: {type: Date, default: Date.now}
});

//Export as a mongoose model that can be accessed in models/index.js
module.exports = mongoose.model('Guestbook', guestbookSchema);
//Index will access the database via db.Guestbook.