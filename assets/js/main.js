var timer = document.querySelector (".timer")
var start = document.querySelector (".start")
var questionEl = document.querySelector (".question")
var choice = document.querySelector (".choice")
var highscore = document.querySelector (".highscore")
var questionIndex

console.log(questionEl);

const questions = [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
        { text: '<javascript>', correct: false },
        { text: 'script', correct: true },
        { text: 'js', correct: false },
        { text: 'scripting', correct: false }
      ]
    },
    {
        question: 'Is "64" & 64 the same in javascript ?',
        answers: [
          { text: 'Yes', correct: false },
          { text: 'No', correct: true }
        ]
    },
    {
      question: 'What is the correct way to stop event bubbling?',
      answers: [
        { text: 'event.stopPropogation()', correct: true },
        { text: 'stopPropogation()', correct: false },
        { text: 'event.stopBubbling()', correct: false },
        { text: 'stop.Bubbling', correct: false }
      ]
    },
    {
        question: 'What is the correct Symbol for "OR" comparision ?',
        answers: [
          { text: '&&', correct: false },
          { text: '=>', correct: false },
          { text: '-', correct: false },
          { text: '||', correct: true }
        ]
    },
    {
        question: 'Is Javascript & Java the same ?',
        answers: [
          { text: 'true', correct: false },
          { text: 'false', correct: true }
        ]
    },
    {
        question: 'What is the correct method to add items to a array ?',
        answers: [
          { text: '.slice', correct: false },
          { text: '.splice', correct: false },
          { text: '.push', correct: true },
          { text: '.pull', correct: false }
        ]
    },
]

start.addEventListener("click", function (event) {
    startQuiz();
    countdown();

});

function startQuiz() {
    questionEl.classList.remove('hide')
    choice.classList.remove('hide')
    start.classList.add('hide')
    randQuestion()
    showQuestion()
}


function randQuestion() {
    return questions[Math.floor(Math.random() * questions.length)]
}



function showQuestion() {
    questionEl.innerText = randQuestion().question
    for (var i = 0; i < randQuestion().answers.length; i++){
      const button = document.createElement ('button')
      button.innerText = randQuestion().answers.text
      button.dataset.correct = randQuestion().answers.correct
      button.addEventListener('click', selectAnswer)
      choice.appendChild(button)
    }
}

function selectAnswer(){
    
}

function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = "";
            //other functions
        }
    }, 1000);
}