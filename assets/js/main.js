var timer = document.querySelector (".timer")
var body = document.querySelector (".bod")
var start = document.querySelector (".start")
var questionEl = document.querySelector (".question")
var choice = document.querySelector (".choice")
// var highscore = document.querySelector (".highscore")
var currentScore = document.querySelector (".currentscore")
var saveScore = document.querySelector(".save")
var userscore = document.querySelector(".yourScore")
var usertime = document.querySelector(".yourTime")
var saveButton = document.querySelector (".savebutton")
var timeLeft = 60;
var random
var cursco = 0;
var player = document.querySelector(".playerName")
var scoresList = JSON.parse(localStorage.getItem("scoresList")) || [];




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

saveButton.addEventListener("click", function(event){
  saveGame()

})

function saveGame() {
  var playerScore = {
    score: cursco,
    timeTake: timeLeft,
    playerName: player.value
  }
  scoresList.push(playerScore)
  localStorage.setItem("scoresList", JSON.stringify(scoresList))
}

function startQuiz() {
    questionEl.classList.remove('hide')
    choice.classList.remove('hide')
    start.classList.add('hide')
    random = randQuestion()
    showQuestion()
}


function randQuestion() {
    return questions[Math.floor(Math.random() * questions.length)]
}



function showQuestion() {
  setTimeout(function(){
    if (body.classList.contains("lost")){
      body.classList.remove("lost")
    }
    if (body.classList.contains("won")){
      body.classList.remove("won")
    }
    body.classList.add("neutral")

  },500)
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
  if (selectedChoice.dataset.correct){
    cursco ++;
    currentScore.textContent = cursco
    body.classList.remove("neutral")
    body.classList.add("won")
  }
  else{
    timeLeft = timeLeft - 10 ;
    body.classList.remove("neutral")
    body.classList.add("lost")
  }
  nextQuestion()
}




function nextQuestion (){
  questions.splice(questions.indexOf(random),1)
  if (questions.length === 0){
    endquiz()
  }
  else { 
    random = randQuestion()
    choice.innerHTML = ""
    showQuestion()
  }
}

function endquiz() {
  setTimeout(function(){
    if (body.classList.contains("lost")){
      body.classList.remove("lost")
    }
    if (body.classList.contains("won")){
      body.classList.remove("won")
    }
    body.classList.add("neutral")

  },500)
  questionEl.classList.add("hide")
  choice.classList.add("hide")
  saveScore.classList.remove("hide")
  userscore.textContent = cursco
  usertime.textContent = timeLeft
  
}


function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (questions.length === 0){
          clearInterval(timeInterval)
          endquiz()
          timer.textContent = timeLeft
        }
        if (timeLeft === 0) {
            endquiz()
            clearInterval(timeInterval);
            timer.textContent = "";
            //other functions
        }
    }, 1000);
}


