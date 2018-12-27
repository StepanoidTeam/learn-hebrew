import Component from "../component";

export default class Card extends Component {
  constructor() {
    super();

    let card = document.querySelector(".card");
    card.addEventListener("click", flipCard);
  }

  flipCard(event) {
    card.classList.toggle("is-open");
    console.log(event);
  }
}
