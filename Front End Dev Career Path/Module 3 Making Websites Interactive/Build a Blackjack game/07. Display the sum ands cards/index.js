let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 3. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
// 4. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

function startGame() {
    // 5. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + firstCard + secondCard
    // 6. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}