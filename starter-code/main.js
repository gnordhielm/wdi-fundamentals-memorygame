var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardOne === cardTwo) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');  
// }

// if (cardThree === cardFour) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');  
// }

var board = document.getElementById('game-board');

var numberOfCards = 4;

var createCards = function() {
	for (var i = 0; i < numberOfCards; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		board.appendChild(newCard);
}};

createCards()