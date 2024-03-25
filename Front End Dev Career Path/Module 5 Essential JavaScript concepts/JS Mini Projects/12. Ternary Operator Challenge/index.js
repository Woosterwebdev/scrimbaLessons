const playerGuess = 3
const correctAnswer = 6

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

// let message = ''
// if (playerGuess === correctAnswer) {
//     message = 'Correct!'
// }
// else {
//     message = 'Wrong!'
// }

// const message = playerGuess === correctAnswer ? 'Correct!' : 'Wrong!'

// console.log(message)

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

const message = playerGuess < correctAnswer ? 'Too low!' 
: playerGuess > correctAnswer ? 'Too high!' 
: 'Correct!'

console.log(message)