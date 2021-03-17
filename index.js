document.addEventListener("DOMContentLoaded", () => {
  const submitField = document.getElementById("input");
  const submitInput = document.getElementById("submit");
  submitField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let inputReply = submitField.value;
      submitField.value = "";
      outputPrompts(inputReply);
    }
  });
});
/* 1) if no prompt exsists post intial prompt
    2) if there is a prompt callback function newPrompt()*/
var lastPrompt = document.getElementById("promptMessages");
function checkIfTheresAPrompt() {
  let prompt1 = "Hi there! Do you like to watch anime??";
  if (lastPrompt.innerHTML.length === 0) {
    lastPrompt.innerHTML = prompt1;
  }
}

/* add both user-input & outputPrompts to chat-box */
function addChatToChatBoxUser(inputReply) {
  const userRepliesContainer = document.getElementById("promptMessages");

  let timestamp = document.createElement("div");
  timestamp.className = "timestamp2";
  timestamp.innerText = `${new Date()
    .toString()
    .split(" ")
    .slice(0, 5)
    .join(" ")}`;

  /*let timeStampContainer = document.createElement("div");
    let timeCheckSpan = document.createElement("span");
    timeStampContainer.id = "timeStamp";
    timeStampContainer.className = "timeStamp";
    timeCheckSpan.className = "timeSpan";
     timeCheckSpan.innerText = ;
    timeStampContainer.appendChild(timeCheckSpan);*/

  let userInputDiv = document.createElement("div");
  userInputDiv.id = "guest";
  userInputDiv.className = "guest response";
  userInputDiv.innerHTML = `<span>${inputReply}</span>`;
  userRepliesContainer.appendChild(userInputDiv);
  userRepliesContainer.appendChild(timestamp);
  /*userInputDiv.appendChild(timeStampContainer);*/

  userRepliesContainer.scrollTop =
    userRepliesContainer.scrollHeight - userRepliesContainer.clientHeight;
}

function addChatToChatBox(productOfInput1, picture1, picture2) {
  const promptRepliesContainer = document.getElementById("promptMessages");

  /*let timeStampContainer = document.createElement("div");
    let timeCheckSpan = document.createElement("span");
    timeStampContainer.id = "timeStamp";
    timeStampContainer.className = "timeStamp";
    timeCheckSpan.className = "timeSpan";
     timeCheckSpan.innerText = ;
    timeStampContainer.appendChild(timeCheckSpan);*/
  let timestamp = document.createElement("div");
  let animeOutputDiv = document.createElement("div");
  let animeGifOutput1 = document.createElement("img");
  let animeOutputText = document.createElement("span");

  timestamp.className = "timestamp";
  animeOutputDiv.id = "anime";
  animeGifOutput1.scr = `${picture1}`;
  animeGifOutput1.className = "anime picture";
  animeOutputDiv.appendChild(animeOutputText);
  console.log(picture1);
  setTimeout(() => {
    timestamp.innerText = `${new Date()
      .toString()
      .split(" ")
      .slice(0, 5)
      .join(" ")}`;

    animeOutputText.innerText = `${
      productOfInput1
        ? productOfInput1
        : confusedPrompts[Math.floor(Math.random() * 6)]
    }`;

    animeOutputDiv.appendChild(animeGifOutput1);
    promptRepliesContainer.appendChild(animeOutputDiv);
    promptRepliesContainer.appendChild(timestamp);
  }, 1500);
  /*animeOutputDiv.appendChild(timeStampContainer);*/
  promptRepliesContainer.scrollTop =
    promptRepliesContainer.scrollHeight - promptRepliesContainer.clientHeight;
}
const confusedPrompts = [
  "I'm confused.",
  "Bro.. I literally did'nt understand a single thing you just said.",
  "I think you have an error in your message.",
  "Are you sure your speaking english?",
  "Try again.",
  "Sorry bro I only speak english.. ",
];
function outputPrompts(inputReply, confusedPrompts) {
  /*make it so that you can compare the users-input with the array's of expected user-replies*/
  let userReplyFound = false;
  let productOfInput;
  let text = inputReply.toLowerCase().replace(/\d/g, "").trim("");
  text = text
    .replace(/ a /g, "") // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ ! /g, "")
    .replace(/r u/g, "are you")
    .replace(/\?/g, "-");
  if (compare(userReplyObj, animePromptsObj, text)) {
    /* search for excat match in compare function*/
    productOfInput = compare(userReplyObj, animePromptsObj, text);
  } else if (text.match(/thank/gi)) {
    productOfInput = "You're welcome!" + genrePrompt[0];
  } else if (userReplyFound !== false) {
    /* if all else fails, return a confused prompt */
    productOfInput =
      "Sorry bro, I only understand 'yes', 'no', 'genres' or a reasonable facsimile thereof. =)";
  }
  //should update Document
  setTimeout(() => {
    addChatToChatBox(productOfInput);
  }, 500);

  return addChatToChatBoxUser(inputReply);
}

const userReplyObj = {
  goodReplies: [
    ["ah yes", "yes", "sure", "ok", "okay"],
    ["fantastic", "awesome", "incredible", "cool", "fun stuff"],
    ["yay", "lets us do this"],
    ["i love you"],
  ],
  badReplies: [
    ["no", "no thanks", "never", "nay"],
    ["i think i will pass", "i decline", "sorry no", "sorry no thanks"],
    ["nope", "nada"],
  ],
  genreRepliesArray: [
    "action",
    "adventure",
    "cars",
    "comedy",
    "dementia",
    "demons",
    "mystery",
    "drama",
    "ecchi",
    "fantasy",
    "game",
    "hentai",
    "historical",
    "horror",
    "kids",
    "magic",
    "martial arts",
    "mecha",
    "music",
    "parody",
    "samurai",
    "romance",
    "school",
    "sci fi",
    "shoujo",
    "shoujo ai",
    "shounen",
    "shounen ai",
    "space",
    "sports",
    "super power",
    "vampire",
    "yaoi",
    "yuri",
    "harem",
    "slice of life",
    "supernatural",
    "military",
    "police",
    "psychological",
    "thriller",
    "seinen",
    "josei",
  ],
};

const animePromptsObj = {
  happyPrompts: [
    ["Awesome!", "Fantastic!!!", "Yay!", "Wonderful!", "Awesome sauce!!"],
    ["Yippie!!", "That's what I like to hear!"],
  ],
  unhappyPrompts: [
    [
      "Hearing that makes me mad. So lets get glad! And find some cool anime for you to watch!!",
    ],
    ["I'm just gonna pretend you didn't just say that."],
    [
      "(...grumble) Wow you sure are a piece of work! So I'm just gonna pretend you didn't just say that.",
    ],
    ["We'll you should!! That's why I'm here to help you change that!"][
      "Do you understand the words that are coming out of my mouth?!? You know what, let's just get on with this"
    ],
  ],
  genrePrompt:
    "Now let's find you some cool anime to watch! Step 1: Enter up to 3 of your favorite genres. Step 2: Press enter and let me work my magic ;)",
};

confusedPrompts: [
  "I'm confuesed.",
  "Bro.. I literally did'nt understand a single thing you just said.",
  "I think you have an error in your message.",
  "Are you sure your speaking english?",
  "Try again.",
  "Sorry bro I only speak english.. ",
];

function compare(
  userReplyObj,
  animePromptsObj,
  string,
  _findGenre,
  findAnimeAmongGenre
) {
  let genresArray = [];
  let animeArray = [];
  let genreRepliesArray = userReplyObj.genreRepliesArray;
  let goodReply = userReplyObj.goodReplies;
  let badReply = userReplyObj.badReplies;
  let userReplyFound = false;
  let productOfInput;
  let unhappyPrompts = animePromptsObj.unhappyPrompts;
  let happyPrompts = animePromptsObj.happyPrompts;

  function findAnimeAmongGenre(genresArray) {
    const array = genresArray;
    let results;
    let amimeArray = [];
    let returnAnime = [];
    let anime1;
    let anime1a;
    let anime2;
    let anime2a;
    let picture1;
    let picture2;
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=&page=1&tv&genre=genresArray&order_by=members&sort=desc/page=1`
    )
      .then((res) => res.json())
      .then(function (data) {
        results = data.results;
        returnAnime.push(results[Math.floor(Math.random() * 50)]);
        returnAnime.push(results[Math.floor(Math.random() * 50)]);
        anime1 = returnAnime[0].title;
        anime1a = returnAnime[0].score;
        picture1 = returnAnime[0].image_url;
        anime2 = returnAnime[1].title;
        anime2a = returnAnime[1].score;
        animeArray.push(anime1, anime1a, anime2, anime2a);
        console.log(results, "hi");
        productOfInput =
          "Anime Option 1: " +
          animeArray[0] +
          "Rating:" +
          animeArray[1] +
          " Anime Option 2: " +
          animeArray[2] +
          "Rating: " +
          animeArray[3] +
          "";

        addChatToChatBox(productOfInput, picture1);
      });
  }

  if (userReplyFound !== true) {
    for (let i = 0; i < goodReply.length; i++) {
      for (let x = 0; x < goodReply[i].length; x++) {
        if (goodReply[i][x] === string) {
          console.log(animePromptsObj.happyPrompts[i]);
          let animeReply = animePromptsObj.happyPrompts[i];
          productOfInput =
            animeReply[Math.floor(Math.random() * animeReply.length)] +
            " " +
            animePromptsObj.genrePrompt;
          userReplyFound = true;
          break;
        }
      }
      if (userReplyFound) {
        /* stop outer loop iterating when/if reply is found */
        break;
      }
    }
  }
  if (userReplyFound !== true) {
    for (let y = 0; y < badReply.length; y++) {
      for (let k = 0; k < badReply[y].length; k++) {
        if (badReply[y][k] === string) {
          console.log(unhappyPrompts[y]);
          let animeReply = animePromptsObj.unhappyPrompts[y];
          productOfInput =
            animeReply[Math.floor(Math.random() * animeReply.length)] +
            animePromptsObj.genrePrompt;
          userReplyFound = true;
          break;
        }
      }
      if (userReplyFound) {
        break;
      }
    }
  }
  if (userReplyFound !== true) {
    /* if userReplyFound still equals false, now check against genresArray*/
    console.log(string);
    let genres = string.split(" ");
    for (let j = 0; j < genreRepliesArray.length; j++) {
      for (let z = 0; z < genres.length; z++) {
        /* check if any elements in genres(string) array do not equal any of the elements in genreReply array*/
        /* if any elements do not equal one another; delete those elements in genres(string) array*/
        /* with any elements that still remain in the genres(string) array; create a new array called genreArray that uses the filter method with the callback function findgenre() */
        if (genres[z] === genreRepliesArray[j]) {
          let genresArray = genres.map(function findGenre(genreEntered) {
            var genreNum = [];
            switch (genreEntered) {
              case "action":
                genreNum = 1;
                break;
              case "adventure":
                genreNum = 2;
                break;
              case "cars":
                genreNum = 3;
                break;
              case "comedy":
                genreNum = 4;
                break;
              case "dementia":
                genreNum = 5;
                break;
              case "demons":
                genreNum = 6;
                break;
              case "mystery":
                genreNum = 7;
                break;
              case "drama":
                genreNum = 8;
                break;
              case "ecchi":
                genreNum = 9;
                break;
              case "fantasy":
                genreNum = 10;
                break;
              case "game":
                genreNum = 11;
                break;
              case "hentai":
                genreNum = 12;
                break;
              case "historical":
                genreNum = 13;
                break;
              case "horror":
                genreNum = 14;
                break;
              case "kids":
                genreNum = 15;
                break;
              case "magic":
                genreNum = 16;
                break;
              case "martial arts":
                genreNum = 17;
                break;
              case "mecha":
                genreNum = 18;
                break;
              case "music":
                genreNum = 19;
                break;
              case "parody":
                genreNum = 20;
                break;
              case "samurai":
                genreNum = 21;
                break;
              case "romance":
                genreNum = 22;
                break;
              case "school":
                genreNum = 23;
                break;
              case "sci fi":
                genreNum = 24;
                break;
              case "shoujo":
                genreNum = 25;
                break;
              case "shoujo ai":
                genreNum = 26;
                break;
              case "shounen":
                genreNum = 27;
                break;
              case "shounen ai":
                genreNum = 28;
                break;
              case "space":
                genreNum = 29;
                break;
              case "sports":
                genreNum = 30;
                break;
              case "super power":
                genreNum = 31;
                break;
              case "vampire":
                genreNum = 32;
                break;
              case "yaoi":
                genreNum = 33;
                break;
              case "yuri":
                genreNum = 34;
                break;
              case "harem":
                genreNum = 35;
                break;
              case "slice of life":
                genreNum = 36;
                break;
              case "supernatural":
                genreNum = 37;
                break;
              case "military":
                genreNum = 38;
                break;
              case "police":
                genreNum = 39;
                break;
              case "psychological":
                genreNum = 40;
                break;
              case "thriller":
                genreNum = 41;
                break;
              case "seinen":
                genreNum = 42;
                break;
              case "josei":
                genreNum = 43;
                break;
            }
            return genreNum;
          });
          /* Now use this array to find the corresponding anime titles that fit the required genre that are stored in genreArray and store these new anime titles into a new array called animeArray */
          if (genresArray.length !== 0) {
            userReplyFound = true;
            let animeObjects = findAnimeAmongGenre(genresArray);
            console.log(animeArray[1]);
            setTimeout(() => {
              productOfInput =
                "Anime Option 1: " +
                animeArray[0] +
                "Rating:" +
                animeArray[1] +
                "Anime Option 2: " +
                animeArray[2] +
                "Rating: " +
                animeArray[3] +
                "";
            }, 2000);
          }
        }
      }
    }
  }
  return productOfInput;
}

const happyGIFS = [
  [
    "https://tenor.com/view/anime-happy-excited-gif-13451198.gif",
    "https://tenor.com/view/squirtle-flowers-pokemon-gif-10787608.gif",
    "https://tenor.com/view/inosuke-running-demon-slayer-kimetsu-no-yaiba-fun-gif-20481623.gif",
    "https://tenor.com/view/demon-slayer-inosuke-amazed-sparkle-gif-15052588.gif",
    "https://tenor.com/view/inosuke-kimetsu-no-yaba-gif-15023737.gif",
  ],
];
const unhappyGIFS = [
  [
    "https://tenor.com/view/kawaii-anime-tongue-bleh-gif-5018411.gif",
    "https://giphy.com/gifs/demon-slayer-zenitsu-thundergod-VEzYdo930nTiTuVeMU.gif",
    "https://tenor.com/view/naruto-sasuke-mad-anime-gif-11475477.gif",
    "https://tenor.com/view/sasuke-thinking-anime-naruto-gif-13593873.gif",
    "https://tenor.com/view/llorar1-cry-sad-tears-anime-gif-5648908.gif",
    "https://tenor.com/view/demon-slayer-gif-20317224",
    "https://tenor.com/view/kimetsu-no-yaiba-demon-slayer-pig-angry-inosuke-hashibira-gif-14905892.gif",
  ],
];
const yayGIFS = [
  [
    "https://tenor.com/view/goodjob-thumbsup-nice-excellent-naruto-gif-7248440.gif",
    ".gif",
    "https://tenor.com/view/asuna-sword-art-online-anime-kirito-smile-gif-15399998.gif",
  ],
];
/*((genres[z] === genreRepliesArray[j]) || (genres[z-1] + genres[z] + genres[z+1] === genreRepliesArray[j]) || (genres[z-1] + genres[z] === genreRepliesArray[j])) */

console.log(
  fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=[1,6,10]/page=1`)
    .then((res) => res.json())
    .then((data) => data.title)
);

`https://api.jikan.moe/v3/search/anime?q=&page=1&tv&genre=1&order_by=members&sort=desc/page=1`;
