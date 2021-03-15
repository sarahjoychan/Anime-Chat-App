const userRepliesObj = {goodReplies: goodRepliesArray, badReplies: badRepliesArray, genreReplies: genreRepliesArray, confusedReplies: confusedRepliesArray};
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

const animePromptsObj = {happyPrompts: happyPromptsArray, unhappyPrompts: unhappyPromptsArray, animeDef: animeDefArray};
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
/* 1) if no prompt exsists post intial prompt
    2) if there is a prompt callback function newPrompt()*/
let lastPrompt = document.getElementById("prompt");

function checkIfTheresAPrompt() {
    let prompt1 = "Hi! Do you like to watch anime?? (please respond with; 'yes', 'no' or 'I don't watch anime.')"
    if (lastPrompt.children.length ==  0) {
        lastPrompt.innerHTML = prompt1;
    } 
}

let lastInput = document.getElementById("user-input").lastElementChild.innerHTML;

/* add user-input to chat-box */
function addChatToChatBox(inputReply, productOfInput) {
    const mainUserDiv = document.getElementById("user-input");
    let userDiv = document.createElement("div");
    userDiv.id = "lastUserInput"
    userDiv.innerHTML = `${input.value}`;
    mainUserDiv.appendChild(userDiv);  
    /*const mainUserDivTime = document.getElementById("user-input");*/
    
}
function outputPrompts(inputReply) {
    /*make it so that you can compare the users-input with the array's of expected user-replies*/
    let productOfInput;
    let text = lastInput.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/r u/g, "are you");

    if (compare(userReplyObj, animePromptObj, text)) {
        /* search for excat match in compare function*/
        productOfInput = compare(userReplyObj, animePromptObj, text);
    } else if (text.match(/thank/gi)) {
        productOfInput = "You're welcome!" + genrePrompt[0];
    } else {
        /* if all else fails, return a confused prompt */
        productOfInput = confusedPrompts[Math.floor(Math.random() * confusedPrompts.length)];
    }
    addChatToChatBox(inputReply, productOfInput);
}
function compare(userReplyObj, animePromptObj, string) {
    let genrePrompt = animePromptObj.genrePrompts;
    let genreReply = userReplyObj.genreReplies;
    let goodReply = userReplyObj.goodReplies;
    let badReply = userReplyObj.badReplies;
    let userReplyFound = false;
    let animePromptOutput;
    for (let i = 0; i < goodReply.length; i++) {
        for (let x = 0; x < goodReply[i].length; x++) {
            if (goodReply[i][x] === string) {
                let animeReply = animePromptObj.happyPrompts[i];
                animePromptOutput = animeReply[Math.floor(Math.random() * animeReply.length)] + genrePrompt[0];
                userReplyFound = true;
                break;
            }
        }
        if (userReplyFound) {
            /* stop outer loop iterating when/if reply is found */
            break;
        } 
    }
    if (userReplyFound !== true) {
        for (let y = 0; y < badReply.length; y++) {
            for (let k = 0; k < badReply[y].length; k++) {
                if (badReply[y][k] === string) {
                    let animeReply = animePromptObj.unhappyPrompts[y];
                    animePromptOutput = animeReply[Math.floor(Math.random() * animeReply.length)] + genrePrompt[0];
                    userReplyFound = true;
                    break;
                }
            }
            if (userReplyFound) {
                break;
            }
        }
    } else if (userReplyFound !== true) {
        /* if userReplyFound still equals false, now check against genresArray*/
        let genres = string.split(" ");
        for (let j = 0; j < genreReply.length; j++) {
            for (let z = 0; z < genres.length; z++) {
                /* check if any elements in genres(string) array do not equal any of the elements in genreReply array*/
                /* if any elements do not equal one another; delete those elements in genres(string) array*/
                /* with any elements that still remain in the genres(string) array; create a new array called genreArray that uses the filter method with the callback function findgenre() */
                if (!genreReply[j] !== genres[z]) {
                    delete genres[z];
                } else if (genreReply[j] === genres[z]) {
                    let genreArray = genres.filter(findGenre());
                    /* Now use this array to find the corresponding anime titles that fit the required genre that are stored in genreArray and store these new anime titles into a new array called animeArray */
                    let animeArray = findAnimeAmongGenre(generArray);
                    /* if anime is not sorted by popularity ratings then: */
                    /* animePromptOutput = animeArray[Math.floor(Math.random() * animeArray.length)] + animeArray[Math.floor(Math.random() * animeArray.length)] + animeArray[Math.floor(Math.random() * animeArray.length)] */
                    /* else: if anime is sorted by popularity ratings */
                    animePromptOutput = animeArray[0] + ", " + animeArray[1] + " & " + animeArray[2];
                    userReplyFound = true; 
                    break;
                } 
            }
        }
    }
    return animePromptObj; 
}


let restart = function() {
}

let genreTitle = document.getElementById('genre-title');

function findAnimeAmongGenre(array) {
    fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${array}/page=1`).then(res => res.json()).then(data => {
        console.log(data.title);
        genreTitle.innerHTML = data.title;
    });
} 

function findGenre(genreEntered) {
    var genreNum;
    switch(animeType){
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

