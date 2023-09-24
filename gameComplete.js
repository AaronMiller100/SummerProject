class gameComplete extends Phaser.Scene{
    constructor(){
        super({ key: 'gameComplete'})
    }

    preload(){

    }

    create(){
        this.add.image(400, 300, 'gameComplete'); 
        let backButton = this.add.image(50, 40, 'back'); 
        let muteSoundButton;
        let muteMusicButton;

        makeAndSetAudioButtonsInteractive(this, muteSoundButton, muteMusicButton);
        setBackButtonInteractive(backButton, 'gameComplete', this);

        refresh();
    }

    update(){
        
    }
}