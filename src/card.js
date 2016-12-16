console.log('card working');
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let cardsSuit = ['Heart', 'Diamond', 'Spade', 'Club'];
class Card {
    constructor() {
        this.card = null;
        this.cardSuit = null;
        this.cardValue = [];
    }
    getCards(i, j) {
        this.card = cards[i];
        this.cardSuit = cardsSuit[j];
        if(this.card === 'J'||
          this.card === 'Q'||
          this.card === 'K'){
          this.cardValue.push(10);
        }else{
          if(this.card === 'A'){
            this.cardValue.push(11);
            this.cardValue.push(1);
          }else{
            this.cardValue.push(this.card);
          }
        }
    }
}
// let newCard = new Card();
// console.log(newCard);
// let theCard = newCard.getCards(12,2);
// console.log(newCard);
