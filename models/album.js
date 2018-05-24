var mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema for albums


const Schema = new Schema({
  Album Name: String,
  Artist Name: String,
  Released date: Date,
  Genres: String
});
