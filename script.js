// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    // your code goes here
    constructor(element, name, number, image) {
        this.element = element;
        this.name = name;
        this.number = number;
        this.image = image;
        this.element.classList.add("Card");
    }
    // add your class functions here

    create_return_HTML(){
            //A method to create and return an HTML element for the card
            this.element.innerHTML = "";

            const nameElement = document.createElement("p");
            nameElement.classList.add('card_name');
            nameElement.innerText = this.name;
            this.element.appendChild(nameElement);

            const numberElement = document.createElement("p");
            numberElement.classList.add("card_number");
            numberElement.innerText = this.number;
            this.element.appendChild(numberElement);

            const imageElement = document.createElement("img");
            imageElement.classList.add("card_image");
            imageElement.innerText = this.image;
            this.element.appendChild(imageElement);
    }
}

function getData() {
    // your code goes here
    fileName = "data.json";
    fetch(fileName)
        .then(response => response.json())
        .then(data => displayCards(data));
}

function displayCards(cards) {
    // your code goes here

    for(let i = 0; i < data.length; i++){

    }
}

// call your functions here
getData();
displayCards();


// - When the data is loaded, loop through each object and create a new card instance for each one.
// - Append each card to the page (e.g. inside a `.deck` container).


