console.log('deck working');
class Deck {
    constructor() {
        this.deck = [];
    }
    createDeck() {
        for (let i = 0; i < cards.length; i++) {
            console.log(i);
            for (let j = 0; j < cardsSuit.length; j++) {
                console.log(j);
                this.newCard = new Card();
                //console.log(this.newCard);
                this.newCard.getCards(i, j);
                console.log(this.newCard);
                this.deck.push(this.newCard);
                console.log(this.deck);
                console.log(this.deck.length);
            }
        }
        return this.deck;
    }
    shuffleDeck() {
        for (let i = this.deck.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [this.deck[i - 1], this.deck[j]] = [this.deck[j], this.deck[i - 1]];
        }
        return this.deck;
    }
}
// newDeck = new Deck();
// console.log(newDeck);
