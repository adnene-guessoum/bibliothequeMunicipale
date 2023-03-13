const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  genre: { type: String, required: true, minLength: 3, maxLength: 100 }
});

// Virtuel genre url
GenreSchema.virtual('url').get(function () {
  return `/catalogue/genre/${this._id}`;
});

module.exports = mongoose.model('Genre', GenreSchema);
