class MainMenu implements IScene {
    private buttons: Button[] = [];

    constructor() {
        console.log('MainMenu created');
        this.buttons.push(
            new Button('ABOUT', createVector(width * 0.5, height * 0.45), () => console.log('About selected')),
            new Button('HOW TO PLAY',  createVector(width * 0.5, height * 0.50), () => console.log('How to Play selected')),
            new Button('SCOREBOARD', createVector(width * 0.5, height * 0.55), () => console.log('Scoreboard selected')),
            new Button('START GAME', createVector(width * 0.5, height * 0.60), () => console.log('Game started'))
        );
    }
    
    public update(): void {}
    
    public draw(): void {
        // CSS
        fill("grey");

        // HTML
        rect(width * 0.25 , height * 0.25 , width * 0.5, height * 0.5)

        for(const button of this.buttons) {
            button.draw();
        }
    }  
}