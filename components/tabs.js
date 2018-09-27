class TabLink {
  constructor(element){
    // assign this.element to the element reference
    this.element = element;
    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab; 
    this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    this.cards = Array.from(this.cards).map( card => new TabCard(card));
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', () => {this.selectTab()});
  }

  selectTab(){
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    console.log(tabs);
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach( tab => {
      tab.classList.remove("active-tab");
    })

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display = 'none');


    // Add a class of ".active-tab" to this.element
    this.element.classList.add("active-tab");
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectCard(){
    // Update the style of this.element to display = "flex"
    this.element.style.display = "flex";
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// console.log tabs to make sure you are receiving the correct elements before you proceed.

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab => new TabLink(tab))

//Once you are complete, call the .selectTab method on the first tab
tabs[0].selectTab()