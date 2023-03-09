const express = require('express');
const router = express.Router();

// routes require controllers
const livre_controller = require('../controllers/livreController');
const auteur_controller = require('../controllers/auteurController');
const genre_controller = require('../controllers/genreController');
const instancelivre_controller = require('../controllers/instanceLivreController');

/// Routes livre ///

router.get('/', livre_controller.index);

router.get('/livre/create', livre_controller.livre_create_get);
router.post('/livre/create', livre_controller.livre_create_post);
router.get('/livre/:id/delete', livre_controller.livre_delete_get);
router.post('/livre/:id/delete', livre_controller.livre_delete_post);
router.get('/livre/:id/update', livre_controller.livre_update_get);
router.post('/livre/:id/update', livre_controller.livre_update_post);
router.get('/livre/:id', livre_controller.livre_detail);
router.get('/livres', livre_controller.livre_liste);

/// Routes auteur ///

router.get('/auteur/create', auteur_controller.auteur_create_get);
router.post('/auteur/create', auteur_controller.auteur_create_post);
router.get('/auteur/:id/delete', auteur_controller.auteur_delete_get);
router.post('/auteur/:id/delete', auteur_controller.auteur_delete_post);
router.get('/auteur/:id/update', auteur_controller.auteur_update_get);
router.post('/auteur/:id/update', auteur_controller.auteur_update_post);
router.get('/auteur/:id', auteur_controller.auteur_detail);
router.get('/auteurs', auteur_controller.auteur_liste);

/// Routes genre ///

router.get('/genre/create', genre_controller.genre_create_get);
router.post('/genre/create', genre_controller.genre_create_post);
router.get('/genre/:id/delete', genre_controller.genre_delete_get);
router.post('/genre/:id/delete', genre_controller.genre_delete_post);
router.get('/genre/:id/update', genre_controller.genre_update_get);
router.post('/genre/:id/update', genre_controller.genre_update_post);
router.get('/genre/:id', genre_controller.genre_detail);
router.get('/genres', genre_controller.genre_liste);

/// Routes instancelivre ///

router.get(
  '/instancelivre/create',
  instancelivre_controller.instancelivre_create_get
);
router.post(
  '/instancelivre/create',
  instancelivre_controller.instancelivre_create_post
);
router.get(
  '/instancelivre/:id/delete',
  instancelivre_controller.instancelivre_delete_get
);
router.post(
  '/instancelivre/:id/delete',
  instancelivre_controller.instancelivre_delete_post
);
router.get(
  '/instancelivre/:id/update',
  instancelivre_controller.instancelivre_update_get
);
router.post(
  '/instancelivre/:id/update',
  instancelivre_controller.instancelivre_update_post
);
router.get('/instancelivre/:id', instancelivre_controller.instancelivre_detail);
router.get('/instancelivres', instancelivre_controller.instancelivre_liste);

/// export router ///
module.exports = router;
