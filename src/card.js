console.log('card working');
let imgArr = ['2H.png','2D.png','2S.png','2C.png','3H.png','3D.png',
'3S.png','3C.png','4H.png','4D.png','4S.png','4C.png','5H.png','5D.png',
'5S.png','5C.png','6H.png','6D.png','6S.png','6C.png','7H.png','7D.png',
'7S.png','7C.png','8H.png','8D.png','8S.png','8C.png','9H.png','9D.png',
'9S.png','9C.png','10H.png','10D.png','10S.png','10C.png','JH.png','JD.png',
'JS.png','JC.png','QH.png','QD.png','QS.png','QC.png','KH.png','KD.png',
'KS.png','KC.png','AH.png','AD.png','AS.png','AC.png',];
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
