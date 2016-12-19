console.log('game working');

//player card array counter
let j = 0;
//dealer card array counter
let k = 0;
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
        this.player1Ace = 0;
        this.player2Ace = 0;
        this.bust = false;
        this.gameOver = false;
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
            if (this.player1[j].cardValue === 11) {
                this.player1HasAce = true;
                this.player1Ace++;
            }
            j++;
            d++;
            this.player2.push(this.theDeck[d]);
            this.player2Hand.push(this.player2[k].cardImg);
            if (this.player1[k].cardValue === 11) {
                this.player2HasAce = true;
                this.player2Ace++;
            }
            k++;
        }
        this.oneDeal = true;
        return [this.player1, this.player2];
    }
    playerHand() {
        return this.player1Hand
    }
    dealerHand() {
        return this.player2Hand
    }
    handValue() {
        for (let i = 0; i < this.player1.length; i++) {
            this.player1Value += this.player1[i].cardValue;
            if (this.player1Value > 21) {
                this.player1Value = this.player1Value - 10;
                this.player1Ace--;
            }
        }
        for (let j = 0; j < this.player2.length; j++) {
            this.player2Value += this.player2[j].cardValue;
            if (this.player2Value > 21) {
                this.player2Value = this.player2Value - 10;
                this.player2Ace--;
            }
        }
        return [this.player1Value, this.player2Value];

    }
    hit() {
        this.player1.push(this.theDeck[d]);
        console.log(this.player1);
        this.player1Hand.push(this.player1[j].cardImg);
        console.log(this.player1[j].cardImg);
        if (this.player1[j].cardValue === 11) {
            this.player1Ace++;
        }
        $('#player').append('<li><img src="assets/cards/' + this.player1[j].cardImg + '" /></li>');
        this.player1Value = this.player1Value + this.player1[this.player1.length - 1].cardValue;
        console.log(this.player1Value);
        if (this.player1Value <= 21) {
            return this.player1Value
        } else {
            if (this.player1Ace > 0) {
                this.player1Value = this.player1Value - 10;
                this.player1Ace--;
                return this.player1Value
            } else {
                this.bust = true;
                return this.player1Value
                console.log(this.bust);
                console.log(this.player1Value);
                j++;
                d++;
            }
        }
        console.log(this.player1[j].cardImg);
    }
    dealerHit(){
        this.player2.push(this.theDeck[d]);
        console.log(this.player2);
        this.player2Hand.push(this.player2[k].cardImg);
        console.log(this.player2[k].cardImg);
        if (this.player2[k].cardValue === 11) {
            this.player2Ace++;
        }
        $('#dealer').append('<li><img src="assets/cards/' + this.player2[k].cardImg + '" /></li>');
        this.player2Value = this.player2Value + this.player2[this.player2.length - 1].cardValue;
        if (this.player2Value <= 21) {
            return this.player2Value
        } else {
            if (this.player2Ace > 0) {
                this.player2Value = this.player2Value - 10;
                this.player2Ace--;
                return this.player2Value
            } else {
                this.bust = true;
                return this.player2Value
                console.log(this.bust);
                k++;
                d++;
            }
        }
    }
    checkBlackjack() {
        if (this.player1Value === 21 && this.player2Value !== 21) {
            alert('Winner Winnner Chicken Dinner!!!');
            this.gameOver = true;
            return 'Blackjack!'
        } else {
            return '';
        }
    }
    checkWinner() {
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
