const Auteur = require('../models/auteur');

exports.liste_auteurs = (req, res, next) => {
  Auteur.find()
    .sort([['nom_famille', 'ascending']])
    .exec(function (err, liste_auteur) {
      if (err) {
        return next(err);
      }
      res.render('liste_auteurs', {
        titre: 'Liste des Auteurs',
        liste_auteurs: liste_auteur
      });
    });
};

exports.auteur_detail = (req, res) => {
  res.send(`TODO: page detail auteur: ${req.params.id}`);
};

exports.auteur_create_get = (req, res) => {
  res.send('TODO: GET form creation auteur');
};

exports.auteur_create_post = (req, res) => {
  res.send('TODO: POST form creation auteur');
};

exports.auteur_delete_get = (req, res) => {
  res.send('TODO: GET form suppression auteur');
};

exports.auteur_delete_post = (req, res) => {
  res.send('TODO: POST form suppression auteur');
};

exports.auteur_update_get = (req, res) => {
  res.send('TODO: GET form modification auteur');
};

exports.auteur_update_post = (req, res) => {
  res.send('TODO: POST form modification auteur');
};
