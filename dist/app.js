const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')
const startBtn = document.getElementById('start-quiz')
const game = document.querySelector('.container')
const resetBtn = document.querySelector('.reset-game')

function startQuiz() {
  startBtn.style.display = 'none';
  game.style.display = 'block'
}

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
  },
  {
    question: "Which of these people DID NOT have the title Captain America?",
    answers: {
      a: "Natsha Romanoff",
      b: "Sam Wilson",
      c: "Bucky Barnes",
      d: "Steve Rodgers"
    },
    correctAnswer: "a"
  },
  {
    question: "JavaScript and Java are the same thing",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the name of NFL trophy?",
    answers: {
      a: "Larry O'Bryant",
      b: "Vince Lombradi",
      c: "Football trophy ",
      d: "Patriots"
    },
    correctAnswer: "b"
  },
  {
    question: "Where did Assasin's Creed 3 take place?",
    answers: {
      a: "The America Revolution",
      b: "Italy",
      c: "Eygpt",
      d: "Greece"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of these is a JavaScript Data Type?",
    answers: {
      a: "numbers",
      b: "strings",
      c: "objects",
      d: "All be above"
    },
    correctAnswer: "d"
  },
  {
    question: "Which popular anime began as a web manga, and the protaginist is known for their non-chalant attitude?",
    answers: {
      a: "Naruto",
      b: "The Rising Sheild Hero",
      c: "One Punch Man",
      d: "Fairy Gone"
    },
    correctAnswer: "c"
  },
  {
    question: "In 2014, who took the mantle as Thor?",
    answers: {
      a: "Captain America",
      b: "Jane Foster",
      c: "DareDevil",
      d: "Black Panther"
    },
    correctAnswer: "b"
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
      output.push(`<div id="page-${questionNumber}" class='page'>
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                  </div>`)
    })
    quizContainer.innerHTML = output.join('')
    resultsContainer.style.display = 'none'
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
    resultsContainer.style.display = 'block'
  }

  startBtn.addEventListener('click', startQuiz)

  resetBtn.addEventListener('click', buildQuiz)

  submitButton.addEventListener('click', showResults)

  buildQuiz()





