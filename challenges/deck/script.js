import dictionaries from "/dictionaries/index.js";

let dictionaryId = +new URLSearchParams(document.location.search).get(
  "dictionaryId"
);

let DICTIONARY = dictionaries[dictionaryId];

/////// How much words? ///////
var howMuchWords = document.querySelector("#howMuchWords");
howMuchWords.textContent = "total: " + DICTIONARY.length;

/////// Number of current word ///////
var wordNum;
console.log(wordNum);

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

/////// shrink current word ///////
function shrinkFont() {
  if (russianWord.textContent.length > 20) {
    russianWord.style.fontSize = "35px";
    console.log("shrink font size!");
  } else if (
    russianWord.style.fontSize == "35px" &&
    russianWord.textContent.length <= 20
  ) {
    russianWord.style.fontSize = "45px";
    console.log("restore font size!");
  }
}

/////////////////////////////////////////////////////////
//////////////////       buttons       //////////////////
/////////////////////////////////////////////////////////
var russianWord = document.querySelector("#russian");
var hebrewWord = document.querySelector("#hebrew");

function updateWordAndNumberAndFontSize() {
  let { heb, rus, trxn = "", emo = "" } = DICTIONARY[wordNum];

  russianWord.textContent = `${emo}${rus}`;
  hebrewWord.textContent = `${heb}${trxn && ` [${trxn}]`}`;

  updateNumber();
  shrinkFont();
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

var randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", randomWord);

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

var nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", nextWord);

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

var prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("click", prevWord);

//////////////////////
//      switch      //
//////////////////////
var rusSwitch = document.querySelector("#russian");
var hebSwitch = document.querySelector("#hebrew");

function rusSelect() {
  hebSwitch.classList.add("hiddenWord");
  rusSwitch.classList.remove("hiddenWord"); //done//
}

function hebSelect() {
  rusSwitch.classList.add("hiddenWord");
  hebSwitch.classList.remove("hiddenWord"); //done//
}

rusSwitch.addEventListener("click", rusSelect);
hebSwitch.addEventListener("click", hebSelect);

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
