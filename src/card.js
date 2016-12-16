console.log('card working');
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let cardsSuit = ['Heart', 'Diamond', 'Spade', 'Club'];
class Card {
    constructor() {
        this.card = null;
        this.cardSuit = null;
    }
    getCards(i, j) {
        this.card = cards[i];
        this.cardSuit = cardsSuit[Math.floor(j)];
    }
}
// let newCard = new Card();
// console.log(newCard);
// let theCard = newCard.getCards(12,2);
// console.log(newCard);
