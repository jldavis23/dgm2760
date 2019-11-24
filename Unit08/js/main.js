const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Sally",
    option4: "Jordan",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },
    check: (userChoice) => {
        let buttons = document.querySelectorAll('button')
        buttons.forEach(button => button.classList = '')
        if (userChoice == question.correct) {
            buttons.forEach(button => {
                if (button.id[6] == question.correct) {
                    button.classList = 'correct'
                }
            })
            document.querySelector('.feedback').textContent = "You are correct!"
            document.querySelector('.feedback').style = 'color:green;'
        } else {
            buttons.forEach(button => {
                if (button.id[6] == userChoice) {
                    button.classList = 'incorrect'
                }
            })
            document.querySelector('.feedback').textContent = "Try again"
            document.querySelector('.feedback').style = 'color:#ff5656;'
        }
    }
}

document.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {question.check(button.id[6])}))

question.display()