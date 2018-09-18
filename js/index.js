
class TabLink {
  constructor(element){
    this.element = element;
    this.tabData = this.element.dataset.tab;
    this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    console.log(this.tabData);

    if(this.tabData === 'all') {
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards;
    }

    this.cards = Array.from(this.cards).map((card) => {
      return new TabCard(card);
    });

    this.element.addEventListener('click', () => this.selectTab());
  }

  selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach( tab => tab.classList.remove('active-tab'));
    this.element.classList.add('active-tab');

    const cards = document.querySelectorAll('.card');
    cards.forEach( card => card.style.display = 'none');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element){
    this.element = element;
  }
  selectCard(){
    this.element.style.display = null;
  }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map((tab) => {
  return new TabLink(tab);
});

tabs[0].selectTab();
