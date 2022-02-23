/*
  Advices
  - Always Check The Console
  - Take Your Time To Name The Identifiers
  - DRY

  Steps To Create The Project
  [01] Create HTML Markup
  [02] Add Styling And Separate From Logic
  [03] Create The App Logic
  ---- [01] Add Levels
  ---- [02] Show Level And Seconds
  ---- [03] Add Array Of Words
  ---- [04] ِAdd Start Game Button
  ---- [05] Generate Upcoming Words
  ---- [06] Disable Copy Word And Paste Event + Focus On Input
  ---- [07] Start Play Function
  ---- [08] Start The Time And Count Score
  ---- [09] Add The Error And Success Messages
  [04] Your Trainings To Add Features
  ---- [01] Save Score To Local Storage With Date
  ---- [02] Choose Levels From Select Box
  ---- [03] Break The Logic To More Functions
  ---- [04] Choose Array Of Words For Every Level
  ---- [05] Write Game Instruction With Dynamic Values
  ---- [06] Add 3 Seconds For The First Word
*/
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
const lvls = {
    Easy: 5,
    Normal: 3,
    Hard: 2,
};
//Default level
let defaultLevelName = "Easy";
let defaultLevelSecond = lvls[defaultLevelName];

//catch selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let playAgain=document.querySelector(".restart");

//setting level name, seconds, score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSecond;
timeLeftSpan.innerHTML = defaultLevelSecond;
scoreTotal.innerHTML = words.length;

//Disable paste event
input.onpaste = function () {
    return false;
};

//start game
startButton.onclick = function () {
    this.remove();
    input.focus();
    //Generate word function
    GenerateWords();
};

function GenerateWords() {
    //Get random word from array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let indexOfRandomWord = words.indexOf(randomWord);
    words.splice(indexOfRandomWord, 1);
    upcomingWords.innerHTML = "";

    theWord.innerHTML = randomWord;

    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let text = document.createTextNode(words[i]);
        div.appendChild(text);
        upcomingWords.appendChild(div);
    }

    startGame();
}

function startGame() {
    timeLeftSpan.innerHTML = defaultLevelSecond;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML == 0) {
            clearInterval(start);

            if (theWord.innerHTML.toLowerCase() == input.value.toLowerCase()) {
                input.value = "";
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    GenerateWords();
                } else {
                    let span = document.createElement("span");
                    span.className = "good";
                    let spanText = document.createTextNode("You're a Hero");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);

                    upcomingWords.remove();
                    theWord.remove();
                    input.remove();
                    replay();
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);

               upcomingWords.remove();
                theWord.remove();
                input.remove();
                replay();
            }
        }
    }, 1000);
}
function replay() {
    playAgain.style.display="block";
    playAgain.onclick=function (){
        location.reload();
    };
}
