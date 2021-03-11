let animeDiv = document.getElementById('anime');
let animePic = document.getElementById('anime-pic');

let handleClick = function() {
    fetch(`https://api.jikan.moe/v3/anime/1`).then(res => res.json())
    .then(data => {
        animeDiv.innerHTML = `<p> ${data.title} </p>`
        animePic.innerHTML = `<img src = "${data.image_url}" />`
    });
}
 
