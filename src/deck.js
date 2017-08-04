console.log('deck working');
class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck() {
    let a = 0;
    for (let i = 0; i < cards.length; i++) {
      console.log(i);
      for (let j = 0; j < cardsSuit.length; j++) {
        console.log(j);
        this.newCard = new Card();
        this.newCard.getCards(i, j, a);
        a++;
        console.log(this.newCard);
        this.deck.push(this.newCard);
        console.log(this.deck);
        console.log(this.deck.length);
      }
    }
    return this.deck;
  }
  // shuffleDeck() logic I wrote with help from stack overflow
  shuffleDeck() {
    for (let i = this.deck.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [this.deck[i - 1], this.deck[j]] = [this.deck[j], this.deck[i - 1]];
    }
    return this.deck;
  }
}
