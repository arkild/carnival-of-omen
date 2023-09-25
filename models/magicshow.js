//Require the Mongoose package
const mongoose = require('mongoose');

//Making a schema for the Magic Show
const magicSchema = new mongoose.Schema({
    name: {type: String, required: true},
    species: {type: String, required: true}, //I'm still thinking about doing something with this so there's more customization. Maybe adding a color. We can make Frad unique as these fields only need strings, so I can put in null strings or strings that don't matter.
    image: {type: String, required: true}
})

//Export this schema as a mongoose model accessible in index.js.
module.exports = mongoose.model('Magic', magicSchema);
//This is going to make a db.Magic in Index.