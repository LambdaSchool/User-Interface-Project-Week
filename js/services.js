class ServicesTabContent {
  constructor(el) {
    this.el = el;
  }

  select() {
    const content = document.querySelectorAll('.services-tab-content');
    Array.from(content).forEach(el => el.classList.remove('content-selected'));
    this.el.classList.add('content-selected');
  }
}

class ServicesTab {
  constructor(el) {
    this.el = el;
    this.data = this.el.dataset.tab;
    this.tabElement = document.querySelector(`.services-tab-content[data-tab="${this.data}"]`);
    this.tabContent = new ServicesTabContent(this.tabElement);
    this.el.addEventListener('click', () => this.select());
    this.el.addEventListener('mousedown', () => event.preventDefault());
  }

  select() {
    const tabs = document.querySelectorAll('.services-tab');
    Array.from(tabs).forEach(el => el.classList.remove('tab-selected'));
    this.el.classList.add('tab-selected');
    this.tabContent.select();
  }
}

let tabs = document.querySelectorAll('.services-tab');
tabs = Array.from(tabs).map(el => new ServicesTab(el));

tabs[0].select();
