/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueEl = document.getElementById("value")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

window.onload = function() {
    valueEl.focus();
  }

convertBtn.addEventListener("click", function() {
    convert()
})

valueEl.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        convert()
    }
})

function convert() {
    let feet = (valueEl.value * 3.281).toFixed(3)
    let meter =  (valueEl.value / 3.281).toFixed(3)
    let gallon = (valueEl.value * 0.264).toFixed(3)
    let liter = (valueEl.value / 0.264).toFixed(3)
    let pound = (valueEl.value * 2.204).toFixed(3)
    let kilo = (valueEl.value / 2.204).toFixed(3)
    if (valueEl.value > 1) {
        lengthEl.innerHTML = `${valueEl.value} meters = ${feet} feet | ${valueEl.value} feet = ${meter} meters`
        volumeEl.innerHTML = `${valueEl.value} liters = ${gallon} gallons | ${valueEl.value} gallons = ${liter} liters`
        massEl.innerHTML = `${valueEl.value} kilos = ${pound} pounds | ${valueEl.value} pounds = ${kilo} kilos`
    } else { 
        lengthEl.innerHTML = `${valueEl.value} meter = ${feet} feet | ${valueEl.value} foot = ${meter} meters`
        volumeEl.innerHTML = `${valueEl.value} liter = ${gallon} gallons | ${valueEl.value} gallon = ${liter} liters`
        massEl.innerHTML = `${valueEl.value} kilo = ${pound} pounds | ${valueEl.value} pound = ${kilo} kilos`
    }
}