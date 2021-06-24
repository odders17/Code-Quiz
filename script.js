var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById
('question-container')
var questionElement = document.getElementById('question')
var anwserButtonsElement = document.getElementById ('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        anwserButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (anwserButtonsElement.firstChild) {
        anwserButtonsElement.removeChild
        (anwserButtonsElement.firstChild)
    }
}

function selectAnwser(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
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

var questions = [
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true},
            { text:'22', correct: false}
        ]
    },
    {
        question: 'Who is the best footballer?',
        answers: [
        { text: 'Jack Grealish', correct: true},
        { text: 'Mpbappe', correct: false},
        { text: 'Messi', correct: false},
        { text: 'Ronaldo', correct: false},
        ]
    },
    {
        question: 'Who is the best footballer?',
        answers: [
        { text: 'Jack Grealish', correct: true},
        { text: 'Mpbappe', correct: false},
        { text: 'Messi', correct: false},
        { text: 'Ronaldo', correct: false},
        ]
    },
    {
        question: 'Who is the best footballer?',
        answers: [
        { text: 'Jack Grealish', correct: true},
        { text: 'Mpbappe', correct: false},
        { text: 'Messi', correct: false},
        { text: 'Ronaldo', correct: false},
        ]
    },
    {
        question: 'Who is the best footballer?',
        answers: [
        { text: 'Jack Grealish', correct: true},
        { text: 'Mpbappe', correct: false},
        { text: 'Messi', correct: false},
        { text: 'Ronaldo', correct: false},
        ]
    },
    {
        question: 'Who is the best footballer?',
        answers: [
        { text: 'Jack Grealish', correct: true},
        { text: 'Mpbappe', correct: false},
        { text: 'Messi', correct: false},
        { text: 'Ronaldo', correct: false},
        ]
    },
]