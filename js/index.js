// JS goes here
const mainNav = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.add("visibility");
})

closeBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.remove("visibility");
})

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll('.tabs-link');
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
        return this.element.querySelector(`#tab-content[data-tab="${data}"]`);
    }

}

class TabsLink {
    constructor(link, parent) {
        this.link = link;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.TabsItem);
        this.link.addEventListener('click', () => {
            this.tabs.updateActive(this);

            this.select();
        });
    }

    select() {
        this.link.classList.add("tabs-link-selected");
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove("tabs-link-selected");
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