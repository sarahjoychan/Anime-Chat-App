// const express = require('express');
const AnimeController = require('./controllers/AnimeController');
const Router = require('koa-router');
const router = new Router();

router.get('/anime', AnimeController.getAnime);
router.post('/anime', AnimeController.postAnime);

module.exports = router;
