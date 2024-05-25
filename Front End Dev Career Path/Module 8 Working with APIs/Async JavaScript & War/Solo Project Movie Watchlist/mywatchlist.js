const baseUrl = 'https://www.omdbapi.com/'
const apiKey = '453ca794'
const watchlistFromLS = JSON.parse(localStorage.getItem('watchlistArray'))
const myWatchlistEL = document.getElementById('my-watchlist')
let watchlistArray = []

checkLocalStorage()

/*-------------------
Local storage check
--------------------*/

function checkLocalStorage() {
  if (watchlistFromLS && watchlistFromLS.length > 0) {
    watchlistArray = watchlistFromLS
    fetchWatchlist()
  } else {
    myWatchlistEL.innerHTML = `
    <p class="empty-list">Your watchlist is looking a little empty...</p>
        <a class="to-search" href="index.html"
          ><i class="fa-solid fa-circle-plus" style="color: #ffffff"></i>Let's add
          some movies!</a
        >
    `
    myWatchlistEL.classList.remove('populated-results')
    myWatchlistEL.classList.add('initial-state')
  }
}

/*-------------------
Remove event listener
--------------------*/

document.addEventListener('click', (e) => {
  if (e.target.dataset.remove) {
    removeFromLocalStorage(e.target.dataset.remove)
  }
})

/*--------------------------------
Remove from local storage function
---------------------------------*/

function removeFromLocalStorage(movieId) {
  watchlistFromLS.splice(movieId, 1)
  localStorage.setItem("watchlistArray", JSON.stringify(watchlistArray))
  checkLocalStorage()
}

/*---------------------------------
Render watchlist from local storage
-----------------------------------*/

function fetchWatchlist() {
  watchlistFromLS.forEach(async (movie) => {
    const res = await fetch(`${baseUrl}?apikey=${apiKey}&i=${movie}`)
    const data = await res.json()
    const resultsHtml = `
          <div class="movie-container">
            <img class="poster" src="${data.Poster}" />
            <div class="movie-details">
              <div class="details1">
                <p class="movie-title">${data.Title}</p>
                <i class="fa-solid fa-star" style="color: #fec654"></i>
                <p class="imdb-rating">${data.imdbRating}</p>
              </div>
              <div class="details2">
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <button type="button" id="${data.imdbID}" data-remove="${data.imdbID}" class="add-to-watchlist">
                <i class="fa-solid fa-circle-minus" style="color: #ffffff"></i>Remove</button>
              </div>
              <div class="details3">
                <p>
                  ${data.Plot}</p>
              </div>
            </div>
          </div>
          <hr />
    `
    myWatchlistEL.innerHTML += resultsHtml
  })
  myWatchlistEL.innerHTML = ''
  myWatchlistEL.classList.remove('initial-state')
  myWatchlistEL.classList.add('populated-results')
}

/*
<div id="search-results" class="populated-results">
    <div class="movie-container">
        <img class="poster" src="images/poster.jpg" />
        <div class="movie-details">
          <div class="details1">
            <p class="movie-title">Blade Runner</p>
            <i class="fa-solid fa-star" style="color: #fec654"></i>
            <p class="imdb-rating">8.1</p>
          </div>
          <div class="details2">
            <p>116 min</p>
            <p>Action, Drama, Sci-Fi</p>
            <p class="add-to-watchlist">
              <i class="fa-solid fa-circle-plus" style="color: #ffffff"></i
              >Watchlist
            </p>
          </div>
          <div class="details3">
            <p>
              A blade runner must pursue and terminate four replicants who stole
              a ship in space and have returned to Earth to find their creator.
            </p>
          </div>
        </div>
    </div>
    <hr />
</div>
*/