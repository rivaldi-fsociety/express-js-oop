const petService = require('../services/pet.service');

async function get(req, res, next) {
  try {
      res.json(await petService.get(req.query.page));
  } catch (err) {
      console.error(`Error`, err.message);
      next(err);
  }
}

async function getById(req, res, next) {
  try {
      res.json(await petService.getById(req.params.id));
  } catch (err) {
      console.error(`Error`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    return await petService.create(req.body, res);
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    return await petService.update(req.params.id, req.body, res);
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    return await petService.remove(req.params.id, req.body, res);
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  getById,
  create,
  update,
  remove
};
