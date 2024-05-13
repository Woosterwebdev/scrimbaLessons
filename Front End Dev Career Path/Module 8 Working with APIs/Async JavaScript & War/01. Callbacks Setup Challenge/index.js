/**
 Challenge: Add a button that, when clicked, gets a new deck of cards from the deckofcards API
 
 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
 
 Log the whole response to the console
 */

 const newDeckEl = document.getElementById('new-deck')

 newDeckEl.addEventListener(('click'), function(e) { 
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => console.log(data))
 })