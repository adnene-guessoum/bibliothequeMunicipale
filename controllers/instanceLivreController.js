const InstanceLivre = require('../models/instancelivre');

exports.liste_instancelivre = (req, res, next) => {
  InstanceLivre.find()
    .populate('livre')
    .exec(function (err, liste_instances_livre) {
      if (err) {
        return next(err);
      }
      res.render('liste_instancelivre', {
        titre: 'Liste des exemplaires',
        liste_instancelivre: liste_instances_livre
      });
    });
};

exports.instancelivre_detail = (req, res) => {
  res.send(`TODO: page detail instancelivre: ${req.params.id}`);
};

exports.instancelivre_create_get = (req, res) => {
  res.send('TODO: GET form creation instancelivre');
};

exports.instancelivre_create_post = (req, res) => {
  res.send('TODO: POST form creation instancelivre');
};

exports.instancelivre_delete_get = (req, res) => {
  res.send('TODO: GET form suppression instancelivre');
};

exports.instancelivre_delete_post = (req, res) => {
  res.send('TODO: POST form suppression instancelivre');
};

exports.instancelivre_update_get = (req, res) => {
  res.send('TODO: GET form modification instancelivre');
};

exports.instancelivre_update_post = (req, res) => {
  res.send('TODO: POST form modification instancelivre');
};
