console.log('game working');
class Game {
    constructor() {
        this.player1 = [];
        this.player2 = [];
        this.player1Value = 0;
        this.player2Value = 0;
        this.theDeck = null;
        this.oneDeal = null;
    }
    newGameDeck() {
        this.newDeck = new Deck();
        this.newDeck.createDeck();
        this.theDeck = this.newDeck.shuffleDeck();
        return this.theDeck;
    }
    newGame() {
        this.theDeck.newGameDeck();
    }
    firstDeal() {
        for (let i = 0; i < 4; i++) {
            this.player1.push(this.theDeck[i]);
            console.log(this.player1);
            console.log(i);
            i++;
            this.player2.push(this.theDeck[i]);
            console.log(this.player2);
            console.log(i);
        }
        this.oneDeal = true;
        return this.player1, this.player2;
    }
    handValue(){
      this.player1Value = this.player1[0].cardValue[0] + this.player1[1].cardValue[0];
      this.player2Value = this.player2[0].cardValue[0] + this.player2[1].cardValue[0];
      return this.player1Value, this.player2Value;

    }
    checkWinner() {
      if(this.player1Value === 21 && this.player2Value !==21 && this.oneDeal){
        return 'Blackjack!', alert('Winner Winnner Chicken Dinner!!!'), console.log(this.player1Value, this.player2Value);
      }else{
      if (this.player1Value===this.player2Value){
        return 'push', console.log(this.player1Value, this.player2Value);
      }else{ if (this.player1Value>this.player2Value){
          return 'player wins', console.log(this.player1Value, this.player2Value);
      }else{
        return 'dealer wins', console.log(this.player1Value, this.player2Value);
      }
      }
    }
  }
}
// let theGame = new Game();
// console.log('the game deck' + theGame.newGameDeck());
// let newDeal = theGame.firstDeal();
// let newValue = theGame.handValue();
// console.log(theGame.checkWinner());
