var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  backgroundColor: "#4488aa",
  scene: {
    preload: preloadGame,
    create: createGame,
    update: updateGame,
  },
};

var game = new Phaser.Game(config);

var ball;
function preloadGame() {
  this.load.image("ball", "./pangball.png");
}

var cursor;
var velocityBallX = getRandomVelocity();
var velocityBallY = 100;
var keyZ;
var keyS;
var containerPlayer1;
var containerPlayer2;
var isTopHit;
var isPlayer1Hit;
var scoreP1 = 0;
var scoreP2 = 0;
var scoreP1Text;
var scoreP2Text;

function createGame() {
  // Define keys to move paddles
  cursor = this.input.keyboard.createCursorKeys();
  this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
  this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

  // Define scores Text
  scoreP1Text = this.add.text(16, 20, "Score : 0", {
    font: "bold 16px Courier",
    fontSize: "16px",
    fill: "#d41f1f",
  });
  scoreP2Text = this.add.text(700, 20, "Score : 0", {
    font: "bold 16px Courier",
    fontSize: "16px",
    fill: "#32a852",
  });

  // Define the ball and its physic
  ball = this.physics.add.sprite(400, 300, "ball");
  ball.setCollideWorldBounds(true);
  ball.setBounce(1);
  ball.setVelocityX(velocityBallX);
  ball.setVelocityY(velocityBallY);

  // Draw rectangles
  var rectTopPlayer1 = this.add.rectangle(0, -30, 10, 60, 0xd41f1f); // rouge
  var rectBotPlayer1 = this.add.rectangle(0, 30, 10, 60, 0xd41f1f); // rouge
  var rectTopPlayer2 = this.add.rectangle(0, -30, 10, 60, 0x32a852); // vert
  var rectBotPlayer2 = this.add.rectangle(0, 30, 10, 60, 0x32a852); // vert

  // Add physics to rectangles
  this.physics.add.existing(rectTopPlayer1);
  this.physics.add.existing(rectBotPlayer1);
  this.physics.add.existing(rectTopPlayer2);
  this.physics.add.existing(rectBotPlayer2);

  // Define containers which contains rectangles
  containerPlayer1 = this.add.container(10, 300, [
    rectTopPlayer1,
    rectBotPlayer1,
  ]);
  containerPlayer1.setSize(10, 120);
  containerPlayer2 = this.add.container(790, 300, [
    rectTopPlayer2,
    rectBotPlayer2,
  ]);
  containerPlayer2.setSize(10, 120);

  // Add physics to containers
  this.physics.world.enable(containerPlayer1);
  this.physics.world.enable(containerPlayer2);

  // Set rectangles not pushable
  rectTopPlayer1.body.pushable = false;
  rectBotPlayer1.body.pushable = false;
  rectTopPlayer2.body.pushable = false;
  rectBotPlayer2.body.pushable = false;

  // Set containers collide world bounds
  containerPlayer1.body.collideWorldBounds = true;
  containerPlayer2.body.collideWorldBounds = true;

  // Add collision events to rectangles
  this.physics.add.collider(ball, rectTopPlayer1, hitPlayer1Top, null, this);
  this.physics.add.collider(ball, rectBotPlayer1, hitPlayer1Bot, null, this);
  this.physics.add.collider(ball, rectTopPlayer2, hitPlayer2Top, null, this);
  this.physics.add.collider(ball, rectBotPlayer2, hitPlayer2Bot, null, this);
}

function updateGame() {
  if (cursor.up.isDown) {
    containerPlayer2.body.velocity.y = -150;
  } else if (cursor.down.isDown) {
    containerPlayer2.body.velocity.y = 150;
  } else {
    containerPlayer2.body.velocity.y = 0;
  }

  if (this.keyZ.isDown) {
    containerPlayer1.body.velocity.y = -150;
  } else if (this.keyS.isDown) {
    containerPlayer1.body.velocity.y = 150;
  } else containerPlayer1.body.velocity.y = 0;

  // Define the score when the ball reach world bounds (left and right)
  if (ball.x > 780) {
    scoreP1++;
    scoreP1Text.setText(`Score : ${scoreP1}`);
    reset();
  }

  if (ball.x < 20) {
    scoreP2++;
    scoreP2Text.setText(`Score : ${scoreP2}`);
    reset();
  }
}

// Reset ball options when a player win a round
function reset() {
  ball.x = 400;
  ball.y = 300;
  velocityBallX = getRandomVelocity();
  velocityBallY = 100;
  ball.setVelocityX(velocityBallX);
  ball.setVelocityY(velocityBallY);
}

function hitPlayer1Top() {
  isTopHit = true;
  isPlayer1Hit = true;
  hitPlayer();
}

function hitPlayer1Bot() {
  isTopHit = false;
  isPlayer1Hit = true;
  hitPlayer();
}

function hitPlayer2Top() {
  isTopHit = true;
  isPlayer1Hit = false;
  hitPlayer();
}

function hitPlayer2Bot() {
  isTopHit = false;
  isPlayer1Hit = false;
  hitPlayer();
}

// Function called when ball collide a paddle
function hitPlayer() {
  console.log(`velocity before : ${velocityBallX}`);
  if (velocityBallX < 0) {
    velocityBallX = velocityBallX * -1 + 50;
  } else velocityBallX += 50;
  console.log(`velocity after : ${velocityBallX}`);

  // ball.setVelocityX(velocityBallX);
  ball.setVelocityX(isPlayer1Hit ? velocityBallX : velocityBallX * -1);

  if (velocityBallY < 0) {
    velocityBallY = velocityBallY * -1;
    ball.setVelocityY(velocityBallY);
  }

  ball.setVelocityY(isTopHit ? velocityBallY * -1 : velocityBallY);
}

// Define the default direction of the ball at start randomly
function getRandomVelocity() {
  let rand = Math.floor(Math.random() * 50) + 50;
  return Math.random() < 0.5 ? rand * -1 : rand;
}
