const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

/* GET Pet. */
router.get('/', petController.get);

/* GET Pet by id. */
router.get('/:id', petController.getById);

/* POST Pet */
router.post('/', petController.create);

/* PUT Pet */
router.put('/:id', petController.update);

/* SOFT DELETE Pet */
router.put('/update-status/:id', petController.remove);

module.exports = router;