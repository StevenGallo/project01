console.log('app working');
//const theCanvas = document.getElementById('game1');
window.onload = start();

function start(){
  let aGame = new Gameplay;
  aGame.newGame();
  console.log('new game'+ aGame);
}
