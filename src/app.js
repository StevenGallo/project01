console.log('app working');
class Play {
    constructor() {
        this.play = null;
        this.bet = 0;
        this.credits = 1000;
        this.gameOver = false;
    }
    newPlay() {
        this.play = new Game();
        return this.play;
    }
}
let thisPlay = new Play();
console.log(thisPlay);
    let theGame = thisPlay.newPlay();
    theGame.newGameDeck();
function firstGame() {
    theGame.firstDeal();
    $.each(theGame.playerHand(), function() {
        $('#player').append('<li><img src="assets/cards/' + this + '" /></li>');
    });
    $.each(theGame.dealerHand(), function() {
        $('#dealer').append('<li><img src="assets/cards/' + this + '" /></li>');
    });
    $('#credits').html('Credits: ' + thisPlay.credits);
    let firstValue = theGame.handValue();
    $('#dealer_total').html('Dealer:').append('<br />'+firstValue[1]);
    $('#player_total').html('Player:').append('<br />'+firstValue[0]);
}
$('button#Play').click(() => firstGame());
function addBet(num){
  console.log(num);
  console.log(thisPlay.bet);
  if(num<=thisPlay.credits){
    thisPlay.bet = thisPlay.bet + num;
    thisPlay.credits = thisPlay.credits - num;
    $('#bet').html('Bet: '+ thisPlay.bet);
    $('#credits').html('Credits: ' + thisPlay.credits);
  }
}
$('button#bet100').click(() => addBet(100));
$('button#bet500').click(() => addBet(500));
$('button#bet1000').click(() => addBet(1000));


//
//let newValue = theGame.handValue();

//console.log('the game deck' + theGame.newGameDeck());
//console.log();
//console.log(newValue);
//console.log(theGame.playerHand(), theGame.dealerHand());

//$('#win').text(theGame.checkWinner());


// $('<li/>').text(newDeal[0][0].cardValue[0]).appendTo($('#player'));
// $('<li/>').text(newDeal[1][0].cardValue[0]).appendTo($('#dealer'));

// function showHand(){
// $.each(newDeal, function(i){
//       $('<li/>').addClass('card').text(this.cardValue[0].newDeal[i]).appendTo($('#dealer'));
//     });
// }

 // $('button#Toggler').click(() => toggler());
//function toggler() {
//   $('div.deck-container>ul>li').toggleClass('collapsed');
// }
