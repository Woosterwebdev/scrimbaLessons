const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/  

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('Form submitted')
})