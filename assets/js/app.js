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
var contentHide = document.getElementById("initialDiv");
var hideDiv = document.getElementById("magicalDiv");
var newGame = document.getElementById("newGame");
var players = [];

//Creating elements that I will use for each question

var question1 = document.createElement("p");
var question2 = document.createElement("p");
var question3 = document.createElement("p");
var question4 = document.createElement("p");
var question5 = document.createElement("p");
var bttn1 = document.createElement('button');
var bttn2 = document.createElement('button');
var bttn3 = document.createElement('button');
var bttn4 = document.createElement('button');

bttn1.setAttribute("class", "btn btn-outline-warning")
bttn2.setAttribute("class", "btn btn-outline-warning")
bttn3.setAttribute("class", "btn btn-outline-warning")
bttn4.setAttribute("class", "btn btn-outline-warning")



//Event listeners
buttonStart.addEventListener("click", startQuiz);
// newGame.addEventListener("click", newStart);
submitBttn.addEventListener("click", submit);


hideDiv.style.visibility = "hidden";


// //when the user clicks on START button the quiz starts 
//Created a function for each question 

function startQuiz() {
    //when the function it's invoked the container will hide  and countdown will start
    contentHide.style.display = "none"
    inputFinal.style.visibility = "hidden"
    submitBttn.style.visibility = 'hidden'
    newGame.style.visibility = "hidden"


    //my 1st question is displayed
    firstQuestion()

    var countdown = setInterval(function () {
        startTime--;
        timer.innerHTML = startTime;


        if (startTime === 0) {
            clearInterval(countdown);
        }


        if (startTime === 0) {

            timer.textContent = "Time is out!";

        }

    }, 1000);

}


function firstQuestion() {

    hideDiv.style.visibility = "visible"
    questionDiv2.style.display = "none"
    questionDiv3.style.display = "none"
    questionDiv4.style.display = "none"
    questionDiv5.style.display = "none"
    finalDiv.style.display = "none"


    // bttn1.setAttribute("class", "btn-light")    

    for (i = 0; i < questions[0].choices.length; i++) {


        question1.textContent = questions[0].title;


        //get elements inside of the array
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


    bttn1.addEventListener("click", function () {
        secondQuestion()
    })
    bttn2.addEventListener("click", function () {
        secondQuestion()
    })
    bttn3.addEventListener("click", function () {
        secondQuestion()
        // ++score
        // h1score.innerHTML = "Score = " + score;
        // console.log(score)

    })
    bttn4.addEventListener("click", function () {
        secondQuestion()
    })

}

function secondQuestion() {

    questionDiv2.style.display = "block"
    questionDiv.style.display = "none"


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

    bttn1.addEventListener("click", function () {

        thirdQuestion()
    })
    bttn2.addEventListener("click", function () {
        thirdQuestion()
    })
    bttn3.addEventListener("click", function () {
        thirdQuestion()
        // ++score
        // h1score.innerHTML = "Score = " + score;
        // console.log(score)

    })
    bttn4.addEventListener("click", function () {
        thirdQuestion()
    })


}

function thirdQuestion() {

    questionDiv2.style.display = "none"
    questionDiv3.style.display = "block"


    for (i = 0; i < questions[2].choices.length; i++) {

        // debugger
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

    bttn1.addEventListener("click", function () {
        fourthQuestion()
        // ++score
        // h1score.innerHTML = "Score = " + score;
        // console.log(score)
    })
    bttn2.addEventListener("click", function () {
        fourthQuestion()
    })
    bttn3.addEventListener("click", function () {
        fourthQuestion()


    })
    bttn4.addEventListener("click", function () {
        fourthQuestion()
    })

}

function fourthQuestion() {


    questionDiv3.style.display = "none"
    questionDiv4.style.display = "block"

    for (i = 0; i < questions[3].choices.length; i++) {

        // debugger
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

    bttn1.addEventListener("click", function () {
        fifthQuestion()
    })


    bttn2.addEventListener("click", function () {
        fifthQuestion()
    })



    bttn3.addEventListener("click", function () {
        fifthQuestion()
    })



    bttn4.addEventListener("click", function () {
        // ++score
        // h1score.innerHTML = "Score = " + score;
        // console.log(score)
        fifthQuestion()

    })
    console.log(score);

}
function fifthQuestion() {
    // when button it's clicked only 5th question shows up 


    questionDiv4.style.display = "none"
    questionDiv5.style.display = "block"

    for (i = 0; i < questions[4].choices.length; i++) {

        // debugger
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

    bttn1.addEventListener("click", function () {

        finishQuiz()
    })
    bttn2.addEventListener("click", function () {
        ++score
        // h1score.innerHTML = "Score = " + score;
        finishQuiz()
    })
    bttn3.addEventListener("click", function () {
        finishQuiz()


    })
    bttn4.addEventListener("click", function () {
        finishQuiz()
    })


}

function finishQuiz() {

    questionDiv5.style.display = "none"
    finalDiv.style.display = "block"
    inputFinal.style.visibility = "visible"
    submitBttn.style.visibility = "visible"

    finalDiv.innerHTML = "Great Job! Your final score is " + score + " Enter your first initials below to save your result."
    console.log();

}
function submit() {

    // newGame.style.visibility = "visible"
    inputFinal.style.display = "none"
    submitBttn.style.display = "none"

    var playerName = inputFinal.value;
    finalDiv.innerHTML = "Thanks for playing " + playerName + " !"



}







//function storing {


//     var storePlayerName = localStorage.getItem("players"));
//     localStorage.setItem("todos", JSON.stringify(players))
//    


//         if (storePlayerName !== null) {
//             players = storePlayerName;


//         }

//     }   }
// }