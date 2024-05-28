const photoAuthorInfo = document.getElementById('author-info')

getPhoto()

async function getPhoto() {
    const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature&count=1')
    const data = await res.json()
    console.log(data.urls.full)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    photoAuthorInfo.textContent = `By: ${data.user.name}`

}

// Instructor's example of .catch()
// fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         throw Error("I'm an error!")
//         // document.body.style.backgroundImage = `url(${data.urls.regular})`
// 		// document.getElementById("author").textContent = `By: ${data.user.name}`
//     })
//     .catch(err => {
//         console.log("Something went wrong! 😭")
//         // This is where I can handle the error
//         // Choose to use a default background image
//     })		