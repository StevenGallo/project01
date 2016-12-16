console.log('app working');
function toggler() {
  $('div.deck-container>ul>li').toggleClass('collapsed');
}

// $('button#Toggler').click(() => toggler());
let theGame = new Game();
console.log('the game deck' + theGame.newGameDeck());
let newDeal = theGame.firstDeal();
let newValue = theGame.handValue();
console.log(theGame.checkWinner());
console.log(newValue);
console.log(this.player1Value, this.player2Value);



$('<li/>').text(newDeal[0][0].cardValue[0]).appendTo($('#player'));
$('<li/>').text(newDeal[1][0].cardValue[0]).appendTo($('#dealer'));

// function showHand(){
// $.each(newDeal, function(i){
//       $('<li/>').addClass('card').text(this.cardValue[0].newDeal[i]).appendTo($('#dealer'));
//     });
// }

 // $('button#Toggler').click(() => toggler());
