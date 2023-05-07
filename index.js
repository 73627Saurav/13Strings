let name = "Harry"
console.log(name.length) // 5
console.log(name[0]) // H
console.log(name[1]) // a
let friend = 'Prakash'
console.log(friend) // Prakash

// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence1 = `${boy2} is a friend of ${boy1}`
let sentence2 = "${boy2} is a friend of ${boy1}"
// use backtick (` `) to print template literal
console.log(sentence1) // Nikhil is a friend of Pramod
console.log(sentence2) // ${boy2} is a friend of ${boy1}


// Escape Sequence Characters
// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = "Bana\"na"
console.log(fruit) // Bana"na