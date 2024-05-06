document.getElementById('blog-form').addEventListener("submit", function(e) {
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
            document.getElementById('blog-list').innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.body}</p>
                <hr />
                ${document.getElementById('blog-list').innerHTML}
            `
        })
    /*
    * Challenge: Update the DOM with the new blog entry
    */
})

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const blogsArr = data.slice(0, 5)
        let html = ""
        for (let blog of blogsArr) {
            html += `
            <h3>${blog.title}</h3>
            <p>${blog.body}</p>
            <hr />
        `
        }
        document.getElementById('blog-list').innerHTML = html
    })

