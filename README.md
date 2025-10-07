# Card Deck

Create a **digital card deck** that loads data from a JSON file and displays each card on the webpage. Each card will be generated using a **Javascript class** that defines its content and appearance. 

Your deck could be anything — a Pokémon-style collection, a tarot deck, players of a sports team, or even a set of trading cards for your favorite foods, artists, or planets.

**Requirements**

1. **Fetch Data from JSON**
    - Create a custom **JSON file** (for example, `data.json`) with your deck data.
    Example:
        
        ```json
        [
          {
            "name": "The Magician",
            "number": "I",
            "image": "images/card1.png"
          },
          ...
        ]
        ```
        
    - Use `fetch()` in your JavaScript file to load the JSON data.
    - Convert it into an array of JavaScript objects and loop through it.
2. **Display Visual Cards**
    - Create a **Javascript class** (e.g. `class Card { ... }`) that defines:
        - The card’s **properties** (like name, type, and image)
        - A **method** to create and return an HTML element for the card
    - When the data is loaded, loop through each object and create a new card instance for each one.
    - Append each card to the page (e.g. inside a `.deck` container).
3. **(Optional) Animate with GSAP**
    - For a challenge: use GSAP to animate the items when they appear (e.g. fade in, bounce, rotate, etc.) or when they’re clicked/hovered on (e.g. flip the cards over)

**Submission**

1. Fork this repository (before you start coding!)
2. Push your updates to your forked repository
3. Enable [Github Pages](https://www.notion.so/How-to-enable-Github-Pages-23dda96d871f80c99f2fec87680ccf07?pvs=21) (Note: your main HTML file must be named `index.html`)
4. Create a [Pull request](https://www.notion.so/How-to-create-a-Pull-request-PR-26ada96d871f8026bddfe17cf09fdb15?pvs=21)
