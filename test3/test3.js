// CSC 3123 Web Development
// Test 3 - Hands-on Component
// Sam Bacon
// ----------------------------------------------------------

// Global variables
var gameOn = false; // controls whether the game is running
var score = 0; // keeps track of the score
var minTime = 500; // minimum time (ms) for a face to appear
var maxTime = 2500; // maximum time (ms) for a face to appear

// Make sure everything is loaded
window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {        
    // Add an event listener to the HTML element with id "start" to handle clicks.
    // When the start button is clicked, it should call the startGame function (defined below).
    // ** TODO

    document.getElementById("start").addEventListener("click", startGame);

    // Loop through each HTML element with the "spot" class and
    // add an event listener to handle a click event. When clicked
    // each element should call the gotIt function (defined below).
    // ** TODO

    let names = document.getElementsByClassName("spot");

    for (var i = 0; i < names.length; i++) {
        names[i].addEventListener("click", gotIt);
    }
}

// Returns a random spot (HTML element with the "spot" class)
function randomSpot() {
    // First get a list of all the elements with the "spot" class
    // Then generate a random number between 0 and the length of the spots list.
    // Then return the single spot element from the spots list located at the random index.
    // ** TODO

    let names = document.getElementsByClassName("spot");
    let length = names.length;
    let value = Math.floor(Math.random() * length);

    return names[value];
}

// Return a random number between small and big, inclusive
function getRandBetween(small, big) {
    // ** TODO

    /* console.log(small);
    console.log(big);
    console.log(Math.floor(Math.random() * (big - small + 1)) + small); */

    return Math.floor(Math.random() * (big - small + 1)) + small;
}

// This simple one-line function should set the gameOn variable to be false.
function endGame() {
    // ** TODO
    gameOn = false;
}

// This function should
// - initialize the score variable to 0
// - update the html span element that displays the score to also be 0
// - update the gameOn variable to be true
// - set a timer running to control how long the game will last (20 seconds)
//   when the timer is done, it should call the endGame function.
// - call the show function to show the first face
function startGame() {
    // ** TODO
    score = 0;
    document.getElementById("scoreVal").innerHTML = "0";
    gameOn = true;
    setTimeout(endGame, 20000);
    show();

}

// This function gets called whenever the player clicks on a face.
// If the element that was clicked on is a smiley, the score increases
// by one, and if it's a frowny, the score decreases by one.
function gotIt(event) {
    let scoreSpan = document.getElementById("scoreVal");

    // Handle smiley clicked (adds 1 to score)
    if (event.target.classList.contains("smiley")) {
        score++;
        scoreSpan.innerHTML = score;
        event.target.classList.remove("smiley");
    }

    // Handle frowny clicked (subtracts 1 from score)
    // ** TODO
    else if (event.target.classList.contains("frowny")) {
        score--;
        scoreSpan.innerHTML = score;
        event.target.classList.remove("frowny");
    }

}

/// Function that shows a face (randomly choosing between smiley and frowny)
// and sets a timer to control when the face will stop showing.
function show() {
    let time = getRandBetween(minTime, maxTime);
    let currSpot = randomSpot();

    // Pick smiley or frowny at random
    let currClass = "smiley";
    if (Math.random() < 0.5) {
        currClass = "frowny";
    }

    // Add smiley or frowny class to make the face appear
    currSpot.classList.add(currClass);

    // Set a timer to go for the random time found above.
    // When the timer is done, the anonymous function will
    // remove the smiley or frowny class and call the show
    // function to show another.
    let timerId = setTimeout(function() {
        currSpot.classList.remove(currClass);
        if (gameOn) {
            show();
        }
    }, time);
}