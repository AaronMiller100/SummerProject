class audioScene extends Phaser.Scene {
    constructor(){
        super({ key: 'audioScene'})
    }

    preload(){
        this.load.audio('backgroundMusic', 'assets/Song.wav');
        this.load.audio('clickSound', 'assets/clickSound.mp3');
        this.load.audio('startSound', 'assets/startSound.mp3')
    }

    create (){
        if (gameState.musicMuted == false){
            gameState.backgroundMusic = this.sound.add('backgroundMusic'); 
            gameState.backgroundMusic.loop = true;
            gameState.backgroundMusic.setVolume(0.2);
            gameState.backgroundMusic.play();
        }
    }

    update (){
        if (gameState.musicMuted == true){
            this.musicCurrentlyPlaying = false;
            gameState.backgroundMusic.pause();
        } else if (gameState.musicMuted == false && this.musicCurrentlyPlaying == false){
            this.musicCurrentlyPlaying = true;
            let backgroundMusic = this.sound.add('backgroundMusic'); 
            backgroundMusic.loop = true;
            backgroundMusic.setVolume(0.2);
            gameState.backgroundMusic.play();
        }
    }
}