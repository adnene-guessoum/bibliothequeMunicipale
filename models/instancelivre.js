// reference à l'objet livre physique ("instance" emprunté, rendu, copies...)

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InstanceLivreSchema = new Schema({
  livre: { type: Schema.Types.ObjectId, ref: 'Livre', required: true },
  version_papier: { type: String, required: true },
  statut: {
    type: String,
    required: true,
    enum: ['Disponible', 'En Maintenance', 'Emprunté', 'Reservé'],
    default: 'En Maintenance'
  },
  retour_prevu: { type: Date, default: Date.now }
});

// Virtuel url instanceLivre
InstanceLivreSchema.virtual('url').get(function () {
  return `/catalogue/InstanceLivre/${this._id}`;
});

module.exports = mongoose.model('InstanceLivre', InstanceLivreSchema);
