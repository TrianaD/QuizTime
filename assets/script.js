// Questions for Quiz // 

const quizQuestions = [
    {
      question: 'Who speaks the first line of the series?',
      a: 'Rory',
      b: 'Lorelai ',
      c: 'Luke',
      answer: 'b',
    },
    {
      question: 'Which major character was originally scripted as a woman?',
      a: 'Luke',
      b: 'Taylor',
      c: 'Kirk',
      answer: 'a',
    },
    {
      question: 'Which of the Gilmore Girls actresses hates coffee in real life ?',
      a: 'Michelle',
      b: 'Rory ',
      c: 'Dean',
      answer: 'b',
    },
    {
      question: 'What is the population of Stars Hollow ?',
      a: '15,812 ',
      b: '4,566',
      c: '9,973',
      answer: 'c',
    },
    {
      question: 'What does Rory shoplift after her first kiss with Dean ?',
      a: 'Baking Powder ',
      b: 'Flour ',
      c: 'Cornstarch ',
      answer: 'c',
    },
  ];


 // Capture element data //
var question = document.getElementById('question');
var a = document.getElementById('a+');
var b = document.getElementById('b+');
var c = document.getElementById('c+');
var btn = document.getElementById('submit');
var start = document.getElementById('Start');
var all_answer = document.querySelectorAll('.answer');
var winCounter = 0;
var loseCounter=0;
var timercount=45;
var timer;
var isWin = false;


var index = 0;
var score;




// clear all answers
function clear() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//load quiz questions
function getquiz() {
  clear();
  question.innerText = quizQuestions[index].question;
  a.innerText = quizQuestions[index].a;
  b.innerText = quizQuestions[index].b;
  c.innerText = quizQuestions[index].c;
}
//move forward the quiz
start.addEventListener("click", getquiz(), startquiz()
// ,startTimer()
);

function startquiz() {
    
    
    btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizQuestions[index].correct) {
        score++;
        window.alert("Correct");
      } 
    }
    index++;
    if (index <= quizQuestions.length) {
      getquiz();
    } else {
        var intial = window.prompt("Enter Intials");
        score=timercount;
        alert('score :' + score);
        location.reload();
    }

  });
}
//get the getSelected answer
function getSelected() {
    let ans = undefined;
    all_answer.forEach((el) => {
      if (el.checked) {
        ans = el.id;
      }
    });
    return ans;
  }

function savescores(){
    var intial = window.prompt("Enter Intials");
    window.localStorage.setItem("initial",JSON.stringify([]));
    console.log(JSON.parse(localStorage.getItem("initial")))
    localStorage.getItem("initial");
    display.textContent()
    renderLastRegistered();

    console.log(intial);
    score = timercount;
    console.log(score);
    // localStorage.setItem("initial","initials");
    // console.log(initials);

}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // startquiz()
//     // Sets timer
//     var timer = setInterval(function() {
//       var now = getSeconds();
//       var distance = timercount - now;
//       var seconds = Math.floor((distance % ( 1000*60)));
//       document.getElementById("demo").innerHTML = seconds + "s";

//         timercount--;

//       // Tests if time has run out
//       if (timercount = 45) {
//         // Clears interval
//         clearInterval(timer);
//         window.alert("Game Over");
//     }
//     }
    
//     ,1000);


    
// }

