function myFunction(numQuestions) {
    for (i = 0; i < numQuestions; i++) {

      write ("Question 1")
      input (value="")


    return 0
  }
}

/* //quiz game logic 11.18.2020
//HTML DOM Objects = Start BUTTON, Next BUTTONS, Question container, Question element, answer element
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
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
  question.answers.forEach(answer => {
    const button = document.createElement('button')
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
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
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

//questions
const questions = [{
  question: "What is 2 x 2?",
  answers: [
    {text: '3', correct: false },
    {text: '2', correct: false },
    {text: '5', correct: false },
    {text: '4', correct: true }
]},
{
  question: 'When is New Years in the US?',
  answers: [
    {text: 'January 5', correct: false },
    {text: 'December 25', correct: false },
    {text: 'January 1', correct: true },
    {text: 'February 14', correct: false }
  ]},
{
  question: 'What is 53 + 26?',
  answers: [
    {text: '50', correct: false },
    {text: '70', correct: false },
    {text: '79', correct: true },
    {text: '84', correct: false }
  ]}
] //end of questions array 
*/

//------11.29.2020 new version---------//
//HTML DOM Objects
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
//var quizImg = document.getElementById("quizImg");
var questionIndex = 0;
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");

let questions = [{
    question: "What is 1 + 1?",
    choiceA: "1",
    choiceB: "2",
    choiceC: "11",
    choiceD: "3",
    correctAnswer: "B"
}, {
    question: "What 2 + 2?",
    choiceA: "22",
    choiceB: "2",
    choiceC: "4",
    choiceD: "Fish",
    correctAnswer: "C"
}, {
    question: "What is 3 + 3?",
    choiceA: "6",
    choiceB: "9",
    choiceC: "5",
    choiceD: "33",
    correctAnswer: "A"
}, {
    question: "What is 4 + 4?",
    choiceA: "8",
    choiceB: "9",
    choiceC: "10",
    choiceD: "7",
    correctAnswer: "A"
}, {
    question: "When is New Years?",
    choiceA: "January 7",
    choiceB: "December 25",
    choiceC: "February 14",
    choiceD: "January 1",
    correctAnswer: "D"
}, {
    question: "Who was the first US President?",
    choiceA: "John Adams",
    choiceB: "Thomas Jefferson",
    choiceC: "George Washington",
    choiceD: "Abraham Lincoln",
    correctAnswer: "C"
}, {
    question: "What do you call water falling from the sky?",
    choiceA: "Snow",
    choiceB: "Rain",
    choiceC: "Dogs",
    choiceD: "Rocks",
    correctAnswer: "B"
}, {
    question: "What is 6 * 7?",
    choiceA: "13",
    choiceB: "67",
    choiceC: "76",
    choiceD: "42",
    correctAnswer: "D"
}, {
    question: "What animal makes a moo sound?",
    choiceA: "Cows",
    choiceB: "Pigs",
    choiceC: "Dogs",
    choiceD: "Cats",
    correctAnswer: "A"
}, {
    question: "Is today a good day?",
    choiceA: "No",
    choiceB: "Yes",
    choiceC: "Maybe",
    choiceD: "I don't know",
    correctAnswer: "B"
}, ];


//getQuestion function
function getQuestion() {
    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    //quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}

// start quiz
function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function
function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good!</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Not bad! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}

//function to check if answer is correct
function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,500);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,500);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,500);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,500);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
