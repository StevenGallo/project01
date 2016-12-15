console.log('gameplay working');

class Gameplay {
  constructor() {
    this.theCanvas = null;
    this.canv = null;
    this.player = null;
  }
  newGame() {
    this.theCanvas = document.getElementById('game1');
    this.canv = this.theCanvas.getContext('2d');
    this.player = new Player();
    console.log(this.player);
    console.log(this.theCanvas);
    console.log(this.canv);
    this.canv.fillStyle = 'red';
    this.canv.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }
}
