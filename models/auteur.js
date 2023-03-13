const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const AuteurSchema = new Schema({
  prenom: { type: String, required: true, maxLength: 100 },
  nom_famille: { type: String, required: true, maxLength: 100 },
  date_naissance: { type: Date },
  date_mort: { type: Date }
});

// Virtuel nom complet auteur
AuteurSchema.virtual('nom').get(function () {
  // cas pas de nom auteur (collectif, organisation, anonyme, etc...)
  let nom_complet = '';
  if (this.prenom && this.nom_famille) {
    nom_complet = `${this.prenom} ${this.nom_famille}`;
    return nom_complet;
  }
  if (this.prenom || this.nom_famille) {
    nom_complet = '';
    return nom_complet;
  }

  return nom_complet;
});

// Virtuel url auteur
AuteurSchema.virtual('url').get(function () {
  return `/catalogue/auteur/${this._id}`;
});

// Virtuel formattage date
AuteurSchema.virtual('date_naissance_format').get(function () {
  return this.date_naissance
    ? DateTime.fromJSDate(this.date_naissance)
        .setLocale('fr')
        .toLocaleString(DateTime.DATE_MED)
    : '';
});

AuteurSchema.virtual('date_mort_format').get(function () {
  return this.date_mort
    ? DateTime.fromJSDate(this.date_mort)
        .setLocale('fr')
        .toLocaleString(DateTime.DATE_MED)
    : '';
});

module.exports = mongoose.model('Auteur', AuteurSchema);
