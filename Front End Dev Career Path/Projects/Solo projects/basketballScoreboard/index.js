let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let homeScore = 0
let awayScore = 0

function home1() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function home2() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function home3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function away1() {
    awayScore += 1
    awayEl.textContent = awayScore
}

function away2() {
    awayScore += 2
    awayEl.textContent = awayScore
}

function away3() {
    awayScore += 3
    awayEl.textContent = awayScore
}

function newGame() {
    homeScore = 0
    awayScore = 0
    homeEl.textContent = homeScore
    awayEl.textContent = awayScore
}