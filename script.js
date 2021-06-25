var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById
('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById ('answer-buttons')

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestion.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }  
}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var question = [
    {
        question: 'Do you have to be good at math to be a developer?',
        answers: [
            { text: 'No', correct: true},
            { text:'Yes', correct: false},
            { text: 'Maybe', correct: false},
            { text: 'Think so', correct: false},
        ]
    },
    {
        question: 'What is HTML?',
        answers: [
        { text: 'HydroTomoto Makeup', correct: false},
        { text: 'HypeTool Mashup', correct: false},
        { text: 'HenryTank Melon', correct: false},
        { text: 'HyperText Markup', correct: true},
        ]
    },
    {
        question: 'What is CSS?',
        answers: [
        { text: 'Control Semantic Styles', correct: false},
        { text: 'Cascading Style Sheets', correct: true},
        { text: 'Computer Source Sheet', correct: false},
        { text: 'Colouful Sound Style', correct: false},
        ]
    },
    {
        question: 'What is Java Script?',
        answers: [
        { text: 'An object based scripting language', correct: true},
        { text: 'Is embedded Inside web Browsers', correct: true},
        { text: 'Interprets script contained in web browsers', correct: true},
        { text: 'It cannot read or write files', correct: true},
        ]
    },
    {
        question: 'What is a string in java script?',
        answers: [
        { text: 'Stores a series of characters', correct: true},
        { text: 'ties your shoes up', correct: false},
        { text: 'Plays conkers with it', correct: false},
        { text: 'holds up your trousers', correct: false},
        ]
    },
    {
        question: 'What is a push button?',
        answers: [
        { text: 'chocolate sweets ', correct: false},
        { text: 'fastens your shirts', correct: false},
        { text: 'when user pushes a button a click event occurs', correct: true},
        { text: 'Can be found on clothing', correct: false},
        ]
    },
]