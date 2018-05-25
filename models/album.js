var mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema for albums


const AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);
// export Album model
module.exports = Album;
