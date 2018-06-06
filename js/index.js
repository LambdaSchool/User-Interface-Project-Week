// JS goes here


//Services page//
class Tabs {
  constructor(element) {
    this.element = element;
    console.log(element);
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    console.log(this.links);
    this.activeLink = this.links[0];
    this.init();
  }

  init() { 
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.element.dataset.tab);  
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();  
    });
  }

  select() {
    this.element.classList.add("tabs-link-selected");
    this.tabsItem.select();  
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected"); 
    this.tabsItem.deselect(); 
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("tabs-item-selected");
    
  }

  deselect() {
    this.element.classList.remove("tabs-item-selected");
  }
}

let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map( element => new Tabs(element));


//Site-wide//
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".hamburger");
console.log(btn);
btn.addEventListener("click", function() {
  overlay.classList.toggle("hidden");
});

/*class Expand {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelectorAll(".hamburger");
    this.content = this.element.querySelectorAll(".expand-content");
    this.button.addEventListener("click", function() {
      this.toggleContent();
    });
  }

  toggleContent() {
    this.content.classList.toggle("hidden");
  }
}
let expand = document.querySelectorAll('.menu');
expand = Array.from(expand).map( element => new Expand(element));*/


let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.add("navbar-scroll");
});

