import { myDictionary } from "./dictionary.js";

/////// How much words? ///////
var howMuchWords = document.querySelector("#howMuchWords");
howMuchWords.textContent = "total: " + myDictionary.length;

/////// Number of current word ///////
var letterNumber;
console.log(letterNumber);

var wordNumber = document.querySelector("#wordNumber");

function updateNumber() {
  var currentNumber = letterNumber;
  if (letterNumber !== undefined) {
    currentNumber = letterNumber + 1;
  } else if (letterNumber === undefined) {
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
  russianWord.textContent = myDictionary[letterNumber].rus;
  hebrewWord.textContent = myDictionary[letterNumber].heb;

  updateNumber();
  shrinkFont();
}

/////////////////////////////
//  Random word generator  //
/////////////////////////////
function randomNumber() {
  letterNumber = Math.floor(Math.random() * myDictionary.length);
} //done//

function randomWord() {
  var numberPrev = letterNumber;
  randomNumber(); //done//
  while (numberPrev == letterNumber) {
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
  if (letterNumber !== undefined) {
    letterNumber++;
  }
  if (letterNumber === undefined) {
    letterNumber = 0;
  }
  if (letterNumber >= myDictionary.length) {
    letterNumber = 0;
  }
  updateWordAndNumberAndFontSize();
}

var nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", nextWord);

/////////////////////////////
//      Previous button    //
/////////////////////////////
function prevWord() {
  if (letterNumber !== undefined) {
    letterNumber--;
  }
  if (letterNumber < 0 || letterNumber === undefined) {
    letterNumber = myDictionary.length - 1;
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
