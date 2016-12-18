console.log('game working');

//card image array counter
let j = 0;
//deck counter
let d = 0;

class Game {
    constructor() {
        this.player1 = [];
        this.player2 = [];
        this.player1Value = 0;
        this.player2Value = 0;
        this.player1Hand = [];
        this.player2Hand = [];
        this.theDeck = null;
        this.player1HasAce = false;
        this.player1Ace = 0;
        this.player2HasAce = false;
        this.player2Ace = 0;
        //used in blackjack check
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
        for (d; d < 4; d++) {
            this.player1.push(this.theDeck[d]);
            this.player1Hand.push(this.player1[j].cardImg);
            if(this.player1[j].cardValue === 11){
              this.player1HasAce = true;
              this.player1Ace++;
            }
            d++;
            this.player2.push(this.theDeck[d]);
            this.player2Hand.push(this.player2[j].cardImg);
            if(this.player1[j].cardValue === 11){
              this.player2HasAce = true;
              this.player2Ace++;
            }
            j++;
        }
        this.oneDeal = true;
        return [this.player1, this.player2];
    }
     playerHand() {
        return this.player1Hand
     }
     dealerHand(){
      return this.player2Hand
     }
    handValue() {
        this.player1Value = this.player1[0].cardValue + this.player1[1].cardValue;
        this.player2Value = this.player2[0].cardValue + this.player2[1].cardValue;
        return [this.player1Value, this.player2Value];

    }
    hit(player){

    }
    checkWinner() {
        if (this.player1Value === 21 && this.player2Value !== 21 && this.oneDeal) {
          alert('Winner Winnner Chicken Dinner!!!');
            return 'Blackjack!'
        } else {
            if (this.player1Value === this.player2Value) {
                return 'push'
            } else {
                if (this.player1Value > this.player2Value) {
                    return 'player wins!'
                } else {
                    return 'dealer wins'
                }
            }
        }
    }
}

