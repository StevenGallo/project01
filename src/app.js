console.log('app working');
let credits = 5000;
class Play {
  constructor() {
    this.play = null;
    this.bet = 0;
    this.credits = credits;
    this.gameOver = false;
  }
  newPlay() {
    this.play = new Game();
    return this.play;
  }
}
let thisPlay = new Play();
let theGame = thisPlay.newPlay();

function play() {
  $('#credits').html(`Credits: ${credits}`);
  $('#dealer_total').html('Dealer:');
  $('#player_total').html('Player:');
  $('ul').empty();
  $('#win').html('');
  $('#Play').remove();
  $('#play_buttons').append($('<button id = "Deal">').text('Deal'));
  $('#win').text('Place your bet then click Deal');
  thisPlay = new Play();
  theGame = thisPlay.newPlay();
  return theGame.newGameDeck();
}
let theDealerHand = [];

function deal() {
  $('#Deal').remove();
  $('#play_buttons').append($('<button id = "Hit">').text('Hit'));
  $('#play_buttons').append($('<button id = "Stay">').text('Stay'));
  console.log(theGame.firstDeal());
  $.each(theGame.playerHand(), function () {
    $('#player').append(`<li><img src="assets/cards/${this}" /></li>`);
  });
  theDealerHand = theGame.dealerHand();
  $('#dealer').append(
    `<li><img src="assets/cards/${theDealerHand[0]}" /></li>`,
  );
  $('#dealer').append('<li><img src="assets/cards/back.jpg" /></li>');
  $('#credits').html(`Credits: ${credits}`);
  let firstValue = theGame.handValue();
  $('#player_total').html('Player:').append(`<br />${firstValue[0]}`);
  let blackjack = theGame.checkBlackjack();
  if (blackjack) {
    $('#dealer li').last().remove();
    $('#dealer').append(
      `<li><img src="assets/cards/${theDealerHand[1]}" /></li>`,
    );
    theGame.playerWin = true;
    credits += thisPlay.bet * 2.5;
    thisPlay.bet = 0;
    $('#credits').html(`Credits: ${credits}`);
    $('#bet').html(`Bet: ${thisPlay.bet}`);
    $('#Hit').remove();
    $('#Stay').remove();
    $('#play_buttons').append($('<button id = "Play">').text('Play'));
    $('#win').text(blackjack);
  }
  return theDealerHand;
}

function addBet(num) {
  console.log(num);
  console.log(thisPlay.bet);
  if (num <= credits) {
    thisPlay.bet += num;
    credits -= num;
  } else {
    thisPlay.bet += credits;
    credits -= credits;
  }
  $('#bet').html(`Bet: ${thisPlay.bet}`);
  $('#credits').html(`Credits: ${credits}`);
}

function newHit() {
  $('#player_total').html('Player:').append(`<br />${theGame.hit()}`);
  if (theGame.bust === true) {
    credits = credits;
    thisPlay.bet = 0;
    $('#bet').html(`Bet: ${thisPlay.bet}`);
    $('#credits').html(`Credits: ${credits}`);
    $('#Deal').remove();
    $('#Hit').remove();
    $('#Stay').remove();
    $('#play_buttons').append($('<button id = "Play">').text('Play'));
    $('#win').text('Bust!');
  }
}

function stay() {
  $('#dealer li').last().remove();
  $('#dealer').append(
    `<li><img src="assets/cards/${theDealerHand[1]}" /></li>`,
  );
  if (theGame.player2Value === 21) {
    $('#win').text('Dealer Wins');
  }
  $('#dealer_total').html('Dealer:').append(`<br />${theGame.player2Value}`);
  while (theGame.player2Value <= 16) {
    $('#dealer_total').html('Dealer:').append(`<br />${theGame.dealerHit()}`);
  }
  $('#win').text(theGame.checkWinner());
  if (theGame.playerWin) {
    credits += thisPlay.bet * 2;
    thisPlay.bet = 0;
  } else {
    if (theGame.push) {
      credits += thisPlay.bet;
      thisPlay.bet = 0;
    } else if (theGame.bust === true) {
      $('#win').text('Dealer Busts!');
      credits += thisPlay.bet * 2;
      thisPlay.bet = 0;
      $('#bet').html(`Bet: ${thisPlay.bet}`);
      $('#credits').html(`Credits: ${credits}`);
    } else {
      credits = credits;
      thisPlay.bet = 0;
    }
    console.log(theGame.playerWin);
  }
  $('#bet').html(`Bet: ${thisPlay.bet}`);
  $('#credits').html(`Credits: ${credits}`);
  $('#Deal').remove();
  $('#Hit').remove();
  $('#Stay').remove();
  $('#play_buttons').append($('<button id = "Play">').text('Play'));
}
// had to change button for some elements becuse they didnt function
// afer being created
$(document).on('click', '#Play', () => play());
$(document).on('click', '#Hit', () => newHit());
$(document).on('click', '#Stay', () => stay());
$(document).on('click', '#Deal', () => deal());
$('button#bet500').click(() => addBet(500));
$('button#bet1000').click(() => addBet(1000));
$('button#bet2000').click(() => addBet(2000));
