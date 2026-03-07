// Goal:
// 1) Make a JS file and connect it to your HTML page
// 2) Make 3 variables (a string, a number, a boolean)
// 3) Use the 3 variables to show 2 messages (alert and console)


let favoriteColor = "green" // variable with a string
let isTeacher = true // variable with a boolean
let score = 1000 // variable with a number

//alert("Hello " + favoriteColor + "! Your score is: " + score)
console.log("Are you a teacher? " + isTeacher)


let fee = 1.25
let total = 7.99 + fee


let snowing = false
let raining = true

let wearBoots = snowing || raining

// Software Developer
let paysWell = true
let isCrime = true

let takeJob = paysWell && !isCrime


// Hot chocolate
let isSweet = true
let hasDairy = true
let isCooked = false
let isHot = true

let shouldEat = isSweet && (hasDairy || isCooked && !isHot)







let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// Milo
dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

// 1) He wants it to be potty trained
// 2) He doesn’t want it to shed
// 3) He wants it to like to snuggle or like to play fetch (or both)

// Pieces: dogName, likesFetch, sheds, pottyTrained, likesSnuggles
// &&, ||, !, ()

let shouldGetMilo = pottyTrained && !sheds && (likesSnuggles || likesFetch)

// Penny
dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

let shouldGetPenny = pottyTrained && !sheds && (likesSnuggles || likesFetch)

console.log("Should Rafael get Milo? " + shouldGetMilo)
console.log("Should Rafael get Penny? " + shouldGetPenny)



// Practice
// Three requirements, at least one being a "not"
// Write a little boolean logic and show it in the console

// 1) Not too long
// 2) Yes suspense please
// 3) Yes Fantasy world

let long = false // is it long?
let suspense = true // is it suspenseful?
let fantasy = true // is it fantasy?

let shouldNatalieWatch = !long && suspense && fantasy

console.log("Should I watch? " + shouldNatalieWatch)