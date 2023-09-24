class mainMenu extends Phaser.Scene {
    constructor(){
        super({ key: 'mainMenu'})
    }

    preload(){
        this.load.image('UI', 'assets/mainMenuBackground.png');
        this.load.image('gameComplete', 'assets/gameCompleteBackground.png');
        this.load.image('levelUI', 'assets/levelBackground.png');
        this.load.image('logo', 'assets/finishedLogo.png');
        this.load.image('start', 'assets/start.png');
        this.load.image('levelSelect', 'assets/levelselect.png');
        this.load.image('muteSound', 'assets/mutesound.png');
        this.load.image('muteSoundSlash', 'assets/muteSoundSlash.png')
        this.load.image('muteMusic', 'assets/mutemusic.png');
        this.load.image('muteMusicSlash', 'assets/mutemusicslash.png');
        this.load.image('back', 'assets/backButton.png');
        this.load.image('tilemap', 'assets/roadtilemap.png');
        this.load.image('truckup', 'assets/truckup.png');
        this.load.image('truckdown', 'assets/truckdown.png');
        this.load.image('truckleft', 'assets/truckleft.png');
        this.load.image('truckright', 'assets/truckright.png');
        this.load.image('level1corner', 'assets/level1corner.png')
        this.load.image('level2corner', 'assets/level2corner.png');
        this.load.image('level3corner', 'assets/level3corner.png');
        this.load.image('level4corner', 'assets/level4corner.png');
        this.load.image('level5corner', 'assets/level5corner.png');
        this.load.image('level6corner', 'assets/level6corner.png');
        this.load.image('level7corner', 'assets/level7corner.png');
        this.load.image('level8corner', 'assets/level8corner.png');
        this.load.image('level9corner', 'assets/level9corner.png');
        this.load.image('level10corner', 'assets/level10corner.png');
        this.load.image('hintUI1', 'assets/HintBackground1.png');
        this.load.image('hintUI2', 'assets/HintBackground2.png');
        this.load.image('hintUI3', 'assets/HintBackground3.png');
        this.load.image('hintUI4', 'assets/HintBackground4.png');
        this.load.image('hintUI5', 'assets/HintBackground5.png');
        this.load.image('hintUI6', 'assets/HintBackground6.png');
        this.load.image('startlevel', 'assets/startlevel.png');
        this.load.image('packageBlue', 'assets/packageblue.png');
        this.load.image('packageRed', 'assets/packagered.png');
        this.load.image('packageWhite', 'assets/packagewhite.png');
        this.load.image('packageGreen', 'assets/packagegreen.png');
        this.load.image('packageYellow', 'assets/packageyellow.png');
        this.load.image('hint', 'assets/hint.png');
        this.load.image('hintClose', 'assets/closeHint.png');
        this.load.image('restart', 'assets/restart.png');
        this.load.image('lockBlue', 'assets/lockblue.png');
        this.load.image('lockRed', 'assets/lockred.png');
        this.load.image('lockWhite', 'assets/lockwhite.png');
        this.load.image('lockGreen', 'assets/lockgreen.png');
        this.load.image('lockYellow', 'assets/lockyellow.png');
        this.load.image('unlockBlue', 'assets/unlockblue.png');
        this.load.image('unlockRed', 'assets/unlockred.png');
        this.load.image('unlockGreen', 'assets/unlockgreen.png');
        this.load.image('unlockYellow', 'assets/unlockyellow.png');
        this.load.image('unlockWhite', 'assets/unlockwhite.png');
        this.load.image('finishBlue', 'assets/finishblue.png');
        this.load.image('finishRed', 'assets/finishred.png');
        this.load.image('finishGreen', 'assets/finishgreen.png');
        this.load.image('finishYellow', 'assets/finishyellow.png');
        this.load.image('finishWhite', 'assets/finishwhite.png');
        this.load.image('signalBlue', 'assets/signalblue.png');
        this.load.image('signalRed', 'assets/signalred.png');
        this.load.image('signalYellow', 'assets/signalyellow.png');
        this.load.image('signalGreen', 'assets/signalgreen.png');
        this.load.image('signalWhite', 'assets/signalwhite.png');
        this.load.image('waitBlue', 'assets/waitblue.png');
        this.load.image('waitRed', 'assets/waitred.png');
        this.load.image('waitWhite', 'assets/waitwhite.png');
        this.load.image('waitGreen', 'assets/waitgreen.png');
        this.load.image('waitYellow', 'assets/waityellow.png');
        this.load.image('semaphoreCount', 'assets/semaphorecount.png')
        this.load.image('plusButton', 'assets/plusButton.png');
        this.load.image('minusButton', 'assets/minusButton.png');
        this.load.image('nextlevel', 'assets/nextlevel.png');
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