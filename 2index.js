
 const goodRepliesArray = [
["ah yes", "yes", "sure", "ok", "okay"],
["fantastic", "awesome", "incredible", "cool", "fun stuff"],
["yay", "lets us do this"],
["i love you"]
];
const badRepliesArray = [
["no", "no thanks","never", "nay"],
["i think i will pass", "i decline", "sorry no", "sorry no thanks"],
["nope", "nada"]
];
const genreRepliesArray = ["action", "adventure", "cars", "comedy", "dementia", "demons", "mystery", "drama", "ecchi", "fantasy", "game", "hentai", "historical", "horror", "kids", "magic", "martial arts", "mecha", "music", "parody", "samurai", "romance", "school", "sci fi", "shoujo", "shoujo ai", "shounen", "shounen ai", "space", "sports", "super power", "vampire", "yaoi", "yuri", "harem", "slice of life", "supernatural", "military", "police", "psychological", "thriller", "seinen", "josei"];
const confusedRepliesArray = [
["what is anime"],
["what are genres"],
["i do not watch anime"]
];



const happyPromptsArray = [
  ["Awesome!", "Fantastic!!!", "Yay!", "Wonderful!", "Awesome sauce!!"],
  ["Yippie!!", "That's what I like to hear!"]
];
const unhappyPromptsArray = [
  ["Hearing that makes me mad. So lets get glad! And find some cool anime for you to watch!!"],
  ["I'm just gonna pretend you didn't just say that."],
  ["(...grumble) Wow you sure are a piece of work! So I'm just gonna pretend you didn't just say that."],
  ["We'll you should!! That's why I'm here to help you change that!"]
  ["Do you understand the words that are coming out of my mouth?!? You know what, let's just get on with this"]
];
const confusedPromptsArray = [
  ["Bro.. I literally did not understand a single word you just said... How about we start-over? If so, just refresh the page!"],
  ["How about we try this again. Just refresh the page"], 
  ["I don't understand"], ["Do you speak english?"], ["Maybe you should go find someone that speaks english"], ["Bro I literally cant NOT understand you"], ["Do you understand the Words that are coming out of my mouth??"]
];
const animeGenrePrompts = ["Okay, now let's find you some cool anime! Please enter up to 3 of your favorite genres/show types. Then press enter or submit."]

https://private-anon-d2a4ff726b-jikan.apiary-proxy.com/v3/search/anime/tv&page=1?order_by=title&genre=1%2C%207%2C%203&limit%20=3&page%20=1
const genres= [1,6,10];
https://api.jikan.moe/v3/top/search/anime?q=&page=1&genre=${genres},10&order_by=title&order_by=members&sort=desc&page=1


https://api.jikan.moe/v3/search/anime?q=&page=1&tv&genre=1&order_by=title&order_by2=score/page=1

const RAPID_API_URL = https://api.jikan.moe/v3/top/search/anime?q=&page=1&genre=&order_by=title&order_by=members&sort=desc&page=1
const RAPIDAPI_REQUEST_HEADERS = {
  'X-RapidAPI-Host': ''
  , 'X-RapidAPI-Key': '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  , 'Content-Type': 'application/json'
};

const jikanjs  = require('jikanjs');
/*
jikanjs.loadAnime(id [, request [, parameter]])
jikanjs.loadManga(id [, request])
jikanjs.loadPerson(id [, request])
jikanjs.loadCharacter(id [, request])
jikanjs.search(type, query [, page [, params]])
jikanjs.loadSeason(year, season)
jikanjs.loadSeasonArchive()
jikanjs.loadSeasonLater()
jikanjs.loadSchedule(day)
jikanjs.loadTop(type [, page [, subtype]])
jikanjs.loadGenre(type, id [, page])
jikanjs.loadProducer(id [, page])
jikanjs.loadMagazine(id [, page])
jikanjs.loadUser(username [, request [, data]])
jikanjs.loadClub(id)
jikanjs.loadClubMembers(id [, page])
jikanjs.loadMeta(type, period [, offset])
jikanjs.loadStatus()
jikanjs.raw(urlParts [, queryParameter])
*/
const genres= [1,6,10];
jikanjs.loadGenre(anime, genres [, page])

jikanjs.loadGenre(anime, genres).then((response) => {
  response.episodes.forEach(element => {
      console.log(`${element.title}: ${element.score}`);
  })
}).catch((err) => {
  console.error(err); // in case a error happens
});