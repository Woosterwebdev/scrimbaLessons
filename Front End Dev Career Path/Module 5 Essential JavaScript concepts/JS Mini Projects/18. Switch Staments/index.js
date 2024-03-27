/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
*/

// For example: "You selected Salad. That will be $4"

function selectItem(item) {
    let price = 0
/*
Challenge:
1.  Add the remaining price list items as cases.
*/    
    switch(item) {
        case 'coffee':
            price = 2
            break
        case 'Sandwiches':
            price = 5
            break
        case 'Salad':
            price = 4
            break
        case 'Lemon Cake':
            price = 3
            break    
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('Sandwiches'))