class mainMenu extends Phaser.Scene {
    constructor(){
        super({ key: 'mainMenu'})
    }

    preload(){
        this.load.image('UI', 'assets/mainMenuBackground.png');
        this.load.image('gameComplete', 'assets/gameCompleteBackground.png');
        this.load.image('levelUI', 'assets/levelBackground.png');
        this.load.image('logo', 'assets/finishedLogo.png');
        this.load.image('start', 'assets/Start.png');
        this.load.image('levelSelect', 'assets/levelSelect.png');
        this.load.image('muteSound', 'assets/muteSound.png');
        this.load.image('muteSoundSlash', 'assets/muteSoundSlash.png')
        this.load.image('muteMusic', 'assets/muteMusic.png');
        this.load.image('muteMusicSlash', 'assets/muteMusicSlash.png');
        this.load.image('back', 'assets/backButton.png');
        this.load.image('tilemap', 'assets/roadTilemap.png');
        this.load.image('truckup', 'assets/truckUp.png');
        this.load.image('truckdown', 'assets/truckDown.png');
        this.load.image('truckleft', 'assets/truckLeft.png');
        this.load.image('truckright', 'assets/truckRight.png');
        this.load.image('level1corner', 'assets/level1Corner.png')
        this.load.image('level2corner', 'assets/level2Corner.png');
        this.load.image('level3corner', 'assets/level3Corner.png');
        this.load.image('level4corner', 'assets/level4Corner.png');
        this.load.image('level5corner', 'assets/level5Corner.png');
        this.load.image('level6corner', 'assets/level6Corner.png');
        this.load.image('level7corner', 'assets/level7Corner.png');
        this.load.image('level8corner', 'assets/level8Corner.png');
        this.load.image('level9corner', 'assets/level9Corner.png');
        this.load.image('level10corner', 'assets/level10Corner.png');
        this.load.image('hintUI1', 'assets/HintBackground1.png');
        this.load.image('hintUI2', 'assets/HintBackground2.png');
        this.load.image('hintUI3', 'assets/HintBackground3.png');
        this.load.image('hintUI4', 'assets/HintBackground4.png');
        this.load.image('hintUI5', 'assets/HintBackground5.png');
        this.load.image('hintUI6', 'assets/HintBackground6.png');
        this.load.image('startlevel', 'assets/startlevel.png');
        this.load.image('packageBlue', 'assets/packageBlue.png');
        this.load.image('packageRed', 'assets/packageRed.png');
        this.load.image('packageWhite', 'assets/packageWhite.png');
        this.load.image('packageGreen', 'assets/packageGreen.png');
        this.load.image('packageYellow', 'assets/packageYellow.png');
        this.load.image('hint', 'assets/Hint.png');
        this.load.image('hintClose', 'assets/closeHint.png');
        this.load.image('restart', 'assets/Restart.png');
        this.load.image('lockBlue', 'assets/lockBlue.png');
        this.load.image('lockRed', 'assets/lockRed.png');
        this.load.image('lockWhite', 'assets/lockWhite.png');
        this.load.image('lockGreen', 'assets/lockGreen.png');
        this.load.image('lockYellow', 'assets/lockYellow.png');
        this.load.image('unlockBlue', 'assets/unlockBlue.png');
        this.load.image('unlockRed', 'assets/unlockRed.png');
        this.load.image('unlockGreen', 'assets/unlockFreen.png');
        this.load.image('unlockYellow', 'assets/unlockYellow.png');
        this.load.image('unlockWhite', 'assets/unlockWhite.png');
        this.load.image('finishBlue', 'assets/finishBlue.png');
        this.load.image('finishRed', 'assets/finishRed.png');
        this.load.image('finishGreen', 'assets/finishGreen.png');
        this.load.image('finishYellow', 'assets/finishYellow.png');
        this.load.image('finishWhite', 'assets/finishWhite.png');
        this.load.image('signalBlue', 'assets/signalBlue.png');
        this.load.image('waitBlue', 'assets/waitBlue.png');
        this.load.image('semaphoreCount', 'assets/semaphoreCount.png')
        this.load.image('plusButton', 'assets/plusButton.png');
        this.load.image('minusButton', 'assets/minusButton.png');
        this.load.image('nextlevel', 'assets/nextLevel.png');
        this.load.image('keyBlue', 'assets/keyBlue.png');
        this.load.image('keyRed', 'assets/keyRed.png');
        this.load.image('keyGreen', 'assets/keyGreen.png');
        this.load.image('keyYellow', 'assets/keyYellow.png');
        this.load.image('keyWhite', 'assets/keyWhite.png');
        this.load.image('clearButton', 'assets/clearButton.png');
        this.load.image('leftHint', 'assets/hintLeft.png');
        this.load.image('rightHint', 'assets/hintRight.png');
        this.load.image('pointer', 'assets/pointer.png');
    }

    create (){
        if (gameState.audioSceneCreated == false){ 
            gameState.audioSceneCreated = true;
            this.scene.launch("audioScene");
        }
        this.input.mouse.disableContextMenu();

        this.add.image(400, 300, 'UI'); 
        this.add.image(400, 170, 'logo').setScale(0.4);
        let startButton = this.add.image(400, 375, 'start').setScale(0.8);
        let levelButton = this.add.image(400, 480, 'levelSelect').setScale(0.8);
        let scene = this;
        let muteSoundButton;
        let muteMusicButton;
        if (gameState.soundMuted == true){
            muteSoundButton =  this.add.image(40, 560, 'muteSoundSlash').setScale(0.75);
        } else {
            muteSoundButton =  this.add.image(40, 560, 'muteSound').setScale(0.75);
        }
        if (gameState.musicMuted == true){
            muteMusicButton = this.add.image(110, 560, 'muteMusicSlash').setScale(0.75);
        } else {
            muteMusicButton = this.add.image(110, 560, 'muteMusic').setScale(0.75);
        }

        makeAndSetAudioButtonsInteractive(this, muteSoundButton, muteMusicButton);

        startButton.setInteractive();
        startButton.on('pointerover', function(){
            startButton.setTint(0x009933);
        });
        startButton.on('pointerout', function(){
            startButton.setTint(0xffffff);
        });
        startButton.on('pointerup', function(){
            startSound(scene);
            game.scene.stop('mainMenu');
            game.scene.start('level1');
        })

        levelButton.setInteractive();
        levelButton.on('pointerover', function(){
            levelButton.setTint(0xebba34);
        });
        levelButton.on('pointerout', function(){
            levelButton.setTint(0xffffff);
        });
        levelButton.on('pointerup', function(){
            clickSound(scene);
            game.scene.stop('mainMenu');
            game.scene.start('levelSelect');
        })
        
    }

    update (){

    }
}