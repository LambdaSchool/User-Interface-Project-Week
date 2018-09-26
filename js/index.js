// JS goes here

// Navigation Menu control

let hamburgerTag = document.querySelector('#hamburger');
let hamburgerCloseTag = document.querySelector('#hamburgerClose');
let navLinkTag = document.querySelector('.navLink');
let navTag = document.querySelector('.nav');


hamburgerTag.addEventListener('click', navOpenClicked);
hamburgerCloseTag.addEventListener('click', navCloseClicked);



function navOpenClicked() {
    let tl = new TimelineLite;

    navClassToggle();
   
   // expand the nav to whole screen
    TweenLite.to('.nav', 0.7, {height : "100vh"});
   
    // slideIn nav menu one at a time
    tl.fromTo('.navLink a:nth-child(1)', 0.5, {x :-600}, {x:0, opacity :1})
    .fromTo('.navLink a:nth-child(2)', 0.5, {x :-600}, {x:0, opacity :1})
    .fromTo('.navLink a:nth-child(3)', 0.5, {x :-600}, {x:0, opacity :1})
        
   
    // setTimeout(navClassToggle, 1000);
    // setTimeout((TweenLite.to('navLinkTag', 5, {opacity : "0.9"})),1000);
}

function navCloseClicked() {
    let tl = new TimelineLite;

    // nav menu faze out and nav area collapse to original size
    tl.to('.navLink a:nth-child(3)', 0.3, {opacity :0.1})
    .to('.navLink a:nth-child(2)', 0.3, {opacity :0.1})
    .to('.navLink a:nth-child(1)', 0.3, {opacity :0.1})
    .to('.nav', 0.5, {height : "8vh"});

    setTimeout( navClassToggle,1400);
    

 }

function navClassToggle() {
   
    hamburgerTag.classList.toggle('disappear');
    hamburgerCloseTag.classList.toggle('disappear');
    navLinkTag.classList.toggle('disappear');
    navTag.classList.toggle('expanded');  
}


// In service page, connect tab to right material (card) to be shown


class Tab {
    constructor(element) {
    this.element = element;
    this.dataset = element.dataset.tab;

    this.cardElement = document.querySelector(`.card[data-tab='${this.dataset}']`);
  
    this.card = new Card(this.cardElement);
   
    this.element.addEventListener('click', () => this.select("tab"));
    };

    select(method){
        tabs.forEach((tab) => tab.element.classList.remove('activeTab'))
        this.element.classList.add('activeTab');
        
        // this for loop keeps currentCard correct when tab is clicked
        for (let i =0 ; i < tabs.length; i++){
           if (tabs[i].element.classList.contains("activeTab"))
           carousel.currentCard = i;
       }
       
        // if it's carousel click, don't activate card.select
        if(method === "tab")
            this.card.select();
    }
}

class Card {
    constructor(element){
        this.element = element;
    }

    select(){
        let cards =  document.querySelectorAll('.card');
        Array.from(cards).forEach( (card)=> card.classList.add('disappear'));
        this.element.classList.remove('disappear');
    }
}


// Carousel JS.  make cards rotate
let Carousel = class {
    constructor(element){
        this.element = element;
        this.currentCard = 0;
        this.cards = this.element.querySelectorAll('.card');
        this.maxCardNum = this.cards.length;
             
        this.element.querySelector('.left-button').addEventListener('click', () => this.leftClicked());
        this.element.querySelector('.right-button').addEventListener('click', () => this.rightClicked());
    }

     rightClicked() {
        let newNum = this.currentCard + 1;
        if (newNum == this.maxCardNum )
            newNum = 0;
        
       
        this.cards[newNum].classList.remove('disappear')
        // TweenLite.fromTo(this.cards[this.currentCard], 2, {x :0}, {x:1000} );
        TweenLite.fromTo(this.cards[newNum], 2, {x :-1000}, {x:0} );
    
         setTimeout((this.cards[this.currentCard].classList.add('disappear')),3000);
        //  setTimeout((console.log("RIght Clickede")), 3000);
         this.currentCard = newNum;  

        tabs[this.currentCard].select();
      }

    leftClicked(){
        let newNum = this.currentCard - 1;
        if (newNum == -1 )
            newNum = this.maxCardNum - 1;
 
            this.cards[newNum].classList.remove('disappear')
            TweenLite.fromTo(this.cards[newNum], 3, {x :1000}, {x:0} );
        
            setTimeout(this.cards[this.currentCard].classList.add('disappear'),3000);
      
        this.currentCard = newNum;   
        tabs[this.currentCard].select();
      }
}

let carousel = document.querySelector('.cards-container');
carousel = new Carousel(carousel);



let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map((tab) => new Tab(tab));


