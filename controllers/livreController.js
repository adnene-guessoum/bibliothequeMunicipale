const Livre = require('../models/livre');
const Auteur = require('../models/auteur');
const Genre = require('../models/genre');
const InstanceLivre = require('../models/instancelivre');

const async = require('async');

// retourner page accueil avec compteurs
exports.index = (req, res) => {
  async.parallel(
    {
      livre_count(cb) {
        Livre.countDocuments({}, cb);
      },
      livre_instance_count(cb) {
        InstanceLivre.countDocuments({}, cb);
      },
      livre_instance_disponible_count(cb) {
        InstanceLivre.countDocuments({ statut: 'Disponible' }, cb);
      },
      auteur_count(cb) {
        Auteur.countDocuments({}, cb);
      },
      genre_count(cb) {
        Genre.countDocuments({}, cb);
      }
    },
    (err, results) => {
      res.render('index', {
        title: 'Accueil Bibliothèque Municipale',
        error: err,
        data: results
      });
    }
  );
};

exports.liste_livre = (req, res) => {
  res.send('TODO: retourner liste livres');
};

exports.livre_detail = (req, res) => {
  res.send(`TODO: page detail livre: ${req.params.id}`);
};

exports.livre_create_get = (req, res) => {
  res.send('TODO: GET form creation livre');
};

exports.livre_create_post = (req, res) => {
  res.send('TODO: POST form creation livre');
};

exports.livre_delete_get = (req, res) => {
  res.send('TODO: GET form suppression livre');
};

exports.livre_delete_post = (req, res) => {
  res.send('TODO: POST form suppression livre');
};

exports.livre_update_get = (req, res) => {
  res.send('TODO: GET form modification livre');
};

exports.livre_update_post = (req, res) => {
  res.send('TODO: POST form modification livre');
};
