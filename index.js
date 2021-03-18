const submitField = document.getElementById("input");
const submitInput = document.getElementById("submit");

function submitMessage() {
    if (submitField.value) {
        let inputReply = submitField.value;
        submitField.value = "";
        outputPrompts(inputReply);
    }
}

document.addEventListener("DOMContentLoaded", () => {
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
const prompt1 = "Hi there! Do you like to watch anime??";
const lastPrompt = document.getElementById("promptMessages");
  function checkIfTheresAPrompt() {
      if (lastPrompt.innerHTML.length === 0) {
        productOfInput = prompt1;
        addChatToChatBox(productOfInput);
      } 
  }

function restart() {
    console.log("restart");
    $("#promptMessages").empty();
}

/* add both user-input & outputPrompts to chat-box */
function addChatToChatBoxUser(inputReply) {
    const userRepliesContainer = document.getElementById("userMessages");

    /* add timeStamp to user messages*/
    let timestamp2 = document.createElement("div");
    timestamp2.className = "timestamp2";
    timestamp2.innerText = `${new Date()
        .toString()
        .split(" ")
        .slice(0,5)
        .join(" ")}`;
 
    let userInputDiv = document.createElement("div");
    userInputDiv.id = "guest";
    userInputDiv.className = "guest response";
    userInputDiv.innerHTML = `<span>${inputReply}</span>`;
    userRepliesContainer.appendChild(userInputDiv);
    userRepliesContainer.appendChild(timestamp2);

    userRepliesContainer.scrollTop = userRepliesContainer.scrollHeight - userRepliesContainer.clientHeight; 
}

function addChatToChatBox(productOfInput) {
    const promptRepliesContainer = document.getElementById("promptMessages");

    let animeOutputDiv = document.createElement("div");
    let animeOutputText = document.createElement("span");

    let timestamp = document.createElement("div");
    timestamp.className = "timestamp"
    timestamp.innerText = `${new Date()
        .toString()
        .split(" ")
        .slice(0,5)
        .join(" ")}`;

    animeOutputDiv.id = "anime";
    animeOutputDiv.appendChild(animeOutputText);
    /* if product of input does not match any expected input, return a confused prompt*/
    animeOutputText.innerText = `${productOfInput}`;
    
    promptRepliesContainer.appendChild(animeOutputDiv);
    promptRepliesContainer.appendChild(timestamp);

    promptRepliesContainer.scrollTop = promptRepliesContainer.scrollHeight - promptRepliesContainer.clientHeight;
}

const confusedPrompts = ["I'm confuesed.", "Bro.. I literally did'nt understand a single thing you just said.", "I think you have an error in your message.", "Are you sure your speaking english?", "Try again.", "Sorry bro I only speak english.. "];


function outputPrompts(inputReply) {
    /*make it so that you can compare the users-input with the array's of expected user-replies*/
    let userReplyFound = false;
    let productOfInput;
    let text = inputReply.toLowerCase().replace(/\d/g, "").trim("");
    text = text
    .replace(/ a /g, "") 
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
    } else if (userReplyFound !== false) {
        /* if all else fails, return a confused prompt */
        productOfInput = "Sorry bro, I only understand 'yes', 'no', 'genres' or a reasonable facsimile thereof. =)";
    }
    //should update Document
    setTimeout(() => {
        addChatToChatBox(productOfInput);
      }, 500);

    return addChatToChatBoxUser(inputReply); 
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
], genreRepliesArray:["action", "adventure", "cars", "comedy", "dementia", "demons", "mystery", "drama", "ecchi", "fantasy", "game", "hentai", "historical", "horror", "kids", "magic", "martial arts", "mecha", "music", "parody", "samurai", "romance", "school", "sci fi", "shoujo", "shoujo ai", "shounen", "shounen ai", "space", "sports", "super power", "vampire", "yaoi", "yuri", "harem", "slice of life", "supernatural", "military", "police", "psychological", "thriller", "seinen", "josei"]
};

const animePromptsObj = {happyPrompts:[
    ["Awesome!", "Fantastic!!!", "Yay!", "Wonderful!", "Awesome sauce!!"],
    ["Yippie!!", "That's what I like to hear!"]
], unhappyPrompts:[
    ["Hearing that makes me mad. So lets get glad!"],
    ["I'm just gonna pretend you didn't just say that."],
    ["Dang bro!... You sure are a piece of work homie. Let's just pretend you didn't say that. Anyhoo "],
    ["We'll you should!! That's why I'm here to help you change that!"]
    ["Do you understand the words that are coming out of my mouth?!? You know what, let's just get on with this"]
], genrePrompt:" Let's find you some cool anime to watch! Step 1: Enter up to 3 of your favorite genres with each genre seperated by both a comma then a space. Step 2: Press enter and let me work my magic ;)"};

confusedPrompts:["I'm confuesed.", "Bro.. I literally did'nt understand a single thing you just said.", "I think you have an error in your message.", "Are you sure your speaking english?", "Try again.", "Sorry bro I only speak english.. "];


function compare(userReplyObj, animePromptsObj, string, _findGenre, findAnimeAmongGenre) {
    let genresArray = [];
    let animeArray = [];
    let genreRepliesArray = userReplyObj.genreRepliesArray;
    let goodReply = userReplyObj.goodReplies;
    let badReply = userReplyObj.badReplies;
    let unhappyPrompts = animePromptsObj.unhappyPrompts;
    let happyPrompts = animePromptsObj.happyPrompts;
    let productOfInput;
    let userReplyFound = false;

    function findAnimeAmongGenre(genresArray) {
        const array = genresArray;
        let results;
        let amimeArray = [];
        let returnAnime = [];
        let anime1;
        let anime1a;
        let anime2;
        let anime2a;
        return fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&tv&genre=genresArray&order_by=members&sort=desc/page=1`).then(res => res.json()).then(function (data) {
            results = data.results;
            returnAnime.push(results[(Math.floor(Math.random() * 50))]);
            returnAnime.push(results[(Math.floor(Math.random() * 50))]);
            anime1 = returnAnime[0].title;
            anime1a = returnAnime[0].score;
            anime2 = returnAnime[1].title;
            anime2a = returnAnime[1].score;
            animeArray.push(anime1, anime1a, anime2, anime2a);
            console.log(results, "hi");
            productOfInput ="Anime Option 1: '" + animeArray[0] + "'  Rating: " + animeArray[1] + "  Anime Option 2: '"  + animeArray[2] + "'  Rating: " + animeArray[3] + "";
            
            addChatToChatBox(productOfInput);  
        });
    }

    if (userReplyFound !== true) {
        for (let i = 0; i < goodReply.length; i++) {
            for (let x = 0; x < goodReply[i].length; x++) {
                if (goodReply[i][x] === string) {

                    let animeReply = animePromptsObj.happyPrompts[i];
                    productOfInput = animeReply[Math.floor(Math.random() * animeReply.length)] + " " + animePromptsObj.genrePrompt;

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

                    let animeReply = animePromptsObj.unhappyPrompts[y];
                    productOfInput = animeReply[Math.floor(Math.random() * animeReply.length)] + animePromptsObj.genrePrompt;
                    
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
                /* check to see if any elements in genres(string) array do not equal any of the elements in genreReply array*/
                /* with any elements that still remain in the genres(string) array; create a new array called genresArray that uses the map method with the callback function findgenre() */
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
                    /* Now use this array to find the corresponding anime titles that fit the required genre that are stored in genreArray and store these new anime titles into a new array called animeArray */
                    if (genresArray.length !== 0) {
                        userReplyFound = true;
                        let animeObjects = findAnimeAmongGenre(genresArray);
                        console.log(animeArray[1]);
                          
                    } else {
                        console.log(productOfInput, "does not equal any expected input");
                        productOfInput = "";
                    }      
                }  
            }                
    }   
    } 
    return productOfInput; 
}

/* Code Sources:
Poopongpanit, B (March 2021) Web Post / https://levelup.gitconnected.com/how-to-create-a-simple-web-app-using-javascript-d27b28459fad
Walters, M (March 2021) Web Post Comment Section https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript?fbclid=IwAR1819ozMNV7m0IWpl4TEzXpSML1FOy_J2unrv0QLnAIVyQlLugyLqcFwso
(March 2021) https://www.w3schools.com/jsref/prop_element_lastelementchild.asp
(March 2021) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
API Anime Source https://jikan.docs.apiary.io/#reference/0/search/meta-request-example+schema
Pap, S (March 2021) GitHub Source / https://github.com/sylviapap/chatbot/blob/master/index.js
*/


/* fetch statement used: it seaches for tv anime shows based on the genres inputed and returns the most highly rated shows through the api's 'order_by' and sort methods
`https://api.jikan.moe/v3/search/anime?q=&page=1&tv&genre=1&order_by=members&sort=desc/page=1`*/

