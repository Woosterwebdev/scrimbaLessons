document.getElementById('blog-form').addEventListener("submit", function(e) {
    e.preventDefault()
    const blogTitle = document.getElementById('blog-title').value
    const blogBody = document.getElementById('blog-body').value
    const postObj = {
        title: blogTitle,
        body: blogBody
    }
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

/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/