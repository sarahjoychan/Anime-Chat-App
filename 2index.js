document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
  });
});

/*if (e.code === "Enter") {
    let input = inputField.value;
    console.log(`I typed '${input}'`)
  }*/
  /*let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();*/

 
var input = document.getElementById('input');
let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
 var output = ""
function promptResponses(text) {
  if (text === "yes") {
    output = "Yay! Can I help you find some cool anime to watch? (if yes respond 'yay', if no respond 'nay)'"
  }
  if (text === "no") {
    output = "(grumble grumble.. wow this one sure is a piece of work)"
    
  } else if (text === "no") {
    output = "Well you should! And I'm gonna be the one to help you change that!!"
  }
  if (text === "i dont watch anime") {
    output = "Well you should! And I'm gonna be the one to help you change that!!"
  }
}



/*   THIS IS NOT MY CODE BUT I AM REFREENCING IT!!!!!
https://github.com/sylviapap/chatbot/blob/master/index.js

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } 

  // Update DOM
  addChat(input, product);
}*/

/*   THIS IS NOT MY CODE BUT I AM REFREENCING IT!!!!!
https://github.com/sylviapap/chatbot/blob/master/index.js

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
 
  botText.innerText = "Typing...";
  
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
   
  }, 
  )

}*/
/* this enables the textarea to not submit if the user just presses enter
https://jkorpela.fi/forms/enter.html
<script type="text/javascript">
function noenter() {
  return !(window.event && window.event.keyCode == 13); }
</script>*/