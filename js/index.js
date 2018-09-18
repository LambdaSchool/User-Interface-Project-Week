// JS goes here

class TabLink {
  constructor(element) {
    this.element = element;;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
	this.element.addEventListener("click",()=>this.select());

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach((link) => {
	link.classList.remove("tabs-link-selected");
	});

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.toggle("tabs-link-selected");
    
    // Call the select method on the item associated with this link
	this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
	const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
	Array.from(items).forEach((item) => {
		item.classList.remove("tabs-item-selected");
	})
    // Add a class named "tabs-item-selected" to this element
	this.element.classList.toggle("tabs-item-selected"); 
  }
}

/// END OF TABS START OF NAV DROPDOWN 

class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
 
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {

			this.button2 = this.element.querySelector('.dropdown-button img');
			console.log(this.button2);
			this.button2.src = "img/nav-hamburger-close.png";
			      
			this.toggleContent();
			})

			this.button.addEventListener('click', () => {
				this.button2 = this.element.querySelector('.dropdown-button img');
				console.log(this.button2);
				this.button2.src = "img/nav-hamburger.png";
				})
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

let links = document.querySelectorAll(".tabs-link");

links = Array.from(links).map((link) => new TabLink(link));

links[0].select();
