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
        for(let i =0; i<this.player1.length; i++){
          this.player1Value += this.player1[i].cardValue;
          if(this.player1Value>21){
            this.player1Value = this.player1Value-10;
            this.player1Ace --;
          }
        }
        for(let j =0; j<this.player2.length; j++){
          this.player2Value += this.player2[j].cardValue;
          if(this.player2Value>21){
            this.player2Value = this.player2Value-10;
            this.player2Ace --;
          }
        }
        return [this.player1Value, this.player2Value];

    }
    hit(playerNum){

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
// handValue() {
//         this.player1.forEach(function(each){
//           console.log(each);
//           let value1 = 0;
//           value1 = value1 + each.cardValue;
//           console.log(value1);
//           return value1;
//         });
//         this.player2.forEach(function(each){
//           let value2 = 0;
//           value2 += each.cardValue;
//           return value2;
//         });
//         this.player1Value = value1;
//         this.player1Value = value2;
