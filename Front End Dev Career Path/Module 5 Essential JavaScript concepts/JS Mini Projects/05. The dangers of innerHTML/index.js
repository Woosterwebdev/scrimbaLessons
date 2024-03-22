// const filmInput = document.getElementById('film-input')
// const addBtn = document.getElementById('add-btn')
// const filmList = document.getElementById('film-list')

// addBtn.addEventListener('click', function() {
//     filmList.innerHTML += `
//         <div class="film-item">${filmInput.value}</div>
//         `
//     filmInput.value = ''
// })

const filmInput = document.getElementById('film-input')
const addBtn = document.getElementById('add-btn')
const filmList = document.getElementById('film-list')

addBtn.addEventListener('click', function() {
/*
Challenge:
1. Find a way of adding an inputted film to the list 
   which does not allow malicious JavaScript to be executed.
2. Implement it. 
*/  
    const newFilm = document.createElement('div')
    newFilm.classList.add('film-item')
    newFilm.textContent = filmInput.value
    filmList.appendChild(newFilm)
    filmInput.value = ''
}) 