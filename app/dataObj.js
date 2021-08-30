const userReplyObj = {
  goodReplies:[
  "ah yes", "yes", "sure", "ok", "okay", "fantastic", "awesome", "incredible", "cool", "fun stuff", "yay", "lets us do this", "i love you"], 
  badReplies:[
  "no", "no thanks","never", "nay", "i think i will pass", "i decline", "sorry no", "sorry no thanks", "nope", "nada"], 
  genreRepliesArray:[
    "action", "adventure", "cars", "comedy", "dementia", "demons", "mystery", "drama", "ecchi", "fantasy", "game", "hentai", "historical", "horror", "kids", "magic", "martial arts", "mecha", "music", "parody", "samurai", "romance", "school", "sci fi", "shoujo", "shoujo ai", "shounen", "shounen ai", "space", "sports", "super power", "vampire", "yaoi", "yuri", "harem", "slice of life", "supernatural", "military", "police", "psychological", "thriller", "seinen", "josei"]
};

const happyPrompts = [
  "Awesome!", "Fantastic!!!", "Yay!", "Wonderful!", "Awesome sauce!!", "Yippie!!", "That's what I like to hear!"];
const unhappyPrompts = [
  "Hearing that makes me mad. So lets get glad!", "I'm just gonna pretend you didn't just say that.", "Dang bro!... You sure are a piece of work homie. Let's just pretend you didn't say that. Anyhoo ",
  "Well you should!! That's why I'm here to help you change that!",
  "Do you understand the words that are coming out of my mouth?!? You know what, let's just get on with this"];
 const genrePrompt = [
    ` \n\n Now I am going to find you some awesome anime to watch! \n\n Step 1: Enter up to 3 of your favorite genres with each genre separated by both a comma then a space. \n\n Step 2: Press enter and let me work my magic ;)`, " \n\n Now let's find you some MORE awesome anime to watch! \n\n Step 1: Enter up to 3 of your favorite genres with each genre separated by both a comma then a space. \n\n Step 2: Press enter and let me work my magic ;)"];
const myselfPrompt =
"I am someone who simply enjoys anime! Wanna see how I like to watch my favorite anime shows?";

const confusedPrompts = [
  "I'm confused.", "Bro.. I literally didn't understand a single thing you just said.", "I think you have an error in your message.", "Are you sure you're speaking English?", "Try again.", "Sorry bro I only speak English.. "
];

const helloGif = [
  'https://tenor.com/view/kakashi-gif-19433121.gif','https://tenor.com/view/hi-hey-hello-wave-anime-gif-4608178.gif', 'https://tenor.com/view/the-promised-neverland-anime-emma-happy-hello-gif-17775955.gif','https://tenor.com/view/demon-slayer-nezuko-gif-14868285.gif', 'https://tenor.com/view/jiraiya-popscicle-naruto-gif-3461599.gif', 'https://tenor.com/view/kisumi-wave-hi-hello-free-gif-9416181.gif', 'https://tenor.com/view/kakushigoto-kakushi-hime-anime-scenery-anime-gif-anime-gif-17667937.gif'];

const unhappyGif = [
  'https://tenor.com/view/naruto-sasuke-mad-anime-gif-11475477.gif', 'https://tenor.com/view/zenitsu-demon-slayer-kimetsu-no-yaiba-manga-series-smh-gif-17682808.gif', 'https://tenor.com/view/kimetsu-no-yaiba-demon-slayer-pig-angry-inosuke-hashibira-gif-14905892.gif', 'https://tenor.com/view/sasuke-thinking-anime-naruto-gif-13593873.gif', 'https://tenor.com/view/emma-the-promised-neverland-yakusoku-gif-18317920.gif', 'https://tenor.com/view/chichi-mad-angry-dragonballs-anime-gif-11397705.gif', 'https://tenor.com/view/vegeta-screaming-dragon-ball-angry-mad-gif-16799801.gif', 'https://tenor.com/view/attack-on-titan-gif-5470804.gif', 'https://tenor.com/view/demon-slayer-anime-gif-19525388.gif', 'https://tenor.com/view/naruto-tsunade-mad-gif-14374991.gif'];

const happyGif = [
    'https://tenor.com/view/inosuke-kimetsu-no-yaba-gif-15023737.gif', 'https://tenor.com/view/demon-slayer-inosuke-amazed-sparkle-gif-15052588.gif', 'https://tenor.com/view/gab-anime-dancing-happy-gif-8111637.gif', 'https://tenor.com/view/happy-japanese-anime-excited-gif-9596035.gif', 'https://tenor.com/view/happy-dragon-ball-z-gohan-dende-excited-gif-20827628.gif', 'https://tenor.com/view/shinobu-kocho-happy-demon-slayer-anime-gif-16843136.gif', 'https://tenor.com/view/happy-anime-gif-19923838.gif', 'https://tenor.com/view/happy-anime-sparkle-gif-6014343.gif', 'https://tenor.com/view/peace-smile-cute-anime-happy-gif-17511935.gif'];

const myselfGif = 'https://tenor.com/view/aot-meme-attack-on-titan-meme-attack-on-titan-dance-attack-on-titan-monday-attack-on-titan-waiting-gif-20378374.gif';

