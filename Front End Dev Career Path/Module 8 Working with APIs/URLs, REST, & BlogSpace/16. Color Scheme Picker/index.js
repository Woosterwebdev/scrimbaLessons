// Base URL - https://www.thecolorapi.com 
// Scheme endpoint - /scheme{?hex,rgb,hsl,cmyk,format,mode,count}

const schemeSelection = [
    'Monochrome',
    'Monochrome-light',
    'Monochrome-dark',
    'Analogic',
    'Complement',
    'Analogic-complement',
    'Triad',
    'Quad'
]
const seedColor = document.getElementById('seed-color')
const schemeSelect = document.getElementById('scheme-select')
const colorForm = document.getElementById('color-form')
const colorPreview = document.getElementById('color-preview')
const colorCodes = document.getElementById('color-codes')

renderSchemeSelection()


// Mode selection rendering
function renderSchemeSelection() {
    let selection = ''
    schemeSelection.forEach((mode) => {
        selection += `
            <option value="${mode.toLowerCase()}">${mode}</option>
        `
    })
    schemeSelect.innerHTML = selection
}

// Event Listener
colorForm.addEventListener("submit", function(e) {
    e.preventDefault()
    fetchColors()
})

// Fetch scheme from API
function fetchColors() {
    const color = seedColor.value.slice(1)
    const mode =  schemeSelect.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => renderResults(data.colors))
}

// Render color pallet and hex codes
function renderResults(colors) {
    let pallet = ''
    let codes = ''
    colors.forEach((color) => {
        pallet += `
        <div class="width-100" style="background-color:${color.hex.value};"></div>
        `
        codes += `
            <div data-hex="${color.hex.value}" class="hex-code width-100 text-center">${color.hex.value}</div>
        `        
    })
    colorPreview.innerHTML = pallet
    colorCodes.innerHTML = codes
}

document.getElementById('color-codes').addEventListener('click', function(e) {
    if (e.target.dataset.hex) {
        navigator.clipboard.writeText(e.target.dataset.hex)
        alert("Copied to clipboard")
    }
})