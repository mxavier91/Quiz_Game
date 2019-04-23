const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')
const startBtn = document.getElementById('start-quiz')
const game = document.querySelector('.container')

function startQuiz() {
  startBtn.style.display = 'none';
  game.style.display = 'block'
}

function resetQuiz () {
  
}

startBtn.addEventListener('click', startQuiz)

const quizGame = [
  {
    question: "What is the name of Boston's Baseball team?",
    answers: {
      a: "Celtics",
      b: "Paw Sox",
      c: "Red Sox",
      d: "White Sox"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of these were developed by Rockstar Games?",
    answers: {
      a: "Detriot",
      b: "Halo",
      c: "GTA",
      d: "DragonBall FighterZ"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is the protagonist of One Piece",
    answers: {
      a: "Goku",
      b: "Naruto",
      c: "Luffy",
      d: "Deku"
    },
    correctAnswer: "c"
  }
]


  function buildQuiz() {
    const output = [];

    quizGame.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for(letter in currentQuestion.answers) {
        answers.push(`<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                      </label>`)
      }
      output.push(`<div class="question"> ${currentQuestion.question} </div>
                  <div class="answers"> ${answers.join('')} </div>`)
                  console.log(currentQuestion)
    })
    quizContainer.innerHTML = output.join('')
  }


  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers')

    let numCorrect = 0;

    quizGame.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer) {
        numCorrect++
        answerContainers[questionNumber].getElementsByClassName.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red'
      }
    })
    resultsContainer.innerHTML = numCorrect + ' out of ' + quizGame.length;
  }

  submitButton.addEventListener('click', showResults)

  buildQuiz()



