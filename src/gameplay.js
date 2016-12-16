console.log('gameplay working');
var dx = 2;
var dy = -2;

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
  }
  makePlayer() {
    //this.canv.BeginPath();
    this.canv.fillStyle = 'red';
    this.canv.fillRect(this.x, this.y, this.width, this.height);
    //this.canv.ClosePath();

  }
  draw() {
    //this.canv.clearRect(0, 0, this.theCanvas.width, this.theCanvas.height);
    this.makePlayer();
    x += dx;
    y += dy;
}
}

