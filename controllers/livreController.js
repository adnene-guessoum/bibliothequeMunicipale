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
        titre: 'Accueil Bibliothèque Municipale',
        error: err,
        data: results
      });
    }
  );
};

exports.liste_livre = (req, res, next) => {
  Livre.find({}, 'titre auteur')
    .sort({ titre: 1 })
    .populate('auteur')
    .exec(function (err, liste_livres) {
      if (err) {
        return next(err);
      }
      res.render('liste_livre', {
        titre: 'Liste des livres',
        liste_livre: liste_livres
      });
    });
};

exports.livre_detail = (req, res, next) => {
  async.parallel(
    {
      livre(cb) {
        Livre.findById(req.params.id)
          .populate('auteur')
          .populate('genre')
          .exec(cb);
      },
      livre_instance(cb) {
        InstanceLivre.find({ livre: req.params.id }).exec(cb);
      }
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.livre == null) {
        // Pas de résultat
        const err = new Error('Pas trouvé le livre');
        err.status = 404;
        return next(err);
      }
      // succes
      res.render('livre_detail', {
        titre: results.livre.titre,
        livre: results.livre,
        instances_livre: results.livre_instance
      });
    }
  );
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
