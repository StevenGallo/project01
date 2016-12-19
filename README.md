# project01

##Blackjack
![Blackjack](http://i.imgur.com/azGE9OF.png)

##Technologies Used
- HTML
- CSS
- Javascript
- jQuery
##Code Example
This is my code for my blackjack logic
```javascript
checkBlackjack() {
        if (this.player1Value === 21 && this.player2Value !== 21) {
            alert('Winner Winnner Chicken Dinner!!!');
            this.playerWin = true;
            return 'Blackjack!'
        } else {
            return '';
        }
    }
```
##Build Strategy
I started from the simplest objects to the most complicated, building 
Classes for the Card, Deck, Game and App. The code could be simplified 
by adding a player Class and The Deck and App Classes need to be cleaned
up

##Complications/Future Improvements
- player Class
- improve styling
- add animations
- add sound
-  improve layout/ usability

###Contributing
Ariana Dziedzic

###Authors
Steven Gallo

