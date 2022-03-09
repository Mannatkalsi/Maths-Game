var playing = false;
var score;
var action;
var timer;
var correctAnswer;

//if we click on the start/reset
document.getElementById("startReset").onclick = function () {

    //if we are playing
    if (playing == true) {

        location.reload(); //reload page
    }
    //if we are not playing
    else {
        //change mode to playing
        playing = true;

        //set score to 0

        score = 0;
        document.getElementById("scoreValue").innerHTML = score;

        //show countdown box

        show("timer");
        timer = 60;
        document.getElementById("timerValue").innerHTML = timer;//show time

        hide("gameOver"); //hide game over box/section
        
        document.getElementById("instruction").innerHTML = " Click on the Correct Answer!";

        document.getElementById("startReset").innerHTML = "Reset Game"; // change button to reset

        //Start the countdown
        startCountdown();

        // generate new Q&A
        generateQA();
    }
}

//clicking on an answer box

for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function(){
        //Check if we are playing
        if (playing == true) { //yes
            if (this.innerHTML == correctAnswer) { //correct answer
                score++; //increase score by 1

                document.getElementById("scoreValue").innerHTML = score;

                //hide the wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 2000);
                
                generateQA();//generate new question
            }
            else {
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 2000);
                //generateQA();//generate new question
            }
        }
    }
}
//functions

//Start the Counter    
function startCountdown() {
    action = setInterval(function () {
        timer -= 1;
        document.getElementById("timerValue").innerHTML = timer;//reduce time by 1 sec in loop

        if (timer == 0) { //Gameover
            stopCountdown(); //Stop the timer
            show("gameOver"); // show gameover section
            document.getElementById("gameOver").innerHTML = "<p>Game Over!!!</p><p>Your Score is " + score + ".</p>"; // show scores
            hide("timer"); // hide timer
            hide("correct"); // hide correct answer section
            hide("wrong"); //hide wrong answer section
            playing = false; // change mode to not playing
            //document.getElementById("startReset").innerHTML = "Start Game";

        }

    }, 1000);
}

//Stop the Counter 
function stopCountdown() {
    clearInterval(action);
}

//Hide certain elements 
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//Show certain elements
function show(Id) {
    document.getElementById(Id).style.display = "block";
}

//Generate Questions and Mulity choice Answers
function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;

    var correctPosition = 1 + Math.round(3 * Math.random());//putting correct answer is random position.

    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; // fill one box with correct answer

    //fill other boxes with wrong answers

    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));//wrong answer
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
