function appendStyles(path) {
  let styleEl = document.createElement("style");
  styleEl.innerText = `@import "${path}";`;
  document.head.append(styleEl);
}

class Component {
  constructor() {
    const componentName = this.constructor.name.toLowerCase();

    const styleRef = `./components/${componentName}/style.css`;

    appendStyles(styleRef);
  }

  render(htmlString) {
    let frag = document.createRange().createContextualFragment(htmlString);

    return frag.firstElementChild;
  }
}

export default Component;
