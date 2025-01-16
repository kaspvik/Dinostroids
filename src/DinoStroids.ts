class DinoStroids {
    private activeScene: IScene;

    constructor() {
        this.activeScene = new MainMenu(); //ändra scene här för att starta på den scenen. Bra om man ska jobba i specifik scen MainMenu är default
    }

    public update() {
        this.activeScene.update();
    }

    public draw() {
        this.activeScene.draw();
    }

    public changeActiveScene(scene: IScene) {
        this.activeScene = scene;
    }
}
