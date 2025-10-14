// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    // your code goes here
    constructor(element, name, number, image) {
        this.element = element;
        this.name = name;
        this.number = number;
        this.image = image;
    }
    // add your class functions here
}

function getData() {
    // your code goes here
    fileName = "data.json";
    fetch(fileName)
        .then(response => response.json())
        .then(data => console.log(data));
}

function displayCards(cards) {
    // your code goes here
}

// call your functions here
getData();
displayCards();


