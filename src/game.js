console.log('game working');
class Game {
    constructor() {
        this.player1 = [];
        this.player2 = [];
        this.theDeck = null;
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
    }
}
let theGame = new Game();
console.log('the game deck' + theGame.newGameDeck());
let newDeal = theGame.firstDeal();
