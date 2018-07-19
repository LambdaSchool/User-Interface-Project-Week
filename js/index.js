// JS goes here
// Dropdowns


class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".dropdown-btn");
        this.content = this.element.querySelector(".dropdown-content");
        this.button.addEventListener("click", () => { this.toggleContent() });
       

    }
    toggleContent() {
        this.content.classList.toggle("dropdown-hidden");
    }
}

let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

//Tabs

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll(".tabs-link");
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });
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
        return this.element.querySelector(`.tabs-item[data-tab="${data}"]`)
    }

}

class TabsLink {
    constructor(link, parent) {
        this.link = link;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.link.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    };

    select() {
        this.link.classList.add('tabs-link-selected');
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove('tabs-link-selected');
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
tabs = Array.from(tabs).map(tab => new Tabs(tab));

