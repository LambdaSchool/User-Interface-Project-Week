class Tabs {
  constructor (element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.content = document.querySelector(`.tab-content[data-content="${this.data}"]`)
    this.content = new TabContents(this.content);

    this.element.addEventListener('click', () => {this.select()});
    this.element.addEventListener('click', () => {this.content.select()});
  }

  select() {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(item => item.classList.remove('selected-tab'));
    this.element.classList.toggle('selected-tab');
  }
}

class TabContents {
  constructor (element) {
    this.element = element;
  }

  select() {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(item => item.classList.remove('display-content'));
    this.element.classList.toggle('display-content');
  }
}

let tabSelect = document.querySelectorAll('.tab-button');
tabSelect.forEach(item => new Tabs(item));
console.log(tabSelect);
