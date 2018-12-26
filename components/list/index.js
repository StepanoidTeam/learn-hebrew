import Component from "../component.js";

const defaultProps = { items: [], onClick: () => undefined };

export default class List extends Component {
  constructor(props) {
    super();

    Object.assign(this, defaultProps, props);
  }

  renderItem(item) {
    let itemEl = super.render(`
      <li class="list-item">
              <div class="list-item__icon"><i class="material-icons">${
                item.icon
              }</i></div>
              <div class="list-item__text-block">
                  <div class="list-item__text-primary">${item.primaryText}</div>
                  <div class="list-item__text-secondary">${
                    item.secondaryText
                  }</div>
              </div>
      </li>`);

    itemEl.addEventListener("click", () => this.onClick(item));

    return itemEl;
  }

  render() {
    let listEl = super.render(`<ul class="list"></ul>`);

    this.items
      .map(item => this.renderItem(item))
      .forEach(li => listEl.append(li));

    return listEl;
  }
}
