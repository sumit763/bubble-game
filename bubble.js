var hits = -1;
var timer = 60;
var score = 0;

// Load the high score from local storage if available
var highScore = localStorage.getItem("highscore");
if (highScore !== null) {
    document.querySelector("#highscoreval").textContent = highScore;
} else {
    highScore = 0;
}

// This function use to make N number of bubbles on the pannel screen
function make_bubble() {
    var printbubble = "";
    for (var i = 1; i <= 52; i++) {
        var diffNumber = Math.floor(Math.random() * 10);
        var diffColor = Math.floor(Math.random() * 1000);
        printbubble += `<div style="background-color: #${diffColor};"  class="circal">${diffNumber}</div>`;
    }
    document.querySelector(".pbottom").innerHTML = printbubble;
}


// This function use to make different hits 
function differentHits() {
    hits = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hits;
}


// This function is timer which run from 0 to 60 seconds after that it overs the game and display score 
function increaseTime() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.getElementById("timerval").innerHTML = timer;
        }
        else {
            clearInterval(timer);
            document.querySelector("#pannelbottom").innerHTML = `<h1 style ="position: relative;"> Game Over : Your Score : ${score} </h1>`;
        }
    }, 1000)

}


//  if you hit right bubble it will increase the score by 10 every time 
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;

    // Update high score if the current score is higher
    if (score > highScore) {
        highScore = score;
        document.querySelector("#highscoreval").textContent = highScore;

        // Store the high score in local storage
        localStorage.setItem("highscore", highScore);
    }
}



//   This function ensure that clicked bubble and hit number have same value 
function match_hits() {
    document.querySelector("#pannelbottom").addEventListener("click", function (get) {
        var match = (Number(get.target.textContent))
        if (match === hits) {
            increaseScore();
            differentHits();
            make_bubble();
        }
    });

}


match_hits();
make_bubble();
increaseTime();
differentHits();
