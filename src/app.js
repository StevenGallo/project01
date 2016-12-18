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
    console.log(theGame.handValue()[1]);
    $('#dealer_total').html('Dealer:').append('<br />'+theGame.handValue()[1]);
    $('#player_total').html('Player:').append('<br />'+theGame.handValue()[0]);
}
$('button#Play').click(() => firstGame());

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
