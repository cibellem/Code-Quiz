/// Global scope variables
var timer = document.getElementById("main");
var startTime = document.getElementById("timeStart");
startTime = 60;
var score = document.getElementById("divScore");
score = 0;
var h1score = document.getElementById("h1Score");
var questionDiv = document.getElementById("question1");
var questionDiv2 = document.getElementById("question2");
var questionDiv3 = document.getElementById("question3");
var questionDiv4 = document.getElementById("question4");
var questionDiv5 = document.getElementById("question5");
var finalDiv = document.getElementById("finalQuestion");
var inputFinal = document.getElementById("finalInput");
var submitBttn = document.getElementById("submitButton");
var buttonStart = document.getElementById("StartBttn");
var divInitial = document.getElementById("initialDiv");
var $magicalDiv = document.getElementById("magicalDiv");
var newGameBttn = document.getElementById("newGame");
var countdown = " "

var correctAnswers = ["alerts", "parentheses", "Client-side", "2names", "Functions"]

//Creating elements that I will use for each question . I am creating  a paragraph for each question and buttons

var question1 = document.createElement("p");
var question2 = document.createElement("p");
var question3 = document.createElement("p");
var question4 = document.createElement("p");
var question5 = document.createElement("p");
var bttn1 = document.createElement('button');
var bttn2 = document.createElement('button');
var bttn3 = document.createElement('button');
var bttn4 = document.createElement('button');

//setting atributes to my buttons
bttn1.setAttribute("class", " btn-warning")
bttn2.setAttribute("class", " btn-warning")
bttn3.setAttribute("class", "btn-warning")
bttn4.setAttribute("class", "btn-warning")
question1.setAttribute("class", "mt-4")
question2.setAttribute("class", "mt-4")
question3.setAttribute("class", "mt-4")
question4.setAttribute("class", "mt-4")
question5.setAttribute("class", "mt-4")
inputFinal.setAttribute("class", "mt-4")


setUpGAme()

buttonStart.addEventListener("click", startQuiz);
newGameBttn.addEventListener("click", setUpGAme);
// submitBttn.addEventListener("click", submit);


function setUpGAme() {
    timer.style.display = "block"
    finalDiv.style.display = "none"
    $magicalDiv.style.display = "none";
    divInitial.style.display = "block"
    inputFinal.style.display = "none"
    submitBttn.style.display = 'none'
    newGameBttn.style.display = "none"
}


function startQuiz() {
    score = 0;
    startTime = 60;
    firstQuestion()
    divInitial.style.display = "none"
    finalDiv.style.display = "none"
    inputFinal.style.display = "none"



    countdown = setInterval(function () {
        startTime--;
        timer.innerHTML = startTime;

        if (startTime === 0) {
            clearInterval(countdown);
            timer.textContent = "Time is out!";
        }

        if (questions[i].length === -1) {
            clearInterval(countdown);
            timer.textContent = "Time is out!";
        }

        // I want to creat another if to to stop the time. When there are no more questions to be asked timer stop,
    }, 1000);

}


function firstQuestion() {

    $magicalDiv.style.display = "block"
    questionDiv.style.display = "block"
    questionDiv2.style.display = "none"
    questionDiv3.style.display = "none"
    questionDiv4.style.display = "none"
    questionDiv5.style.display = "none"
    finalDiv.style.display = "none"
    inputFinal.style.display = "none"
    submitBttn.style.display = "none"



    for (i = 0; i < questions[0].choices.length; i++) {


        //change the html content 
        question1.textContent = questions[0].title;
        bttn1.textContent = questions[0].choices[0]
        bttn2.innerHTML = questions[0].choices[1]
        bttn3.innerHTML = questions[0].choices[2]
        bttn4.innerHTML = questions[0].choices[3]

        //Appending the question and buttons 

        questionDiv.appendChild(question1);
        questionDiv.appendChild(bttn1);
        questionDiv.appendChild(bttn2);
        questionDiv.appendChild(bttn3);
        questionDiv.appendChild(bttn4);


    }

}


function secondQuestion() {

    questionDiv2.style.display = "block"
    questionDiv.style.display = "none"
    finalDiv.style.display = "none"
    inputFinal.style.display = "none"
    submitBttn.style.display = "none"


    for (i = 0; i < questions[1].choices.length; i++) {

        // debugger
        question2.textContent = questions[1].title;

        //get elements inside of the array
        bttn1.innerHTML = questions[1].choices[0]
        bttn2.innerHTML = questions[1].choices[1]
        bttn3.innerHTML = questions[1].choices[2]
        bttn4.innerHTML = questions[1].choices[3]

        //appending questions and buttons

        questionDiv2.appendChild(question2);
        questionDiv2.appendChild(bttn1);
        questionDiv2.appendChild(bttn2);
        questionDiv2.appendChild(bttn3);
        questionDiv2.appendChild(bttn4)

    }

}

function thirdQuestion() {

    questionDiv2.style.display = "none"
    questionDiv3.style.display = "block"
    finalDiv.style.display = "none"
    inputFinal.style.display = "none"
    submitBttn.style.display = "none"


    for (i = 0; i < questions[2].choices.length; i++) {


        question3.textContent = questions[2].title;

        //get elements inside of the array
        bttn1.innerHTML = questions[2].choices[0]
        bttn2.innerHTML = questions[2].choices[1]
        bttn3.innerHTML = questions[2].choices[2]
        bttn4.innerHTML = questions[2].choices[3]

        //appending question and buttons 
        questionDiv3.appendChild(question3);
        questionDiv3.appendChild(bttn1);
        questionDiv3.appendChild(bttn2);
        questionDiv3.appendChild(bttn3);
        questionDiv3.appendChild(bttn4);

    }
}

function fourthQuestion() {

    questionDiv3.style.display = "none"
    questionDiv4.style.display = "block"
    finalDiv.style.display = "none"
    inputFinal.style.display = "none"
    submitBttn.style.display = "none"

    for (i = 0; i < questions[3].choices.length; i++) {


        question4.textContent = questions[3].title;

        //get elements inside of the array
        bttn1.innerHTML = questions[3].choices[0]
        bttn2.innerHTML = questions[3].choices[1]
        bttn3.innerHTML = questions[3].choices[2]
        bttn4.innerHTML = questions[3].choices[3]

        //apending questions and buttons
        questionDiv4.appendChild(question4);
        questionDiv4.appendChild(bttn1);
        questionDiv4.appendChild(bttn2);
        questionDiv4.appendChild(bttn3);
        questionDiv4.appendChild(bttn4);


    }
}

function fifthQuestion() {
    // when button it's clicked only 5th question shows up 


    questionDiv4.style.display = "none"
    questionDiv5.style.display = "block"
    inputFinal.style.display = "none"
    submitBttn.style.display = "none"

    for (i = 0; i < questions[4].choices.length; i++) {

        question5.textContent = questions[4].title;

        //get elements inside of the array

        bttn1.innerHTML = questions[4].choices[0]
        bttn2.innerHTML = questions[4].choices[1]
        bttn3.innerHTML = questions[4].choices[2]
        bttn4.innerHTML = questions[4].choices[3]

        //appending question and buttons
        questionDiv5.appendChild(question5);
        questionDiv5.appendChild(bttn1);
        questionDiv5.appendChild(bttn2);
        questionDiv5.appendChild(bttn3);
        questionDiv5.appendChild(bttn4);


    }

}

function finishQuiz() {

    questionDiv5.style.display = "none"
    finalDiv.style.display = "block"
    inputFinal.style.display = "block"
    submitBttn.style.display = "block"
    finalDiv.innerHTML = "Great Job! Your final score is " + score + " . \n Enter your first initials below to save your result. "
    clearTimeout(countdown);

}


//This  event listener will submit users initials and score to localStorage
submitBttn.addEventListener("click", function () {

    newGameBttn.style.display = "block"
    inputFinal.style.display = "none"
    submitBttn.style.display = "none"
    var playerName = inputFinal.value;
    finalDiv.innerHTML = "Thanks for playing " + playerName + " !"

    var score
    var player = {
        name: playerName,
        score: score,
    };

    localStorage.setItem("user", JSON.stringify(player));

})


//Event delegation on my choice buttons 

questionDiv.addEventListener("click", function (evt) {

    if (evt.target.matches("button")) {


        score = score + 5
        h1score.innerHTML = score;
        secondQuestion();
        localStorage.setItem("user", score);


    } else if (evt.target.matches("button")) {

        secondQuestion();
    }
    ///if button clicked is the second button

})

questionDiv2.addEventListener("click", function (evt) {

    if (evt.target.matches("button")) {

        thirdQuestion();
        score = score + 5
        h1score.innerHTML = score;
    }

})

questionDiv3.addEventListener("click", function (evt) {

    if (evt.target.matches("button")) {

        fourthQuestion();
        score = score + 5
        h1score.innerHTML = score;
    }

})

questionDiv4.addEventListener("click", function (evt) {

    if (evt.target.matches("button")) {

        fifthQuestion();
        score = score + 5
        h1score.innerHTML = score;

    }

})



questionDiv5.addEventListener("click", function (evt) {

    if (evt.target.matches("button")) {

        finishQuiz();

    }

})











