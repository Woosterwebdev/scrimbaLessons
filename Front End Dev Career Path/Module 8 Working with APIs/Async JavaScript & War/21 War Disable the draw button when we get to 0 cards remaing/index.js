let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById('header')
const remainingCards = document.getElementById('remaining-cards')

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            cardCount(data.remaining)
        })
}

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        return "You win!"
    } else {
        return "War!"
    }
}

function cardCount(deckCount) {
    remainingCards.textContent = `
    Remaining cards: ${deckCount}
    `
}

newDeckBtn.addEventListener("click", handleClick)

/**
 * Challenge:
 * 
 * Disable the Draw button when we have no more cards to draw from
 * in the deck.
 * 
 * Disable both the functionality of the button (i.e. change
 * `disabled` to true on the button) AND the styling (i.e. add
 * a `disabled` CSS class to make it look unclickable)
 */

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText
            cardCount(data.remaining)
            if (data.remaining === 0) {
                drawCardBtn.disabled = true
            }
        })
})
