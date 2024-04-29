/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => document.getElementById('container').innerHTML = `
        <h1>${data.activity}</h1>
        `)