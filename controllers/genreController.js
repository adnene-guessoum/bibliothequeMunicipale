const Genre = require('../models/genre');

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

exports.genre_detail = (req, res) => {
  res.send(`TODO: page detail genre: ${req.params.id}`);
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
