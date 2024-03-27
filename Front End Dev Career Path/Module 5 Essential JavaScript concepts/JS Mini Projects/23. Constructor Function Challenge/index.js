/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/
function Character(name){
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const krawth = new Character('Krawth')
const imdawoo = new Character('Imdawoo')
krawth.addItem('Sledgehammer of Doom')
imdawoo.addItem('Wet Noodle of Sadness')
krawth.addItem('Fake Tan Spray')
imdawoo.addItem('SPF 9000 Sun Screen')
console.log(krawth)
console.log(imdawoo)