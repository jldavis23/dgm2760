function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getMonthName(month) {
    let name;

    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5: 
            name = "May"
            break;
        case 6: 
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
        default:
        name = "Not a month"
        break;
    }
    return name;
}

function getFortune(fate) {
    let message;

    // on this date...
    switch(fate) {
        case 1:
            message = "you will find the love of your life."
            break;
        case 2:
            message = "you will discover that a close friend has been decieving you."
            break;
        case 3: 
            message = "you will finally find what has been lost for so long."
            break;
        case 4:
            message = "an expected visitor will bring you good news."
            break;
        case 5:
            message = "misfortunes are sure to befall you."
    }
    return message;
}

function revealFortune() {
    let fate = getRandomIntInclusive(1, 5)
    let day = getRandomIntInclusive(1, 30)
    let month = getRandomIntInclusive(1, 12)
    const monthName = getMonthName(month)

    let fortuneRevealed = `On ${monthName} ${day} ${getFortune(fate)}`
    document.querySelector('#fortune').innerText = fortuneRevealed;
}

