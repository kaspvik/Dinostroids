class MainMenu implements IScene {
  private backgroundImage: p5.Image;
  private logoSign: p5.Image;
  private logoDino: p5.Image;
  private aboutBtn: Button;
  private howToPlayBtn: Button;
  private dinoStroids: IChangeableScene;
  private scoreBoardBtn: Button;
  private startGameBtn: Button;
  private musicOnOffBtn: Button;
  private buttonClickedSound: p5.SoundFile;

  constructor(dinoStroids: IChangeableScene) {
    this.dinoStroids = dinoStroids;
    this.backgroundImage = imageAssets.background;
    this.logoSign = imageAssets.logoSign;
    this.logoDino = imageAssets.logoDino;
    this.buttonClickedSound = soundeffects.buttonClick;

    //Starts menu music if it aint already playing
    if (!music.menuMusic.isPlaying()) {
      music.menuMusic.setVolume(1);
      music.menuMusic.loop();
    }

    console.log("MainMenu created");
    this.aboutBtn = new Button(
      "ABOUT",
      createVector(width * 0.5, height * 0.38)
    );
    (this.howToPlayBtn = new Button(
      "HOW TO PLAY",
      createVector(width * 0.5, height * 0.48)
    )),
      (this.scoreBoardBtn = new Button(
        "SCOREBOARD",
        createVector(width * 0.5, height * 0.58)
      )),
      this.musicOnOffBtn = new Button("MUSIC ON", createVector(width * 0.5, height * 0.68));

    this.startGameBtn = new Button(
      "START GAME",
      createVector(width * 0.5, height * 0.78),
      250,
      60,
      "green"
    );
  }

  public update(): void {
    if (this.aboutBtn.isClicked()) {
      console.log("aboutBtn");
      this.buttonClickedSound.play();
      this.dinoStroids.changeActiveScene(new AboutPopup(this.dinoStroids));
    }
    if (this.howToPlayBtn.isClicked()) {
      this.buttonClickedSound.play();
      this.dinoStroids.changeActiveScene(new HowToPlayPopup(this.dinoStroids));
    }
    if (this.scoreBoardBtn.isClicked()) {
      this.buttonClickedSound.play();
      this.dinoStroids.changeActiveScene(new ScoreBoardPopup(this.dinoStroids));
    }
    if (this.startGameBtn.isClicked()) {
      this.buttonClickedSound.play();

      this.dinoStroids.changeActiveScene(new InputNamePopup(this.dinoStroids));
    }
    if (this.musicOnOffBtn.isClicked()) {
      this.buttonClickedSound.play();
      this.shiftMusicOnOff();
    }
  }

  public draw(): void {
    imageMode(CORNER);
    image(this.backgroundImage, 0, 0, width, height);

    // CSS
    fill("lightgrey");
    // HTML
    rect(width * 0.25, height * 0.15, width * 0.5, height * 0.7);

    imageMode(CENTER);
    image(this.logoDino, width / 4, height * 0.94, 320, 320);
    image(this.logoSign, width / 2, height * 0.47, 500, 500);

    textAlign(CENTER, CENTER);
    textSize(35);
    textFont("Pixelify Sans", width * 0.06);
    fill("black");
    text("DINOSTROIDS", width / 2, height * 0.22);

    this.aboutBtn.draw();
    this.howToPlayBtn.draw();
    this.scoreBoardBtn.draw();
    this.startGameBtn.draw();
    this.musicOnOffBtn.draw();
  }

  //checks so the music isnt trying to restart if its already been started
  private shiftMusicOnOff(): void {
    if (music.menuMusic.isPlaying()) {
      music.menuMusic.pause();
      this.musicOnOffBtn.setLabel("MUSIC ON");
    } else {
      music.menuMusic.loop();
      this.musicOnOffBtn.setLabel("MUSIC OFF");
    }
  }
}
