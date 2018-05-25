var mongoose = require("mongoose");

// connects to a local book-app database URI
mongoose.connect("mongodb://localhost/tunely");

module.exports.Album = require("./album.js");
