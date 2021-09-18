var timer = document.querySelector (".timer")
var start = document.querySelector (".start")
var question = document.querySelector (".question")
var choice = document.querySelector (".choice")
var highscore = document.querySelector (".highscore")

start.addEventListener("click", function (event) {
    startGame();
    countdown();

});

// function endGame() {
//     $("highscore").trigger('click');
// }


function startGame() {
    question.classList.remove('hide')
    choice.classList.remove('hide')
    start.classList.add('hide')

}


function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = "";
            // endGame();
        }
    }, 1000);
}

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
      question: 'What is the correct way to stop event bubbling?',
      answers: [
        { text: 'event.stopPropogation()', correct: true },
        { text: 'stopPropogation()', correct: false },
        { text: 'event.stopBubbling()', correct: false },
        { text: 'stop.Bubbling', correct: false }
      ]
    },
  ]