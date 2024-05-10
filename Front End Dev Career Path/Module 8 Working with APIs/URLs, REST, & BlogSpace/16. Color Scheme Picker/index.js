// Base URL - https://www.thecolorapi.com 
// Scheme endpoint - /scheme{?hex,rgb,hsl,cmyk,format,mode,count}

const seedColor = document.getElementById('seed-color')
const schemeSelect = document.getElementById('scheme-select')
const colorForm = document.getElementById('color-form')

let schemeArr = []

colorForm.addEventListener("submit", function(e) {
    e.preventDefault()
    fetchColors()
    renderResults()
})

function fetchColors() {
    const color = seedColor.value.slice(1)
    const mode =  schemeSelect.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => data.colors.forEach((color) => schemeArr.push(color.hex.value)))
}

function rendeResults() {
    schemeArr.forEach((color) => {
        document.getElementById('color-preview').innerHTML += `
            <div class="width-100"></div>
        `
    })
}