document.addEventListener("DOMContentLoaded", () => {
    const submitField = document.getElementById("input");
    const submitInput = document.getElementById("submit");
    submitField.addEventListener("keydown", function(e) {
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
      let prompt1 = "Hi there! Do you like to watch anime??"
      if (lastPrompt.innerHTML.length === 0) {
          lastPrompt.innerHTML = prompt1;
          console.log(prompt1);
      } 
      console.log(lastPrompt.length);
  }



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

/* add both user-input & outputPrompts to chat-box */

function addChatToChatBox(inputReply, productOfInput) {
    const userRepliesContainer = document.getElementById("userMessages");
    const promptRepliesContainer = document.getElementById("promptMessages");

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
    /*userInputDiv.appendChild(timeStampContainer);*/

    let animeOutputDiv = document.createElement("div");
    let animeGifOutput = document.createElement("img");
    let animeOutputText = document.createElement("span");
    animeOutputDiv.id = "anime";
    animeGifOutput.scr = "";
    animeGifOutput.className = "animeGif";
    animeOutputText.innerText = `${productOfInput}`;
    animeOutputDiv.appendChild(animeOutputText);
    animeOutputDiv.appendChild(animeGifOutput);
    promptRepliesContainer.appendChild(animeOutputDiv);
    /*animeOutputDiv.appendChild(timeStampContainer);*/

    userRepliesContainer.scrollTop = userRepliesContainer.scrollHeight - userRepliesContainer.clientHeight;
    promptRepliesContainer.scrollTop = promptRepliesContainer.scrollHeight - promptRepliesContainer.clientHeight;
    
}

function outputPrompts(inputReply) {
    /*make it so that you can compare the users-input with the array's of expected user-replies*/
    let productOfInput;
    let text = inputReply.toLowerCase().replace(/\d/g, "").trim("");
    text = text
    .replace(/ a /g, "") // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ ! /g, "")
    .replace(/r u/g, "are you")
    .replace(/\?/g, '-');
    if (compare(userReplyObj, animePromptsObj, text)) {
        /* search for excat match in compare function*/
        productOfInput = compare(userReplyObj, animePromptsObj, text);
    } else if (text.match(/thank/gi)) {
        productOfInput = "You're welcome!" + genrePrompt[0];
    } else {
        /* if all else fails, return a confused prompt */
        /*productOfInput = confusedPrompts[Math.floor(Math.random() * confusedPrompts.length)];*/
    }
    //should update Document
    addChatToChatBox(inputReply, productOfInput);
}

const userReplyObj = {goodReplies:[
    ["ah yes", "yes", "sure", "ok", "okay"],
    ["fantastic", "awesome", "incredible", "cool", "fun stuff"],
    ["yay", "lets us do this"],
    ["i love you"]
], badReplies:[
    ["no", "no thanks","never", "nay"],
    ["i think i will pass", "i decline", "sorry no", "sorry no thanks"],
    ["nope", "nada"]
], genreRepliesArray:["action", "adventure", "cars", "comedy", "dementia", "demons", "mystery", "drama", "ecchi", "fantasy", "game", "hentai", "historical", "horror", "kids", "magic", "martial arts", "mecha", "music", "parody", "samurai", "romance", "school", "sci fi", "shoujo", "shoujo ai", "shounen", "shounen ai", "space", "sports", "super power", "vampire", "yaoi", "yuri", "harem", "slice of life", "supernatural", "military", "police", "psychological", "thriller", "seinen", "josei"], confusedReplies:[
    ["what is anime"],
    ["what are genres"],
    ["i do not watch anime"]
]};

const animePromptsObj = {happyPrompts:[
    ["Awesome!", "Fantastic!!!", "Yay!", "Wonderful!", "Awesome sauce!!"],
    ["Yippie!!", "That's what I like to hear!"]
], unhappyPrompts:[
    ["Hearing that makes me mad. So lets get glad! And find some cool anime for you to watch!!"],
    ["I'm just gonna pretend you didn't just say that."],
    ["(...grumble) Wow you sure are a piece of work! So I'm just gonna pretend you didn't just say that."],
    ["We'll you should!! That's why I'm here to help you change that!"]
    ["Do you understand the words that are coming out of my mouth?!? You know what, let's just get on with this"]
], genrePrompt:"Okay, now let's find you some cool anime to watch! Please enter up to 3 of your favorite genres/show types. Then press enter and let me work my magic ;)", animeDef:[]};

function findAnimeAmongGenre(genresArray) {
    var love = [fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${genresArray}/page=1`).then(res => res.json()).then(data => {
        (data.title);})];
}

function compare(userReplyObj, animePromptsObj, string, findGenre, findAnimeAmongGenre) {
    let genresArray = [];
    let animeArray = [];
    let genreRepliesArray = userReplyObj.genreRepliesArray;
    let goodReply = userReplyObj.goodReplies;
    let badReply = userReplyObj.badReplies;
    let userReplyFound = false;
    let animePromptOutput;
    let unhappyPrompts = animePromptsObj.unhappyPrompts;
    let happyPrompts = animePromptsObj.happyPrompts;
    console.log();
    console.log();

    if (userReplyFound !== true) {
        for (let i = 0; i < goodReply.length; i++) {
            for (let x = 0; x < goodReply[i].length; x++) {
                if (goodReply[i][x] === string) {
                    console.log(animePromptsObj.happyPrompts[i]);
                    let animeReply = animePromptsObj.happyPrompts[i];
                    animePromptOutput = animeReply[Math.floor(Math.random() * animeReply.length)] + " " + animePromptsObj.genrePrompt;
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
                    animePromptOutput = animeReply[Math.floor(Math.random() * animeReply.length)] + animePromptsObj.genrePrompt;
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
                        switch(genreEntered){
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
                    } 
                );
                    
                
                }
            } if (findAnimeAmongGenre(genresArray)) {
                function findAnimeAmongGenre(genresArray) {
                var love = [fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${genresArray}/page=1`).then(res => res.json()).then(data => {
                    (data.title);})];
                }
                userReplyFound = true; 
                break;
            } 
                animePromptOutput = animeArray[0] + ", " + animeArray[1] + " & " + animeArray[2];
                           
        }
                    /* Now use this array to find the corresponding anime titles that fit the required genre that are stored in genreArray and store these new anime titles into a new array called animeArray */
                    
                    /* if anime is not sorted by popularity ratings then: */
                    /* animePromptOutput = animeArray[Math.floor(Math.random() * animeArray.length)] + animeArray[Math.floor(Math.random() * animeArray.length)] + animeArray[Math.floor(Math.random() * animeArray.length)] */
                    /* else: if anime is sorted by popularity ratings */
        
    }
    return animePromptOutput; 
}


let restart = function() {
}

let genreTitle = document.getElementById('genre-title');




const happyGIFS = [
    ["https://tenor.com/view/anime-happy-excited-gif-13451198.gif", "https://tenor.com/view/squirtle-flowers-pokemon-gif-10787608.gif", "https://tenor.com/view/inosuke-running-demon-slayer-kimetsu-no-yaiba-fun-gif-20481623.gif", "https://tenor.com/view/demon-slayer-inosuke-amazed-sparkle-gif-15052588.gif", "https://tenor.com/view/inosuke-kimetsu-no-yaba-gif-15023737.gif"]
];
const unhappyGIFS = [
    ["https://tenor.com/view/kawaii-anime-tongue-bleh-gif-5018411.gif", "https://giphy.com/gifs/demon-slayer-zenitsu-thundergod-VEzYdo930nTiTuVeMU.gif", "https://tenor.com/view/naruto-sasuke-mad-anime-gif-11475477.gif", "https://tenor.com/view/sasuke-thinking-anime-naruto-gif-13593873.gif", "https://tenor.com/view/llorar1-cry-sad-tears-anime-gif-5648908.gif", "https://tenor.com/view/demon-slayer-gif-20317224", "https://tenor.com/view/kimetsu-no-yaiba-demon-slayer-pig-angry-inosuke-hashibira-gif-14905892.gif"]
];
const yayGIFS = [
    ["https://tenor.com/view/goodjob-thumbsup-nice-excellent-naruto-gif-7248440.gif", ".gif", "https://tenor.com/view/asuna-sword-art-online-anime-kirito-smile-gif-15399998.gif"]
];
/*((genres[z] === genreRepliesArray[j]) || (genres[z-1] + genres[z] + genres[z+1] === genreRepliesArray[j]) || (genres[z-1] + genres[z] === genreRepliesArray[j])) */

function findAnimeAmongGenre() {
    fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${array}/page=1`).then(res => res.json()).then(data => {
        (data.title);
    });
}
console.log(fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${[1,6,10]}/page=1`).then(res => res.json()).then(data =>(data.title)));


function findAnimeAmongGenre() {
    fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${array}/page=1`).then(res => res.json()).then(data => {
        (data.title);
    });
}
/* animeArray = [];
                    for (genre of genreArray) {
                        genreidx = findAnimeAmongGenre(genre);
                        animeArray.push(genreidx);
                        console.log(animeArray);
                    } */