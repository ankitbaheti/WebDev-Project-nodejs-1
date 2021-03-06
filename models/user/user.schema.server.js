var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    email: {type: String, default: ''},
    dob: {type: Date, default:new Date()},
    city: {type: String, default: ''},
    phone: {type: Number, default: 0},
    type: String,
    description: {type: String, default: ''},
    eventLocation: {type: String, default: ''},
    playlist:[{type: mongoose.Schema.Types.ObjectId, ref: 'PlaylistModel'}],
    events:[{type: mongoose.Schema.Types.ObjectId, ref: 'EventModel'}],

}, {collection: 'user'});

module.exports = userSchema;