import { menuArray } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const payModal = document.getElementById('pay-modal')
let orderItemsArr = []
// Event listener
document.addEventListener('click', function(e) {
    // switch statement or if/else?
    
    if (e.target.dataset.add){
      handleAddItemClick(e.target.dataset.add)
    }
    if (e.target.dataset.remove){
      handleRemoveItemClick(e.target.dataset.remove)
    }
    if (e.target.dataset.complete){
      handleCompleteOrderClick()
    }
    if (e.target.dataset.pay){
      e.preventDefault()
      handlePayClick()
    }
})
// Render Menu
function getMenuItems() {
    let menuItems = ``
    menuArray.forEach(function(item) {
      let ingredients = item.ingredients.join(', ')
      menuItems +=`
        <div class="menu-item">
          <div class="item-details">
            <img class="item-img" src="${item.image}" />
              <div class="item-description">
                <h3 class="item-name">${item.name}</h3>
                <p class="ingredients">${ingredients}</p>
                <p class="price">$ ${item.price}</p>
              </div>
          </div>
          <img id="add-icon" data-add="${item.id}" src="images/add-icon.png" />
        </div>`
    })
    document.getElementById('menu').innerHTML = menuItems
}
getMenuItems()
// Add item to order
function handleAddItemClick(itemId) {
  menuArray.filter(function(item){
    if (itemId == item.id){
      orderItemsArr.push({name: item.name, price: item.price, uuid: uuidv4()})
    }
  })
  renderOrderItems(orderItemsArr)
}
// pass rendered order to handleAddItemClick()
function renderOrderItems(arr) {
  if (arr.length > 0){
  const yourOrder = arr.map(function(item){
    return `
    <div class="order-item">
      <div class="item-remove">
        <p class="item-name m-5">${item.name}</p>
        <button id="remove-btn" class="remove-btn" data-remove="${item.uuid}">remove</button>
      </div>
      <p class="price m-5">$ ${item.price}</p>
    </div>
    `
    }).join('')
  document.getElementById('order-section').innerHTML = `
  <h3 id="your-order" class="text-align">-Your Order-</h3>
  ${yourOrder}
  `
  renderTotal(arr)
  }else{
    document.getElementById('order-section').innerHTML = ``
    document.getElementById('your-total').innerHTML = ``
  }
}
// pass rendered total to renderOrderItems()
function renderTotal(arr){
  const totalPrice = arr.reduce(function (total, currentItem){
    return total + currentItem.price  
  }, 0)

  document.getElementById('your-total').innerHTML = `
    <div class="order-total">
      <p class="total m-5 mt-10">Total:</p>
      <p class="price m-5 mt-10">$ ${totalPrice}</p>
    </div>
    <div>
      <button id="complete-order" class="complete-order btn" data-complete="complete">
      Complete Order
      </button>
    </div>
    `
}
// remove items from orderItemsArr
function handleRemoveItemClick(uuid) {
  orderItemsArr.forEach(function (item, index){
    if (uuid === item.uuid){
      orderItemsArr.splice(index, 1)
      renderOrderItems(orderItemsArr)
    }
  })
}
// prompt payment
function handleCompleteOrderClick() {
  document.getElementById('modal').classList.remove('hidden')
}

function handlePayClick() {
  const payModalData = new FormData(payModal)
  const customerName = payModalData.get('name')
  document.getElementById('modal').classList.add('hidden')
  clearOrderItemsArr()
  renderOrderItems(orderItemsArr)
  document.getElementById('order-section').innerHTML = `
  <h3 class="order-complete">
    Thanks, ${customerName}! Your order is on it's way!
  </h3>
  `
}

function clearOrderItemsArr(){
  orderItemsArr = []
}



/* see www.emojiterra.com for more possible image options 
menu item
    <div class="menu-item">
        <div class="item-details">
          <img class="item-img" src="images/beer.png" />
          <div class="item-description">
            <h3 class="item-name">NAME</h3>
            <p class="ingredients">INGREDIENTS</p>
            <p class="price">$ PRICE</p>
          </div>
        </div>
        <img id="add-icon" src="IMAGE" />
    </div>

your order
      <h3 class="text-align">-Your Order-</h3>
        <div class="order-item">
          <div class="item-remove">
            <p class="item-name m-5">NAME</p>
            <button id="remove-btn" class="remove-btn" data-remove="${item.id}">remove</button>
          </div>
          <p class="price m-5">$ PRICE</p>
        </div>

your total        
        <div class="order-total m-0">
          <p class="total m-5">Total:</p>
          <p class="price m-5">$26</p>
        </div>
        <div></div>
        <button id="complete-order" class="complete-order btn">
          Complete Order
        </button>

order complete

<h3 class="order-complete">
          Thanks, CUSTOMER-NAME! Your order is on it's way!
        </h3>
*/