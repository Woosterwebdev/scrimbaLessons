const baseUrl = 'http://www.omdbapi.com/'
const apiKey = '453ca794'
const searchBtnEl = document.getElementById('search-btn')
const searchInputEl = document.getElementById('search-input')
const searchResultsEl = document.getElementById('search-results')
const addToWatchlistEl = document.getElementsByClassName('.add-to-watchlist')
const myWatchlistEl = document.getElementById('my-watchlist')

searchBtnEl.addEventListener('click', () => fetchResults())

searchInputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    fetchResults()
  }
})

async function fetchResults() {
  const res = await fetch(`${baseUrl}?apikey=${apiKey}&s=${searchInputEl.value}`)
  const data = await res.json()
  // add if statement to handle respnose of false
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
                <button type="button" id='${data.imdbID}' class="add-to-watchlist">
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

addToWatchlistEl.addEventListener(('click'), () => console.log('Clicked'))
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
