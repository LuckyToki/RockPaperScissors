const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('results')
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let emitter



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice=e.target.id
    userChoiceDisplay.innerHTML= userChoice 
    generateComputerChoice()
    getResult() 

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // maybe possibleChoices.length

    if(randomNumber === 1) {
        computerChoice = "Rock"
    }
    if(randomNumber === 2) {
    computerChoice = "Scissors"
    }
    if(randomNumber === 3) {
        computerChoice = "Paper"
    }
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw 🤷🏾‍♀️ "
    }
if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You Win 🥳"
    }
if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You Lose 🥲"
    }
if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You Lose 🥲"
    }
if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Win 🥳"
}
if (computerChoice === "Paper" && userChoice === "Scissors") { 
    result = "You Win 🥳" 
}
if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You Lose 🥲 "
}

resultDisplay.innerHTML=result
}
