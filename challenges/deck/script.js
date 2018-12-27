import dictionaries from "../../dictionaries/index.js";

// load dictionary based on url param
let dictionaryId = +new URLSearchParams(document.location.search).get(
  "dictionaryId"
);
let DICTIONARY = dictionaries[dictionaryId];

/////// How much words? ///////
var howMuchWords = document.querySelector("#howMuchWords");
howMuchWords.textContent = `total: ${DICTIONARY.length}`;

/////// Number of current word ///////
var wordNum;

document.querySelector("#dictName").textContent = DICTIONARY.name;

var wordNumber = document.querySelector("#wordNumber");

function updateNumber() {
  var currentNumber = wordNum;
  if (wordNum !== undefined) {
    currentNumber = wordNum + 1;
  } else if (wordNum === undefined) {
    currentNumber = 0;
  }
  wordNumber.textContent = "current: " + currentNumber;
}
updateNumber();

/////////////////////////////////////////////////////////
//////////////////       buttons       //////////////////
/////////////////////////////////////////////////////////
var russianWord = document.querySelector("#rus");
var hebrewWord = document.querySelector("#heb");
var emoji = document.querySelector("#emo");

function updateWordAndNumberAndFontSize() {
  let { heb, rus, trxn = "", emo = "" } = DICTIONARY[wordNum];

  russianWord.textContent = rus;
  emoji.textContent = emo;
  hebrewWord.textContent = `${heb}${trxn && ` [${trxn}]`}`;

  updateNumber();
}

/////////////////////////////
//  Random word generator  //
/////////////////////////////
function randomNumber() {
  wordNum = Math.floor(Math.random() * DICTIONARY.length);
} //done//

function randomWord() {
  var numberPrev = wordNum;
  randomNumber(); //done//
  while (numberPrev == wordNum) {
    console.log("Refresh!!!");
    randomNumber(); //done//
  }
  updateWordAndNumberAndFontSize();
}

document.querySelector(".btn-random").addEventListener("click", randomWord);

/////////////////////////////
//        Next button      //
/////////////////////////////
function nextWord() {
  if (wordNum !== undefined) {
    wordNum++;
  }
  if (wordNum === undefined) {
    wordNum = 0;
  }
  if (wordNum >= DICTIONARY.length) {
    wordNum = 0;
  }
  updateWordAndNumberAndFontSize();
}

document.querySelector(".btn-next").addEventListener("click", nextWord);

document.body.addEventListener("keydown", onKeyDown);

function onKeyDown({ key }) {
  switch (key) {
    case "ArrowRight":
      nextWord();
      break;
    case "ArrowLeft":
      prevWord();
      break;
  }
}
/////////////////////////////
//      Previous button    //
/////////////////////////////
function prevWord() {
  if (wordNum !== undefined) {
    wordNum--;
  }
  if (wordNum < 0 || wordNum === undefined) {
    wordNum = DICTIONARY.length - 1;
  }
  updateWordAndNumberAndFontSize();
}

document.querySelector(".btn-prev").addEventListener("click", prevWord);

//////////////////////
//      switch      //
//////////////////////
document
  .querySelector(".word-card")
  .addEventListener("click", ({ currentTarget: card }) => {
    card.classList.toggle("flip");
  });

/////////////////////////////
//        Play button      //
/////////////////////////////
/*var forward = true;
var backward = false;

var playWord = function() {
    if (x !== undefined && forward) {
        x++;
    }
    if (x !== undefined && backward) {
        x--;
    }
    if (x === undefined) {
        x = 0;
    }
    if (x >= myDictionary.length) {*/
/*window.clearInterval(play);*/
/*        console.log("END!");
        forward = false;
        backward = true;
    }
    if (x == 0) {
        forward = true;
        backward = false;
    }
    updateWordandNumber();
};
var play;
var playing = function() {
    play = window.setInterval(playWord, 3000);
}

var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playing);*/
