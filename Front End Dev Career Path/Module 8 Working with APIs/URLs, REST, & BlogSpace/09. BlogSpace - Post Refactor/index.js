/**
    * Challenge: Use our new renderPosts function to clean up this code.
    * 
    * Don't forget to update the postsArray variable first!
*/

let blogsArr = []
const blogForm = document.getElementById('blog-form')

function renderBlogs() {
    let html = ""
        for (let blog of blogsArr) {
            html += `
            <h3>${blog.title}</h3>
            <p>${blog.body}</p>
            <hr />
        `
        }
    document.getElementById('blog-list').innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        blogsArr = data.slice(0, 5)
        renderBlogs()
    })

blogForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const blogTitle = document.getElementById('blog-title').value
    const blogBody = document.getElementById('blog-body').value
    const blogData = {
        title: blogTitle,
        body: blogBody
    }
    const options = {
        method: "POST",
        body: JSON.stringify(blogData),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(blog => {
            blogsArr.unshift(blog)
            renderBlogs()
            /**
             * Challenge: clear the form out!
             */
            blogForm.reset()
        })
})