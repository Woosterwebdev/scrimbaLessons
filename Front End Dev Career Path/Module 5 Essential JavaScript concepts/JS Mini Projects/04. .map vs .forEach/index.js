// import { playlistArr } from '/playlist.js'

// const playlistHtml = playlistArr.map(function(track){
//     return `
//     <section class="card">
//         <div class="card-start">
//             <img src="/images/${track.albumArt}">
//         </div>
//             <div class="card-mid">
//                 <h4 class="card-title">${track.title}</h4>
//                 <p class="card-artist">${track.artist}</p>
//             </div>
//         <div class="card-end">
//             <p class="card-menu">...</p>
//         </div>
//     </section>
//     `
// }).join('')

// document.getElementById('container').innerHTML = playlistHtml

import { playlistArr } from '/playlist.js'

const playlistHtml = []

playlistArr.forEach(function(track){
    playlistHtml.push( `
    <section class="card">
        <div class="card-start">
            <img src="/images/${track.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `)
})

// console.log(playlistHtml)

document.getElementById('container').innerHTML = playlistHtml.join('')

// .map() returns new array and allows methods to bew chained.
// .forEach() does not return a new array and can not chain methods