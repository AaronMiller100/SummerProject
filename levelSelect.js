class levelSelect extends Phaser.Scene {
    constructor(){
        super({ key: 'levelSelect'})
    }

    preload(){
        this.load.image('level1NotComplete', 'assets/level1.png');
        this.load.image('level2NotComplete', 'assets/level2.png');
        this.load.image('level3NotComplete', 'assets/level3.png');
        this.load.image('level4NotComplete', 'assets/level4.png');
        this.load.image('level5NotComplete', 'assets/level5.png');
        this.load.image('level6NotComplete', 'assets/level6.png');
        this.load.image('level7NotComplete', 'assets/level7.png');
        this.load.image('level8NotComplete', 'assets/level8.png');
        this.load.image('level9NotComplete', 'assets/level9.png');
        this.load.image('level10NotComplete', 'assets/level10.png');
        this.load.image('level1Complete', 'assets/level1Complete.png');
        this.load.image('level2Complete', 'assets/level2Complete.png');
        this.load.image('level3Complete', 'assets/level3Complete.png');
        this.load.image('level4Complete', 'assets/level4Complete.png');
        this.load.image('level5Complete', 'assets/level5Complete.png');
        this.load.image('level6Complete', 'assets/level6Complete.png');
        this.load.image('level7Complete', 'assets/level7Complete.png');
        this.load.image('level8Complete', 'assets/level8Complete.png');
        this.load.image('level9Complete', 'assets/level9Complete.png');
        this.load.image('level10Complete', 'assets/level10Complete.png');
        this.load.image('level1Started', 'assets/level1Started.png');
        this.load.image('level2Started', 'assets/level2Started.png');
        this.load.image('level3Started', 'assets/level3Started.png');
        this.load.image('level4Started', 'assets/level4Started.png');
        this.load.image('level5Started', 'assets/level5Started.png');
        this.load.image('level6Started', 'assets/level6Started.png');
        this.load.image('level7Started', 'assets/level7Started.png');
        this.load.image('level8Started', 'assets/level8Started.png');
        this.load.image('level9Started', 'assets/level9Started.png');
        this.load.image('level10Started', 'assets/level10Started.png');
    }

    create (){
        this.add.image(400, 300, 'UI'); 
        let backButton = this.add.image(50, 40, 'back');        
        let levelCompleteButtonsArray = ['level1Complete', 'level2Complete', 'level3Complete', 'level4Complete', 'level5Complete', 'level6Complete', 'level7Complete', 'level8Complete', 'level9Complete', 'level10Complete'];
        let levelStartedButtonsArray = ['level1Started', 'level2Started', 'level3Started', 'level4Started', 'level5Started', 'level6Started', 'level7Started', 'level8Started', 'level9Started', 'level10Started'];
        let scene = this;

        let levelButtons = [this.add.image(200, 220, 'level1NotComplete'), this.add.image(300, 220, 'level2NotComplete'), this.add.image(400, 220, 'level3NotComplete'), this.add.image(500, 220, 'level4NotComplete'),
        this.add.image(600, 220, 'level5NotComplete'), this.add.image(200, 320, 'level6NotComplete'), this.add.image(300, 320, 'level7NotComplete'), this.add.image(400, 320, 'level8NotComplete'), 
        this.add.image(500, 320, 'level9NotComplete'), this.add.image(600, 320, 'level10NotComplete')];

        for (let i = 0; i<=gameState.levelsCompleted.length; i++){
            if (gameState.levelsCompleted[i] == true){
                levelButtons[i].setTexture(levelCompleteButtonsArray[i]);
                levelButtons[i].setInteractive();                
                levelButtons[i].on('pointerover', function(){
                    levelButtons[i].setScale(1.1);
                });
                levelButtons[i].on('pointerout', function(){
                    levelButtons[i].setScale(1);
                });
                levelButtons[i].on('pointerup', function(){
                    clickSound(scene);
                    game.scene.stop('levelSelect');
                    game.scene.start('level' + (i+1));
                });
            }
        }

        let levelsComplete = 0;
        for (let i = 0; i<gameState.levelsCompleted.length; i++){
            if (gameState.levelsCompleted[i] == true){
                levelsComplete++;
            } 
        };
        
        if (levelsComplete == 0){
            levelButtons[0].setTexture('level1Started'); 
            levelButtons[0].setInteractive();        
            levelButtons[0].on('pointerover', function(){
                levelButtons[0].setScale(1.1);
            });
            levelButtons[0].on('pointerout', function(){
                levelButtons[0].setScale(1);
            });
            levelButtons[0].on('pointerup', function(){
                game.scene.stop('levelSelect');
                game.scene.start('level1');
            });   
        } else if (levelsComplete != 10) {
            levelButtons[levelsComplete].setTexture(levelStartedButtonsArray[levelsComplete]); 
            levelButtons[levelsComplete].setInteractive();        
            levelButtons[levelsComplete].on('pointerover', function(){
                levelButtons[levelsComplete].setScale(1.1);
            });
            levelButtons[levelsComplete].on('pointerout', function(){
                levelButtons[levelsComplete].setScale(1);
            });
            levelButtons[levelsComplete].on('pointerup', function(){
                clickSound(scene);
                game.scene.stop('levelSelect');
                game.scene.start('level' + (levelsComplete+1));
            });   
        }
    
        let muteSoundButton;
        let muteMusicButton;
        
        makeAndSetAudioButtonsInteractive(this, muteSoundButton, muteMusicButton);
        setBackButtonInteractive(backButton, 'levelSelect', this);
    }

    update (){
        
    }
}