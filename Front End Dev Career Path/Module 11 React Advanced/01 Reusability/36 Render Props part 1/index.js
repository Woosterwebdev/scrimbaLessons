document.getElementById("button").addEventListener("click", function(event) {
    console.log(event)
})

document.getElementById("input").addEventListener("input", function(event) {
    console.log(event.target.value)
})

document.getElementById("box").addEventListener("mouseover", function() {
    console.log("Hovered in box!")
})

function addEventListener(eventType, callback) {
    callback()
    
}