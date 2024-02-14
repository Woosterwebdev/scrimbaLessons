
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// Grab the box from the DOM and store it in a variable
// Add a click event listener to the box 
// Log out "I want to open the box!" when it's clicked
// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []
// If possible, use const. If not, use let.
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})