import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}


function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        
        const matchingCatsArray = catsData.filter(function(cat){
            if (isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            } else {
            return cat.emotionTags.includes(selectedEmotion)
            }
        })
        return matchingCatsArray
    }  
}

function getSingleCatObject(){
    /*
    Challenge:
    1. Inside this function, call getMatchingCatsArray 
    and save whatever it returns to a const called 
    “catsArray”. 
    */ 
    const catsArray = getMatchingCatsArray()
    // console.log(catsArray)
    /*
    Challenge:
    1. Set up an if to check if there is only one
    cat object in the array. If there is, log
    out that cat object (but not the whole array!)
    {}
    Test: "happy", animated GIFS only checked.
    */
    if (catsArray.length === 1){
        return catsArray[0]
    } else {
        /*
        Challenge:
        1. If catsArray has more than one object, 
        select an object at random and log it out.
        */
       const randomNumber = Math.floor(Math.random()*catsArray.length)
       return catsArray[randomNumber]
    }
    
}

function renderCat(){
    /*
    Challenge:
    1. Take the object that is returned by 
       getSingleCatObject and save it to a const 
       called "catObject".
    2. Set memeModalInner’s innerHTML to the HTML 
       string below, remembering to insert the relevant 
       data from catObject to replace the UPPERCASE text.
    3. Set memeModal’s display property to "flex". 
     
           `<img 
            class="cat-img" 
            src="./images/CAT IMAGE"
            alt="CAT ALT TEXT"
            >`
    */ 
    
        const catObject = getSingleCatObject()
        memeModalInner.innerHTML = `
            <img 
            class="cat-img" 
            src="./images/${catObject.image}"
            alt="${catObject.alt}"
            >`
        memeModal.style.display = 'flex'
    }

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)