console.log('card working');
let imgArr = ['2H.jpg', '2D.jpg', '2S.jpg', '2C.jpg', '3H.jpg', '3D.jpg',
    '3S.jpg', '3C.jpg', '4H.jpg', '4D.jpg', '4S.jpg', '4C.jpg', '5H.jpg', '5D.jpg',
    '5S.jpg', '5C.jpg', '6H.jpg', '6D.jpg', '6S.jpg', '6C.jpg', '7H.jpg', '7D.jpg',
    '7S.jpg', '7C.jpg', '8H.jpg', '8D.jpg', '8S.jpg', '8C.jpg', '9H.jpg', '9D.jpg',
    '9S.jpg', '9C.jpg', '10H.jpg', '10D.jpg', '10S.jpg', '10C.jpg', 'JH.jpg', 'JD.jpg',
    'JS.jpg', 'JC.jpg', 'QH.jpg', 'QD.jpg', 'QS.jpg', 'QC.jpg', 'KH.jpg', 'KD.jpg',
    'KS.jpg', 'KC.jpg', 'AH.jpg', 'AD.jpg', 'AS.jpg', 'AC.jpg',
];
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let cardsSuit = ['Heart', 'Diamond', 'Spade', 'Club'];
class Card {
    constructor() {
        this.card = null;
        this.cardSuit = null;
        this.cardValue = 0;
        this.cardImg = null;
    }
    getCards(i, j, a) {
        this.card = cards[i];
        this.cardSuit = cardsSuit[j];
        if (this.card === 'J' ||
            this.card === 'Q' ||
            this.card === 'K') {
            this.cardValue = 10;
        } else {
            if (this.card === 'A') {
                this.cardValue = 11;
            } else {
                this.cardValue = this.card;
            }
        }
        this.cardImg = imgArr[a];
    }
}
