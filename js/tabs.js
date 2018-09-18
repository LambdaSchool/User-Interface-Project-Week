//Buttons on Services page

class TabLink {
	constructor(element) {
//assigned this.element to element reference
		this.element = element;
//get tab data attribute and save the value
		this.tabData = this.element.dataset.tab;
//if the data is 'all' then select all cards regardless of their data attribute
		if(this.tabData === 'all') {
			this.cards = document.querySelectorAll('.card');
		} else {
			this.cards = document.querySelectorAll(`.card[data-tab = "${this.tabData}"`);
		};
// Map over the cards array and convert each card element into a new instance of the TabCard class. 
// Pass in the card object to the TabCard class.
		this.cards = Array.from(this.cards).map(card => new TabCard(card));
//add a click event that invokes selectTab
		this.element.addEventListener('click', () => {
			this.selectTab();
		});
	};
};

selectTab(){

// Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
// Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => {
      tab.classList.remove('.activate');
    });
// Add a class of ".active-tab" to this.element
    this.element.classList.add('.activate');


// Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
// Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => {
      card.style.display = 'none';
    });
// Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element.style.display = '';
  }

}
// Create a reference to all ".service-button" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab => new TabLink(tab));
