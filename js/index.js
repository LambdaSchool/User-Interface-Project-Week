// Navigation System
class Dropdown {
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element = element;
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = this.element.querySelector('.hamburger');
      
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = this.element.querySelector('.navigation');
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => { this.toggleContent()
  
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




//Tab Functionality


class TabLink {
    constructor(element) {
      this.element= element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.item);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => {
        this.select();
      });
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach( link => {
        link.classList.remove('tabs-link-selected')
      });
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
      // Remove the class "tabs-item-selected" from each element
      items.forEach(item => {
        item.classList.remove('tabs-item-selected');
      })
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  
  // START HERE: create a reference to the ".tabs-link" class
  let links = document.querySelectorAll('.tabs');
  
  // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
  links = Array.from(links).map( link => new TabLink(link));
  
  // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
  links[0].select();