const $chatBox = $("#messages");
const submitField = $("#input")[0];
const lastPrompt = $("#chat-box"); 

/*If no prompt exists post initial prompt*/
function checkIfTheresAPrompt() {
  if ($('.lastPrompt').children().length == 0) {
    let gif = helloGif[Math.floor(Math.random() * 7)];
    let isUser = false;
    productOfInput = "Hi there! Do you like to watch anime??";
    addChatToChat(productOfInput, isUser, gif);
  } 
}

$(document).ready(function () {
  submitField.addEventListener('keydown', function (e) {
    if (submitField.value && e.code === 'Enter') AddToChat(); 
  });
});

function submitMessage () {
  if (submitField.value) AddToChat(); 
}

function AddToChat () {
  let inputReply = submitField.value;
  submitField.value = '';
  outputPrompts(inputReply);
}

function addChatToChat (inputReply, isUser, gif) {
  const $timestamp = $('<div>').addClass('timestamp');
  $timestamp.text(
    `${new Date()
      .toString()
      .split(' ')
      .slice(0, 5)
      .join(' ')}`
     );
  if (gif) {var $gifContainer = $("<img>").addClass('gif').attr("src", gif).attr("data-playon", "hover");
    $($chatBox).append($gifContainer[0]);
  }
  const $container =  $('<div>').addClass('bubble').addClass(isUser ? 'user' : 'bot');
  
  $container.html(inputReply.replace(/</g, '&lt;').replace(/\n/g, '<br>'));
  $($container).append($timestamp);
  $($chatBox).append($container);

  $chatBox[0].lastChild.scrollIntoView(true);
  $chatBox.scrollTop = $chatBox.scrollHeight - $chatBox.clientHeight;
}

function outputPrompts(inputReply, animePromptsObj) {
  let productOfInput;
  let text = inputReply.toLowerCase().replace(/\d/g, "").trim("");
  text = text
    .replace(/ a /g, "")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ ! /g, "")
    .replace(/r u/g, "are you")
    .replace(/\?/g, "");

  if (text.match(/thank you/gi)) {
    productOfInput = "You're welcome!" + genrePrompt[1];
    let gif = happyGif[Math.floor(Math.random() * 10)];
    setTimeout(() => {
      addChatToChat(productOfInput, false, gif);
    }, 1500);
  } else if (text.match(/who are you/gi)) {
    productOfInput = "Who am I??";
    setTimeout(() => {
      addChatToChat(productOfInput, false);
    }, 1000);
    setTimeout(() => {
      productOfInput = myselfPrompt;
      addChatToChat(productOfInput, false);
    }, 2000);
    setTimeout(() => {
      productOfInput =
        "I consider myself to be a very 'active' anime watcher ;)";
      let gif = myselfGif;
      addChatToChat(productOfInput, false, gif);
    }, 7000);
  } else (compare(userReplyObj, text)) 
  
  return addChatToChat(inputReply, true);
}


function compare(userReplyObj, string, _findGenre, findAnimeAmongGenre) {
  
  let animeArray = [];
  const genreRepliesArray = userReplyObj.genreRepliesArray;
  const goodReply = userReplyObj.goodReplies;
  const badReply = userReplyObj.badReplies;
  let productOfInput;
  let userReplyFound = false;
   
  function findAnimeAmongGenre(genresArray) {
    let results;
    let returnAnime = [];

    $.get(
      `https://api.jikan.moe/v3/search/anime?q=&page=3&tv&genre=genresArray&order_by=members&sort=desc/page=3`,
      (data) => {
        results = data.results;
        returnAnime.push(results[Math.floor(Math.random() * results.length)]);
        returnAnime.push(results[Math.floor(Math.random() * results.length)]);

        animeArray.push(
          returnAnime[0].title,
          returnAnime[0].score,
          returnAnime[1].title,
          returnAnime[1].score
        );
        productOfInput = `Anime #1: ${animeArray[0]}   Rating#: ${animeArray[1]} \n\n Anime #2: ${animeArray[2]}   Rating#:  ${animeArray[3]} `;

        setTimeout(() => {
          addChatToChat(productOfInput, false);
        }, 1500);

      }
    );
  }

  if (userReplyFound !== true) {
    for (let i = 0; i < goodReply.length; i++) {
      if (string === goodReply[i]) {
        userReplyFound = true;
        let animeReply = happyPrompts[Math.floor(Math.random() * 7)];
        let gif = happyGif[Math.floor(Math.random() * 9)];
        productOfInput = `${animeReply} ${genrePrompt[0]}`;
        setTimeout(() => {
          addChatToChat(productOfInput, false, gif);
        }, 1200);
      }
      if (userReplyFound) break;
    }
  }
  if (userReplyFound !== true) {
    for (let y = 0; y < badReply.length; y++) {
      if (string === badReply[y]) {
        userReplyFound = true;
        let animeReply = unhappyPrompts[Math.floor(Math.random() * 5)];
        let gif = unhappyGif[Math.floor(Math.random() * 11)];
        productOfInput = `${animeReply} ${genrePrompt[0]}`;
        setTimeout(() => {
          addChatToChat(productOfInput, false, gif);
        }, 1200);
      }
      if (userReplyFound) break;
    }
  }
  if (userReplyFound !== true) {
    let genres = string.split(" ");
    for (let j = 0; j < genreRepliesArray.length; j++) {
      for (let z = 0; z < genres.length; z++) {
        /* check to see if any elements in genres(string) array do not equal any of the elements in genreReply array*/
        /* with any elements that still remain in the genres(string) array; create a new array called genresArray that uses the map method with the callback function findGenre() */
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
            findAnimeAmongGenre(genresArray);
          }
        }
      }
    }
  }
  if (userReplyFound !== true) {
    productOfInput = confusedPrompts[Math.floor(Math.random() * 6)];
    setTimeout(() => {
      addChatToChat(productOfInput, false);
    }, 1500);
  }
}


/* fetch statement used: it searches for tv anime shows based on the genres input and returns the most highly rated shows through the api's 'order_by' and sort methods
`https://api.jikan.moe/v3/search/anime?q=&page=1&tv&genre=1&order_by=members&sort=desc/page=1`*/