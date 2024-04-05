const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById("section-el")

// render posts from object

renderPosts()

function renderPosts() {
    
    clearSectionEl()

    for (let i = 0; i < posts.length; i++) {
        const name = posts[i].name
        const username = posts[i].username
        const location = posts[i].location
        const avatar = posts[i].avatar
        const post = posts[i].post
        const comment = posts[i].comment
        const likes = posts[i].likes

        appendPost(name, username, location, avatar, post, comment, likes)
    }
    
}

// Clear innerHTML of Section Element

function clearSectionEl() {
    sectionEl.innerHTML = ""
}

// append post

function appendPost(name, username, location, avatar, post, comment, likes) {
    sectionEl.innerHTML += `
    <div class="container">
              <div class="container post-head">
                <img src="${avatar}" class="avatar" />
                <div class="name-loaction">
                  <p>
                    <span class="name bold">${name}</span>${location}
                  </p>
                </div>
              </div>
              <img class="post-img" src=${post} />
              <div class="post-body m-10">
                <div>
                  <img class="icon" src="images/icon-heart.png" />
                  <img class="icon" src="images/icon-comment.png" />
                  <img class="icon" src="images/icon-dm.png" />
                </div>
                <p class="bold">${likes} likes</p>
                <p class="user-caption">
                  <span class="bold">${username}</span> ${comment}
                </p>
              </div>
            </div>`
}

// Sticky Header

// window.onscroll = function() {stickyHeader()}

// const headerEl = document.getElementById("header")

// const sticky = headerEl.offsetTop

// function stickyHeader() {
//     if (window.pageYOffset >= sticky) {
//         headerEl.classList.add("sticky")
//     } else {
//         headerEl.classList.remove("sticky")
//     }
// }