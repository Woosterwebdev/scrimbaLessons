import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-lists-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const traderJoesListInDB = ref(database, "traderJoesList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const traderJoesListEl = document.getElementById("traderjoes-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(traderJoesListInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(traderJoesListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearTraderJoesListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToTraderJoesListEl(currentItem)
        }    
    } else {
        traderJoesListEl.innerHTML = "No items here... yet"
    }
})

function clearTraderJoesListEl() {
    traderJoesListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToTraderJoesListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `traderJoesList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    traderJoesListEl.append(newEl)
}