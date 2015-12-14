var player;
var enemy;

function setup() {
  createCanvas(600, 500, 40);
  
  player = createSprite(300, 450, 64, 64);
  var playerImage = loadImage("http://examples.phaser.io/assets/sprites/lemming.png");
  player.addImage(playerImage);
  
  enemy = createSprite(350, 0, 8, 64);
  
  }
function draw() {
  background(0, 0, 9);
  
  if (keyDown(LEFT_ARROW)) {
    player.position.x -= 8;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.position.x += 8;
  }
  if (keyDown(UP_ARROW)) {
    player.position.y -= 8;
  }  
  if (keyDown(DOWN_ARROW)) {
    player.position.y += 8;
  }  
  if (enemy.position.y > 500) {
    enemy.position.y = 0;
    enemy.position.x = random(0, 300);
  }
    
  enemy.position.y = enemy.position.y + 15;
  
  if(player.overlap(enemy)) {
    player.remove();
  }
  drawSprites();
}
