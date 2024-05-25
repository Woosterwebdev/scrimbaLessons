const baseUrl = 'https://www.omdbapi.com/'
const apiKey = '453ca794'
const searchBtnEl = document.getElementById('search-btn')
const searchInputEl = document.getElementById('search-input')
const searchResultsEl = document.getElementById('search-results')
const addToWatchlistEl = document.getElementsByClassName('.add-to-watchlist')
const watchlistFromLS = JSON.parse(localStorage.getItem('watchlistArray'))
const myWatchlistEl = document.getElementById('my-watchlist')
let watchlistArray = []

/* ----------------------------*/
/* Check local storage on load */
/* ----------------------------*/

if (watchlistFromLS) {
  watchlistArray = watchlistFromLS
}

/* -----------------------*/
/* Search event listeners */
/* -----------------------*/

searchBtnEl.addEventListener('click', () => fetchResults())

searchInputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    fetchResults()
  }
})

/* -------------------*/
/* Add event listener */
/* -------------------*/

document.addEventListener('click', (e) => {
  if (e.target.dataset.add) {
    addToLocalStorage(e.target.dataset.add)
  }
})

/* ------------------------------*/
/* Add to local storage function */
/* -----------------------------*/

function addToLocalStorage(movieId) {
  if (!watchlistArray.includes(movieId)) {
    watchlistArray.unshift(movieId)
    localStorage.setItem("watchlistArray", JSON.stringify(watchlistArray))
    document.getElementById(`${movieId}`).textContent = 'On Watchlist'
    document.getElementById(`${movieId}`).setAttribute('disabled')
  }
}

/* -----------------*/
/* API search fetch */
/* -----------------*/

async function fetchResults() {
  const res = await fetch(`${baseUrl}?apikey=${apiKey}&s=${searchInputEl.value}`)
  const data = await res.json()
  if (data.Response !== 'False') {
    data.Search.forEach(async (movie) => {
      const res = await fetch(`${baseUrl}?apikey=${apiKey}&i=${movie.imdbID}&plot=short`)
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
                <button type="button" id="${data.imdbID}" data-add="${data.imdbID}" class="add-to-watchlist">
                <i class="fa-solid fa-circle-plus" style="color: #ffffff"></i>Watchlist</button>
              </div>
              <div class="details3">
                <p>
                  ${data.Plot}</p>
              </div>
            </div>
          </div>
          <hr />
    `
      searchResultsEl.innerHTML += resultsHtml
      alreadyAdded(data.imdbID)
    })
    searchResultsEl.innerHTML = ''
    searchResultsEl.classList.remove('initial-state')
    searchResultsEl.classList.add('populated-results')
  } else {
    searchResultsEl.innerHTML = ''
    searchResultsEl.innerHTML = `
      <p>Unable to find what you’re looking for. Please try another search.</p>
    `
    searchResultsEl.classList.remove('initial-state')
    searchResultsEl.classList.add('no-data-state')
  }
}

function alreadyAdded(movieId) {
  const addedBtn = document.getElementById(`${movieId}`)
  if (watchlistFromLS.includes(movieId)) {
    addedBtn.textContent = 'On Watchlist'
    addedBtn.setAttribute('disabled')
  }
}

// addToWatchlistEl.addEventListener(('click'), () => console.log('Clicked'))
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

/*
Object sample 
{
    "Title":"Blade Runner",
    "Year":"1982",
    "Rated":"R",
    "Released":"25 Jun 1982",
    "Runtime":"117 min",
    "Genre":"Action, Drama, Sci-Fi",
    "Director":"Ridley Scott",
    "Writer":"Hampton Fancher, David Webb Peoples, Philip K. Dick",
    "Actors":"Harrison Ford, Rutger Hauer, Sean Young",
    "Plot":
    "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    "Language":"English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
    "Country":"United States, United Kingdom",
    "Awards":"Nominated for 2 Oscars. 13 wins & 22 nominations total",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings":[
        {"Source":"Internet Movie Database","Value":"8.1/10"},
        {"Source":"Rotten Tomatoes","Value":"89%"},
        {"Source":"Metacritic","Value":"84/100"}
     ],
    "Metascore":"84",
    "imdbRating":"8.1",
    "imdbVotes":"823,091",
    "imdbID":"tt0083658",
    "Type":"movie",
    "DVD":"09 Jun 2013",
    "BoxOffice":"$32,914,489",
    "Production":"N/A",
    "Website":"N/A",
    "Response":"True"
}
*/
