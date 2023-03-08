const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LivreSchema = new Schema({
  titre: { type: String, required: true },
  auteur: { type: Schema.Types.ObjectId, ref: 'Auteur', required: true },
  resume: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }]
});

// Virtuel url Livre
LivreSchema.virtual('url').get(function () {
  return `/catalogue/livre/${this._id}`;
});

module.exports = mongoose.model('Livre', LivreSchema);
