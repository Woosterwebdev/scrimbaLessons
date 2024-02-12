const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassEL = document.getElementById("firstPass")
let secondPassEL = document.getElementById("secondPass")

function generatePasswords() {
    firstPassEL.textContent = ""
    secondPassEL.textContent = ""
    for (i = 0; i < 15; i++) {
        firstPassEL.textContent += characters[Math.floor(Math.random() * characters.length)]
        secondPassEL.textContent += characters[Math.floor(Math.random() * characters.length)] 
    }
}

function copybtn1() {
        let copyPassword = ""

        copyPassword = firstPassEL.textContent

        navigator.clipboard.writeText(copyPassword)

        alert("Copied to clipboard")
}

function copybtn2() {
    let copyPassword = ""

    copyPassword = secondPassEL.textContent

    navigator.clipboard.writeText(copyPassword)

    alert("Copied to clipboard")
}