  
let animeDiv = document.getElementById('anime');
/*let animePic = document.getElementById('anime-pic');*/

/*let handleClick = function() {
    fetch(`https://api.jikan.moe/v3/anime/1`).then(res => res.json())
    .then(data => {
        animeDiv.innerHTML = `<p> ${data.title} </p>`
        animePic.innerHTML = `<img src = "${data.image_url}" />`
    });
}*/

let genreTitle = document.getElementById('genre-title');
let findAnimeAmongGenre = function() {
    fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${6}/page=1`).then(res => res.json()).then(data => {
        console.log(data.title);
        genreTitle.innerHTML = data.title;
    });
}

/*
document.addEventListener("DOMContentLoaded", () => {
    if (onclick === "submit") {
        var input = document.getElementById("input").value;
        document.getElementById("user-input").innerHTML = input;
        output(input);    
         }
      }); */

/*function output(input) {
    let text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
}*/


/* add user-input to chat-box */
let addChatToChatBox = function() {
    const mainUserDiv = document.getElementById("user-input");
    let userDiv = document.createElement("div");
    userDiv.id = "lastUserInput"
    userDiv.innerHTML = `${input.value}`;
    mainUserDiv.appendChild(userDiv);  
    /*const mainUserDivTime = document.getElementById("user-input");*/
    
}

/* 1) if no prompt exsists post intial prompt
    2) if there is a prompt callback function newPrompt()*/
let lastPrompt = document.getElementById("prompt");

function checkIfTheresAPrompt() {
    let prompt1 = "Hi! Do you like to watch anime?? (please respond with; 'yes', 'no' or 'I don't watch anime.')"
    if (lastPrompt.children.length ==  0) {
        lastPrompt.innerHTML = prompt1;
    } else {
        newPrompt();
    }
}



let lastInput = document.getElementById("user-input").lastElementChild.innerHTML;

console.log(lastInput);

let newPrompt = function(lastInput, lastPrompt) {
    let text = lastInput.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");


}

/*let prompt2 = "YAY! Can I help you find some cool anime to watch?";
    let prompt3 = "This is a different question";


    } else if (promptParagraph.innerHTML ==  prompt1){
        promptParagraph.innerHTML = prompt2;
    } else if (promptParagraph.innerHTML ==  prompt2){
        promptParagraph.innerHTML = prompt3;
    }

    */




let restart = function() {

}

/*const mainDiv = document.getElementById("prompt");
    let mysideDiv = document.createElement("div");
    mysideDiv.id = "generated-output";
    mysideDiv.innerHTML = `${promptParagraph}`;
    mainDiv.appendChild(mysideDiv);*/

/*<img src="https://tenor.com/view/kakashi-gif-19433121.gif" class="gif" alt="Anime GIF waving at you"></img>*/
/*var genre = genreEntered
let findGenre = function(genreEntered) {
    var animeType = genreEntered.toLowerCase();
    var genreNum = [];
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
          genreNum = 23;
          break;  
    }
    return genreNum;

} */

/*$("button").click(function(){
    $(".chat-box").show("fast");
  });*/
