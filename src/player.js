console.log('player working');

class Player {
  constructor() {
    this.width = 5;
    this.height = 5;
    this.x = this.width / 2;
    this.y = this.height - 5;
  }
}
let player = new Player();
console.log(player);
