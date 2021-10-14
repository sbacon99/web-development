let playerTurn = true;
let computerMoveTimeout = 0;
let gameOver = false;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function

	// clear timeout
	clearTimeout(computerMoveTimeout);
	computerMoveTimeout = 0;

	// reset playerTurn
	playerTurn = true;

	// reset info paragraph
	document.getElementById("turnInfo").textContent = "Your turn";

	// reset inner HTML
	let buttonList = document.querySelector("div").childNodes
	for (let button of buttonList) {
		button.innerHTML = "";
	}


}

function boardButtonClicked(button) {

	if (playerTurn){

		// change inner HTML
		button.innerHTML = "X";
		// add 'x' to class list
		button.classList.add("x");

		// disable button
		button.disabled = true;

		// call switchTurn()
		switchTurn();
	}
}

function switchTurn() {

	// call checkForWinner
	checkForWinner();

	// switch turn
	if (playerTurn == true){
		playerTurn = false;
		document.getElementById("turnInfo").textContent = "Computer's turn";
		computerMoveTimeout = setTimeout(makeComputerMove, 1000);
	
	}
	else{
		playerTurn = true;
		document.getElementById("turnInfo").textContent = "Your turn";
	}

	// check for user win
	if (getGameBoardButtons()[0].innerHTML == "X" && getGameBoardButtons()[1].innerHTML == "X" && getGameBoardButtons()[2].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}
	else if (getGameBoardButtons()[3].innerHTML == "X" && getGameBoardButtons()[4].innerHTML == "X" && getGameBoardButtons()[5].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}
	else if (getGameBoardButtons()[6].innerHTML == "X" && getGameBoardButtons()[7].innerHTML == "X" && getGameBoardButtons()[8].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}
	else if (getGameBoardButtons()[0].innerHTML == "X" && getGameBoardButtons()[3].innerHTML == "X" && getGameBoardButtons()[6].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}
	else if (getGameBoardButtons()[1].innerHTML == "X" && getGameBoardButtons()[4].innerHTML == "X" && getGameBoardButtons()[7].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}
	else if (getGameBoardButtons()[2].innerHTML == "X" && getGameBoardButtons()[5].innerHTML == "X" && getGameBoardButtons()[8].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}
	else if (getGameBoardButtons()[0].innerHTML == "X" && getGameBoardButtons()[4].innerHTML == "X" && getGameBoardButtons()[8].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}
	else if (getGameBoardButtons()[2].innerHTML == "X" && getGameBoardButtons()[4].innerHTML == "X" && getGameBoardButtons()[6].innerHTML == "X"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "You win!";
	}

	// check for computer win
	else if (getGameBoardButtons()[0].innerHTML == "O" && getGameBoardButtons()[1].innerHTML == "O" && getGameBoardButtons()[2].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}
	else if (getGameBoardButtons()[3].innerHTML == "O" && getGameBoardButtons()[4].innerHTML == "O" && getGameBoardButtons()[5].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}
	else if (getGameBoardButtons()[6].innerHTML == "O" && getGameBoardButtons()[7].innerHTML == "O" && getGameBoardButtons()[8].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}
	else if (getGameBoardButtons()[0].innerHTML == "O" && getGameBoardButtons()[3].innerHTML == "O" && getGameBoardButtons()[6].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}
	else if (getGameBoardButtons()[1].innerHTML == "O" && getGameBoardButtons()[4].innerHTML == "O" && getGameBoardButtons()[7].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}
	else if (getGameBoardButtons()[2].innerHTML == "O" && getGameBoardButtons()[5].innerHTML == "O" && getGameBoardButtons()[8].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}
	else if (getGameBoardButtons()[0].innerHTML == "O" && getGameBoardButtons()[4].innerHTML == "O" && getGameBoardButtons()[8].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}
	else if (getGameBoardButtons()[2].innerHTML == "O" && getGameBoardButtons()[4].innerHTML == "O" && getGameBoardButtons()[6].innerHTML == "O"){
		playerTurn = false;
		gameOver = true;
		document.getElementById("turnInfo").innerHTML = "Computer wins!";
	}

	// check for draw

	var draw = true;

	for (let i = 0; i < 9; i++){
		if(getGameBoardButtons()[i].innerHTML == ""){
			draw = false;
			break;
		}
	}
	
	if (draw == true && document.getElementById("turnInfo").innerHTML != "You win!" && document.getElementById("turnInfo").innerHTML != "Computer wins!"){
		document.getElementById("turnInfo").innerHTML = "Draw game";
		playerTurn = false;
		gameOver = true;
		return;
	}

}

function makeComputerMove() {
	// TODO: Complete the function

	if (gameOver == true){
		return;
	}

	else {
		var i = Math.floor(Math.random() *9);
		while (getGameBoardButtons()[i].innerHTML != ""){
			var i = Math.floor(Math.random()*9);
		}
		getGameBoardButtons()[i].innerHTML = "O";
		getGameBoardButtons()[i].style.color = "blue";
		switchTurn();
	}
}