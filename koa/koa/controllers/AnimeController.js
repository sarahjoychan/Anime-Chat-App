const db = require('../db');
const Anime = require('../model/Anime');

class AnimeController {
  getAnime (ctx) {
    try {
      console.log("ctx.body", ctx.body);
      ctx.body = db.db.anime;
      ctx.status = 200;
    } catch {
      ctx.body = err;
      ctx.status = 500;
      console.log('err', err);
    }

  }
  postAnime (ctx) {

    try {
      const { title, rating, synopsis } = ctx.request.body;
      const anime = new Anime(title, rating, synopsis);
      db.db.anime.push(anime);
      ctx.status = 200;
    } catch {
      ctx.body = err;
      ctx.status = 500;
      console.log('err', err);
    }
    
  }
}


module.exports = new MessageController();