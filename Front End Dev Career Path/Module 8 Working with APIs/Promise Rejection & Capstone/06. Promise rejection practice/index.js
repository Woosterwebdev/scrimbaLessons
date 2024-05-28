// const photoAuthorInfo = document.getElementById('author-info')

// getPhoto()

// async function getPhoto() {
//     const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature&count=1')
//     const data = await res.json()
//     console.log(data.urls.full)
//     document.body.style.backgroundImage = `url(${data.urls.full})`
//     photoAuthorInfo.textContent = `By: ${data.user.name}`

// }

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature ")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author-info").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        /**
         * Challenge: get a URL for a default background image and set it here
         * 
         * 1. Change the query in the URL above back to something real
         * 2. Log the image url to the console (replacing console.log(data) above)
         * 3. Use that URL as the "default" background image to be used if 
         *    the promise is ever rejected.
         */
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1437651025703-2858c944e3eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY5MjE2ODB8&ixlib=rb-4.0.3&q=80&w=1080)`
    })	