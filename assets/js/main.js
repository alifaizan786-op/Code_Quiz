var timer = document.querySelector (".timer")
var start = document.querySelector (".start")
var questionEl = document.querySelector (".question")
var choice = document.querySelector (".choice")
var highscore = document.querySelector (".highscore")
var currentScore = document.querySelector(".currentscore")
var questionIndex
var timeLeft = 60;



const questions = [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
        { text: '<javascript>', correct: false },
        { text: '<script>', correct: true },
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
    var random = randQuestion()
    questionEl.innerText = random.question
    for (var i = 0; i < random.answers.length; i++){
      const button = document.createElement ('button')
      button.innerText = random.answers[i].text
      if (random.answers[i].correct){
      button.dataset.correct = random.answers[i].correct
      }
      button.addEventListener('click', selectChoice)
      choice.appendChild(button)
    }
}

function selectChoice(event){
  var selectedChoice = event.target
  var cursco = 0;
  if (selectedChoice.dataset.correct){
    cursco ++;
    currentScore.textContent = cursco
    
  }
  else{
    timeLeft = timeLeft - 10 ;
  }
  nextQuestion
}

function nextQuestion (){
  showQuestion()

}

function resetState (){
  while (choice.firstChild) {
    choice.removeChild(choice.firstChild)
  }
}

function countdown() {
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