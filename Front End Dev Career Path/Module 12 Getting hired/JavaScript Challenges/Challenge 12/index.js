/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
        ]

function removeDupesFromArray(arr){
     const newRecipe = []
     for(let i = 0; i< arr.length; i++){
        if(!newRecipe.includes(arr[i])){
            newRecipe.push(arr[i])
        }
     }
     return newRecipe
}

// function removeDupesFromArray(arr){
//     const trackDupes = {}
//     return arr.filter(item => {
//         if(!trackDupes[item]){
//             trackDupes[item = ture]
//             return true
//         }
//         return false
//     })
// }

// function removeDupesFromArray(arr){
//      return [...new Set(arr)]
// }

console.log(removeDupesFromArray(eggScrambleRecipe));