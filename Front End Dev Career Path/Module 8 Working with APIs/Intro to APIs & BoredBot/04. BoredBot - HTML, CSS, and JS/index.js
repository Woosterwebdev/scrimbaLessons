/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/
/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/
/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API
*/

document.getElementById('btn').addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
    document.getElementById('activity-name').textContent = `
    🎉 ${data.activity} 🎉
    `
    document.body.classList.add("generated")})
})

document.getElementById('btn').addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById('activity-name').textContent = `
      🎉 ${data.activity} 🎉
      `
      document.body.classList.add("generated")})}
})