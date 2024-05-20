// API with key http://www.omdbapi.com/?i=tt3896198&apikey=453ca794
const searchInputEl = document.getElementById('search-input')
const myWatchlistEl = document.getElementById('my-watchlist')

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=453ca794&s=${input.value}')
    .then(res => res.json())
    .then(data => console.log(data)) 