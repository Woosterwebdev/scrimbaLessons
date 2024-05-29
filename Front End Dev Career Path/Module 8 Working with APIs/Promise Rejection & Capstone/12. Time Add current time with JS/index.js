// const photoAuthorInfo = document.getElementById('author-info')

// getPhoto()

// async function getPhoto() {
//     const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature&count=1')
//     const data = await res.json()
//     console.log(data.urls.full)
//     document.body.style.backgroundImage = `url(${data.urls.full})`
//     photoAuthorInfo.textContent = `By: ${data.user.name}`

// }

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author-info").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById('crypto').innerHTML += `
            <p>Current: $${data.market_data.current_price.usd}</p>
            <p>24hr H: $${data.market_data.high_24h.usd}</p>
            <p>24hr L: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

/**
 * Challenge: log the current time to the console, formatted
 * like this:
 * 
 * 1:30 PM
 * 
 * Use Google and Stack Overflow to find the best way.
 * 
 * Good luck! 👍
 */

// const date = new Date().toLocaleTimeString("en-US", {timeStyle: "short"}) 
// console.log(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'}))

/**
 * Challenges:
 * 
 * 1. Display the current time on the dashboard
 * 2. Update the current time every second
 */

setInterval(getCurrentTime, 1000)

function getCurrentTime() {
    const date = new Date()
    document.getElementById('time').textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}