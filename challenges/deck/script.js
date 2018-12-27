import dictionaries from "../../dictionaries/index.js";

// load dictionary based on url param
let dictionaryId = +new URLSearchParams(document.location.search).get(
  "dictionaryId"
);
let DICTIONARY = dictionaries[dictionaryId];

/////// Number of current word ///////

document.querySelector(".dictionary-name").textContent = DICTIONARY.name;

var cardNum = 0;
const gameInfoEl = document.querySelector(".game-info");

function updateNumber() {
  var currentNumber = cardNum;
  if (cardNum !== undefined) {
    currentNumber = cardNum + 1;
  } else if (cardNum === undefined) {
    currentNumber = 0;
  }

  gameInfoEl.textContent = `${cardNum} of ${DICTIONARY.length}`;
}
updateNumber();

/////////////////////////////////////////////////////////
//////////////////       buttons       //////////////////
/////////////////////////////////////////////////////////
var russianWord = document.querySelector("#rus");
var hebrewWord = document.querySelector("#heb");
var emoji = document.querySelector("#emo");

function updateWordAndNumberAndFontSize() {
  let { heb, rus, trxn = "", emo = "" } = DICTIONARY[cardNum];

  russianWord.textContent = rus;
  emoji.textContent = emo;
  hebrewWord.textContent = `${heb}${trxn && ` [${trxn}]`}`;

  updateNumber();
}

/////////////////////////////
//  Random word generator  //
/////////////////////////////
function randomNumber() {
  cardNum = Math.floor(Math.random() * DICTIONARY.length);
} //done//

function randomWord() {
  var numberPrev = cardNum;
  randomNumber(); //done//
  while (numberPrev == cardNum) {
    console.log("Refresh!!!");
    randomNumber(); //done//
  }
  updateWordAndNumberAndFontSize();
}

document.querySelector(".btn-random").addEventListener("click", randomWord);

document.querySelector(".btn-next").addEventListener("click", nextCard);

document.body.addEventListener("keydown", onKeyDown);

function onKeyDown({ key }) {
  switch (key) {
    case "ArrowRight":
      nextCard();
      break;
    case "ArrowLeft":
      prevCard();
      break;
  }
}

/////////////////////////////
//        Next button      //
/////////////////////////////
function nextCard() {
  if (cardNum !== undefined) {
    cardNum++;
  }
  if (cardNum === undefined) {
    cardNum = 0;
  }
  if (cardNum >= DICTIONARY.length) {
    cardNum = 0;
  }
  updateWordAndNumberAndFontSize();
}
/////////////////////////////
//      Previous button    //
/////////////////////////////
function prevCard() {
  if (cardNum !== undefined) {
    cardNum--;
  }
  if (cardNum < 0 || cardNum === undefined) {
    cardNum = DICTIONARY.length - 1;
  }
  updateWordAndNumberAndFontSize();
}

document.querySelector(".btn-prev").addEventListener("click", prevCard);

//////////////////////
//     FLIP CARD    //
//////////////////////
document
  .querySelector(".word-card")
  .addEventListener("click", ({ currentTarget: card }) => {
    card.classList.toggle("flip");
  });
