// Nav Bar
class NavItem {
    constructor(element) {
        this.element = element;        
        this.open = this.element.querySelector('.hamburger-button');
        this.close =this.element.querySelector('.hamburger-close');
        this.content = this.element.querySelector('.nav-content');
        this.open.addEventListener('click', () => {this.dropdown('open');
        this.open.classList.add('hidden');
        this.close.classList.remove('hidden');
            }
        );
        this.close.addEventListener('click', () => {this.dropdown('close');
        this.close.classList.add('hidden');
        this.open.classList.remove('hidden');
            }
        );      
    }  
    dropdown(task) {
    task === 'open' ? this.content.classList.remove('hidden') : this.content.classList.add('hidden');
    }
}

let items = document.querySelectorAll('nav');
items = Array.from(items).map(item => new NavItem(item));

//Carousel

class Carousel {
    constructor(element) {
        this.element = element;
        this.rightButton = this.element.querySelector('.right-button');
        this.leftButton = this.element.querySelector('.left-button');
        this.images = this.element.querySelectorAll('.carousel img');
        this.index = 0;
        this.rightButton.addEventListener('click', () => {
            this.displayImage('right');      
        })
        this.leftButton.addEventListener('click', () => {
            this.displayImage('left');      
        })
    }
    displayImage(direction) {
        this.images.forEach(element => element.style.display = 'none');       
        if(direction === 'right') {                    
            this.index + 1 > this.images.length -1 ? this.images[0].style.display = 'inline-block' :
            this.images[this.index + 1].style.display = 'inline-block';
            this.index + 1 > this.images.length -1 ? this.index = 0 : this.index++;
        }
        else {            
            this.index - 1 < 0 ? this.images[this.images.length -1].style.display = 'inline-block' :
            this.images[this.index - 1].style.display = 'inline-block';
            this.index - 1 < 0 ? this.index = this.images.length -1 : this.index--;
        }
    }     
}

let carousel = document.querySelectorAll('.carousel');
carousel = carousel.forEach(element => new Carousel(element));
const img = document.querySelector('.carousel img');
img.style.display = 'inline-block';