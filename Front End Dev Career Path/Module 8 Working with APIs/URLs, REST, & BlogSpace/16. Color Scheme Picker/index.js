// Base URL - https://www.thecolorapi.com 
// Scheme endpoint - /scheme{?hex,rgb,hsl,cmyk,format,mode,count}

const seedColor = document.getElementById('seed-color')
const schemeSelect = document.getElementById('scheme-select').value
const colorForm = document.getElementById('color-form')

colorForm.addEventListener("submit", function(e) {
    e.preventDefault()
    fetchColors()
})

function fetchColors() {
    console.log(schemeSelect)
    // const color = seedColor.value.slice(1)
    // const mode =  schemeSelect
    // fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
}