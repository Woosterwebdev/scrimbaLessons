let failEl = document.getElementById("fail-el")
let daysEl = document.getElementById("days-el")
let count = 0

function days() {
    count += 1
    daysEl.textContent = count
}

function fail() {

    let saveSet = " " + count + " - "
    
    failEl.textContent += saveSet
    
    daysEl.textContent = 0

    count = 0
}