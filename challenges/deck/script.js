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
  gameInfoEl.textContent = `${cardNum + 1} of ${DICTIONARY.length}`;
}

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

updateWordAndNumberAndFontSize();

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

/////////////////////////////
//    PREV   //    NEXT    //
/////////////////////////////
function nextCard() {
  switchCard(1);
}

function prevCard() {
  switchCard(-1);
}

function switchCard(delta = 1) {
  let cardCount = DICTIONARY.length;
  cardNum = (cardCount + ((cardNum + delta) % cardCount)) % cardCount;

  console.log(cardNum);
  updateWordAndNumberAndFontSize();
}

//////////////////////
//     FLIP CARD    //
//////////////////////
document
  .querySelector(".word-card")
  .addEventListener("click", ({ currentTarget: card }) => {
    card.classList.toggle("flip");
  });

// switch cards
document.querySelector(".btn-random").addEventListener("click", randomWord);
document.querySelector(".btn-next").addEventListener("click", nextCard);
document.querySelector(".btn-prev").addEventListener("click", prevCard);

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

document.querySelector(".btn-quit").addEventListener("click", () => {
  // go to the main page
  document.location.assign("../../");
});
