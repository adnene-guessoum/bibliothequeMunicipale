const Genre = require('../models/genre');
const Livre = require('../models/livre');
const async = require('async');

exports.liste_genre = (req, res, next) => {
  Genre.find()
    .sort([['genre', 'ascending']])
    .exec(function (err, liste_genres) {
      if (err) {
        return next(err);
      }
      res.render('liste_genre', {
        titre: 'Liste des Genres',
        liste_genre: liste_genres
      });
    });
};

exports.genre_detail = (req, res, next) => {
  async.parallel(
    {
      genre(cb) {
        Genre.findById(req.params.id).exec(cb);
      },

      genre_livres(cb) {
        Livre.find({ genre: req.params.id }).exec(cb);
      }
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // Pas de résultats
        const err = new Error('Pas de Genre trouvé');
        err.status = 404;
        return next(err);
      }

      //Success
      res.render('genre_detail', {
        titre: 'Detail: Genre',
        genre: results.genre,
        genre_livres: results.genre_livres
      });
    }
  );
};

exports.genre_create_get = (req, res) => {
  res.send('TODO: GET form creation genre');
};

exports.genre_create_post = (req, res) => {
  res.send('TODO: POST form creation genre');
};

exports.genre_delete_get = (req, res) => {
  res.send('TODO: GET form suppression genre');
};

exports.genre_delete_post = (req, res) => {
  res.send('TODO: POST form suppression genre');
};

exports.genre_update_get = (req, res) => {
  res.send('TODO: GET form modification genre');
};

exports.genre_update_post = (req, res) => {
  res.send('TODO: POST form modification genre');
};
