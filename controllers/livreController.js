const Livre = require('../models/livre');

exports.index = (req, res) => {
  res.send('TODO: retourne page Accueil');
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
