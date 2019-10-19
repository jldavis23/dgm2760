// Header and slogan loaded through javascript
document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector("#slogan").innerText = "Experience the passion of hospitality"


// Greeting prompt
let userName = prompt("What is your name?")

let message = `Hello, ${userName}! Welcome to the finest lodging in Utah.`

document.querySelector('#greeting').innerText = message