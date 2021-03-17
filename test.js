const fetch = require("node-fetch");

fetch(
  `https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${genresArray}/page=1`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.title);
  });

let genresArray = [];
