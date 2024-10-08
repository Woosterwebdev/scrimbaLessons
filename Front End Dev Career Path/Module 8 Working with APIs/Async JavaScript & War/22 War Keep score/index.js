let deckId
let computerScore = 0
let yourScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById('header')
const remainingCards = document.getElementById('remaining-cards')
const computerScoreEl = document.getElementById("computer-score")
const yourScoreEl= document.getElementById("your-score")

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
        computerScore++
        computerScoreEl.textContent = `
                Computer: ${computerScore}`
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        yourScore++
        yourScoreEl.textContent = `
                You: ${yourScore}`
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
 * Keep score! Every time the computer wins a hand, add a point to
 * the computer's score. Do the same for every time you win a hand.
 * If it's a war, no points are awarded to either player. If it's 
 * a war (same card values), no one is awarded points.
 * 
 * Display the computer's score above the top card, display your
 * own score BELOW the bottom card.
 * 
 * Track the scores in a global variable defined at the top of this file
 * 
 * Add to the global scores inside the `determinCardWinner` function below.
 */

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[2].innerHTML = `
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
