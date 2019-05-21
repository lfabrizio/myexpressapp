const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema =  new Schema({
username: {
    type: String,
    required: true
},
message: String
})

module.exports = mongoose.model('User', userSchema);
// collection name will be users