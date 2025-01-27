let game: DinoStroids;
let cnv: any;

let music: {
  mystery: p5.SoundFile;
};
let soundeffects: {
  laserSound: p5.SoundFile;
  buttonClick: p5.SoundFile;
  powerupSound: p5.SoundFile;
  explosion: p5.SoundFile;
  playerHit: p5.SoundFile;
}
let imageAssets: {
  dino: p5.Image;
  dinoWithSheild: p5.Image;
  background: p5.Image;
  gameTitle: p5.Image;
  moveImage: p5.Image;
  shootImage: p5.Image;
  hearts: p5.Image;
  sheild: p5.Image;
  superLaser: p5.Image;
  astro: p5.Image;
  bigAstro: p5.Image;
  superAstro: p5.Image
  laser: p5.Image;
  powerupImage: p5.Image;
  asteroidtypeImage: p5.Image;
  explosion: p5.Image;
}


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = {
    mystery: loadSound("../assets/music/backgroundMusic.mp3"),
  };
  soundeffects = {
    buttonClick: loadSound("../assets/soundeffects/buttonClick.mp3"),
    laserSound: loadSound("../assets/soundeffects/laserSound.mp3"),
    powerupSound: loadSound("../assets/soundeffects/powerupSound.mp3"),
    explosion: loadSound("../assets/soundeffects/explosion.mp3"),
    playerHit: loadSound("../assets/soundeffects/playerHit.mp3")
  }
  imageAssets = {
    dino: loadImage("../assets/images/dino (2).gif"),
    background: loadImage("../assets/images/background.png"),
    gameTitle: loadImage("../assets/images/gameTitle.png"),
    moveImage: loadImage("../assets/images/Frame-17.png"),
    shootImage: loadImage("../assets/images/Frame-19.png"),
    hearts: loadImage("../assets/images/heart.png"),
    laser: loadImage("../assets/images/NormalLaser.gif"),
    powerupImage: loadImage("../assets/images/powerupsPrtSc.png"),
    asteroidtypeImage: loadImage("../assets/images/asteroidtypesPrtSc.png"),
    sheild: loadImage("../assets/images/SheildPowerupC.gif"),
    superLaser: loadImage("../assets/images/superLaser.gif"),
    astro: loadImage("../assets/images/RegularAstroids.gif"),
    bigAstro: loadImage("../assets/images/bigAstro.png"),
    superAstro: loadImage("../assets/images/superAstro.png"),
    explosion: loadImage("../assets/images/Pixelexplotion.gif"),
    dinoWithSheild: loadImage("../assets/images/dinoWithShield.gif")
  };
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  cnv = createCanvas(1000, 666);
  centerCanvas();
  frameRate(60);
  game = new DinoStroids();
}

function centerCanvas() {
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}
/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

//keyPressed används för input och i spelbrädet. Flytta ner några nivåer
function keyPressed() {
  if (game && typeof game.getActiveScene === "function") {
    const scene = game.getActiveScene();
    if (scene && typeof scene.keyPressed === "function") {
      scene.keyPressed();
    }
  }
}

/**
 * FORWARD MOUSEPRESSED
 * So your custom scenes can detect clicks (e.g. focusing a text box).
 */
function mousePressed() {
  if (game && typeof game.getActiveScene === "function") {
    const scene = game.getActiveScene();
    if (scene && typeof scene.mousePressed === "function") {
      scene.mousePressed();
    }
  }
}

function keyReleased() {
  if (game && typeof game.getActiveScene === "function") {
    const scene = game.getActiveScene();
    if (scene && typeof scene.keyReleased === "function") {
      scene.keyReleased();
    }
  }
}
