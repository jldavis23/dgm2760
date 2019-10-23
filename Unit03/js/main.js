// Headers load through JS
document.querySelector('header > h1').innerText = "GUESS THE NUMBER"
document.querySelector('header > h2').innerText = "Can you guess correctly?"

// pick a random number between 0 and 16
let correctNumber = Math.floor(Math.random()*15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`the correct number is ${correctNumber}`)

function evalGuess() {
    if (guessed === false) {
        totalGuesses++
        gamerGuess = document.querySelector('#guess').value
    
        const feedback = document.querySelector('#feedback')

        if (gamerGuess == correctNumber) {
            feedback.innerText = "Correct! You win!"
            giveAward()
        } else if (gamerGuess > correctNumber && gamerGuess < 16) {
            feedback.innerText = "Too high. Try again."
        } else if (gamerGuess < correctNumber && gamerGuess > 0) {
            feedback.innerText = "Too low. Try again."
        } else {
            feedback.innerText = "Please choose a number between 0 and 16"
            totalGuesses -= 1
        }

        document.querySelector('#trys').innerText = totalGuesses
        }
}

function giveAward() {
    guessed = true;
    const awardImage = document.createElement('img')
    const ribbon = document.querySelector('#ribbon')

    switch (totalGuesses) {
        case 1: 
        case 2:
        case 3: 
            awardImage.src = "images/blue-ribbon.png"
            break;
        case 4:
        case 5:
        case 6:
            awardImage.src = "images/red-ribbon.png"
            break;
        default: 
            awardImage.src = "images/yellow-ribbon.png"
    }

    if (ribbon.hasChildNodes() === false) {
        ribbon.appendChild(awardImage)
    }
}