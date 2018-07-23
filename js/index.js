//Menu Bars Icon toggle animation
function myFunction(x) {
    x.classList.toggle("change");
}

//Nav Bar Expansion Functionality
const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);

//Tabs Functionality
class Tabs {
    constructor(element) {
        this.element = element;
        this.buttons = this.element.querySelectorAll(".tabs-button");
        this.buttons = Array.from(this.buttons).map( button => {
            return new TabsButton(button, this);
        });
        this.activeButton = this.buttons[0];       
        this.init();
    }

    init () {
        this.activeButton.select();
    }

    updateActive(newActive) {
        this.activeButton.deselect();
        this.activeButton = newActive;
    }

    getButton(data) {
        return this.element.querySelector(`.tab-content[data-tab="${data}"]`);
    }
}

class TabsButton {
    constructor(button, parent) {
        this.button = button;
        this.tabs = parent;
        this.tabsItem = parent.getButton(this.button.dataset.tab);
        this.tabsItem = new TabsContent(this.tabsItem);
        this.button.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    }

    select() {
        this.button.classList.add('tabs-button-selected');
        this.tabsItem.select();
    }

    deselect() {
        this.button.classList.remove('tabs-button-selected');
        this.tabsItem.deselect();
    }
}

class TabsContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("tab-content-selected");
    }

    deselect() {
        this.element.classList.remove("tab-content-selected");
    }
}


let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
