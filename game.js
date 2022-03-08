var playing = false;
var score;


//if we click on the start/reset
document.getElementById("startReset").onclick = function(){
    //if we are playing
    if(playing == true){
        location.reload(); //reload page
    }
     //if we are not playing
    else {
         score = 0;
        
        document.getElementById("scoreValue").innerHTML = score;//set score to 0
        
        document.getElementById("timer").style.display="block";//show countdown box
        
        document.getElementById("startReset").innerHTML = "Reset Game"; // change button to reset
        
    }
}

    
//reduce time by 1 sec in loop
// time left ?
//yes -> continue
//no -> gameover

// generate new Q&A

//if we click on answer box
//if we are playing
//correct ?
    //yes
        //increase score by 1
        //show correct box for 1 sec
        //generate new Q&A
    //No
        //show try again box for 1 sec
