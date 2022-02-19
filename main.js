const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
];
const lvls={
"Easy": 5,
"Normal":3,
"Hard":2
};
//Default level
let defaultLevelName="Normal";
let defaultLevelSecond=lvls[defaultLevelName];

//catch selectors
let startButton=document.querySelector(".start");
let lvlNameSpan=document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal=document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

//setting level name, seconds, score
lvlNameSpan.innerHTML=defaultLevelName;
secondsSpan.innerHTML=defaultLevelSecond;
timeLeftSpan.innerHTML=defaultLevelSecond;
scoreTotal.innerHTML=words.length;

//Disable paste event
input.onpaste=function(){
    return false;
}

//start game
startButton.onclick=function(){
    this.remove();
    input.focus();
    //Generate word function
    GenerateWords();
}

function GenerateWords(){
    //Get random word from array
    let randomWord=words[Math.floor(Math.random()*words.length)];
    let indexOfRandomWord=words.indexOf(randomWord);
    words.splice(randomWord,1);
}



