import List from "./components/list/index.js";

import dictionaries from "./dictionaries/index.js";

function selectDictionary({ id }) {
  const url = `challenges/deck/?dictionaryId=${id}`;

  document.location.assign(url);
}

var dictionaryList = new List({
  items: dictionaries.map((d, index) => ({
    icon: "book",
    primaryText: d.name,
    secondaryText: `words: ${d.length}`,
    id: index
  })),
  onClick: selectDictionary
}).render();

document.querySelector(".dictionaries").append(dictionaryList);
