// JS goes here

function openNav() {
  document.getElementById("menuItems").style.width = "100%";
}

function closeNav() {
  document.getElementById("menuItems").style.width = "0%";
}

class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    this.content = document.querySelector(
      `.service-content[data-content="${this.tabData}"]`
    );
    console.log(this.content);
    this.tabElement.addEventListener("click", () => {
      this.selectTab();
    });
  }
  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(thisTab => {
      thisTab.classList.remove("active-tab");
    });
    this.tabElement.classList.add("active-tab");
    const contents = document.querySelectorAll(".service-content");
    contents.forEach(thisContent => {
      thisContent.classList.remove("service-content-active");
    });
    this.content.classList.add("service-content-active");
  }
}

let tabs = document
  .querySelectorAll(".tab")
  .forEach(tabItem => new TabLink(tabItem));
