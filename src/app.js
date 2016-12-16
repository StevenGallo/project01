console.log('app working');
function toggler() {
  $('div.deck-container>ul>li').toggleClass('collapsed');
}

$('button#Toggler').click(() => toggler());
