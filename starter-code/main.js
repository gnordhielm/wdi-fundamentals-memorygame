// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

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

var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];
var board = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		board.appendChild(newCard);
}};

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
};

function isMatch(cards) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
  location.reload();
};

createBoard();
