function myFunction(numQuestions) {
    for (i = 0; i < numQuestions; i++) {

      write ("Question 1")
      input (value="")


    return 0
  }
}

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

var questions = [{
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

//updates questions array
function callPhpFile(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhr.open("GET", "createQuestions.php");
  xhr.send();
  xhr.onload = function () {
    var javar = this.response;
    console.log("Loaded: "+javar);
    
    if (xhr.status != 200) {
        alert('Error '+xhr.status+': '+xhr.statusText); // e.g. 404: Not Found
    } else { // xhr.responseXML is the server response
        var questDoc, qList, qs, as, i;
        questDoc = xhr.responseXML;
        console.log('Question Document: '+questDoc);
        if (questDoc != null) { //update questions from default
		  qs = questDoc.getElementsById("question");
          as = questDoc.getElementsById("answer");
          qList = [];
          for (i = 0; i < x.length; i++){
            qList.push({question: qs[i].nodeValue,
              choiceA: as[i*5+0].nodeValue,
              choiceB: as[i*5+1].nodeValue,
              choiceC: as[i*5+2].nodeValue,
              choiceD: as[i*5+3].nodeValue,
              correctAnswer: as[i*5+4].nodeValue});
          }
        }
    }
  };
};

//getQuestion function
function getQuestion() {
	callPhpFile();
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
  scoreBlock.innerHTML = "<p> You scored " + score + " out of " + questions.length + "!</p>";
  //this if-else if-else is preferable with 10 questions
  if (score < 4) {
    scoreMessage.innerHTML = "<p>Not so good!</p>";
  }
  else if (score < 8) {
    scoreMessage.innerHTML = "<p>Not bad! But still room for improvement.</p>";
  }
  else {
    scoreMessage.innerHTML = "<p>Great work!</p>";
  }
  scoreMessage.style.display = "block";
  quizAgain.style.display = "block";
}

//function to check if answer is correct
function check(answer) {
  if (questionIndex < questions.length - 1) {
    getQuestion();
}
  else {
    showScore();
}

if (answer == questions[questionIndex].correctAnswer) {
  score++;
  questionIndex++;
  choices.style.display = "none";
  choiceResponse.innerHTML= '<p style="color:green">Correct!</p>';
  choiceResponse.style.display = "block";
  setTimeout(getQuestion,500);
}
else {
  questionIndex++;
  choices.style.display = "none";
  choiceResponse.innerHTML= '<p style="color:red">Incorrect!</p>';
  choiceResponse.style.display = "block";
  setTimeout(getQuestion,500);
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
