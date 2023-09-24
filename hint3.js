class hint3 extends Phaser.Scene{
    constructor(){
        super({ key: 'hint3'})
    }

    preload(){
        
    }

    create(){
        this.add.image(400, 300, 'hintUI3'); 
        let myScene = this;

        let level = [
            [   0,  0,  0,  0,  0,  0],
            [   15, 2,  2,  2,  2,  13],
            [   0,  0,  0,  0,  0,  0],
            [   15, 2,  2,  2,  2,  13],
            [   0,  0,  0,  0,  0,  0]
        ];
        let map = this.make.tilemap({data: level, tileWidth: 50, tileHeight: 50});
        let tiles = map.addTilesetImage('tilemap');
        let layer = map.createLayer(0, tiles, 80, 170);

        let backButton = this.add.image(80, 110, 'hintClose'); 
        let rightButton = this.add.image(712, 490, 'rightHint');
        let leftButton = this.add.image(72, 490, 'leftHint');

        gameState.tipStart = this.add.image(290, 180, 'startlevel').setScale(0.5);

        gameState.tipTruck1 = new Truck(this, 105, 245, 'truckright', 1, 9);
        gameState.tipTruck1.depth = 1;
        gameState.tipTruck2 = new Truck(this, 105, 345, 'truckright', 1, 9);
        gameState.tipTruck2.depth = 1;

        gameState.tipResources = this.physics.add.group();
        gameState.tipBlueResourceAmount = 1;
        gameState.tipResources.add(new Resource(this, 205, 245, 'packageBlue', gameState.tipblueResourceAmount, 'blue'));    
        gameState.tipResources.add(new Resource(this, 205, 345, 'packageBlue', gameState.tipBlueResourceAmount, 'blue'));    
        gameState.tipBlueResourceAmountText1 = this.add.text(205-12, 245-18, gameState.tipBlueResourceAmount, { fontSize: "40px"}); 
        gameState.tipBlueResourceAmountText2 = this.add.text(205-12, 345-18, gameState.tipBlueResourceAmount, { fontSize: "40px"}); 

        gameState.tipFinishes = this.physics.add.group();
        gameState.tipFinishes.add(new Finish(this, 305, 245, 'finishBlue', 'blue'));
        gameState.tipFinishes.add(new Finish(this, 305, 345, 'finishBlue', 'blue'));

        this.add.image(100, 180, 'lockBlue');
        gameState.lock1 = this.add.image(100, 180, 'lockBlue');
        gameState.lock1.inPlace = false;
        gameState.lock2 = this.add.image(100, 180, 'lockBlue');
        gameState.lock2.inPlace = false;
        this.add.image(170, 180, 'keyBlue');
        gameState.key1 = this.add.image(170, 180, 'keyBlue');
        gameState.key1.inPlace = false;
        gameState.key2 = this.add.image(170, 180, 'keyBlue');
        gameState.key2.inPlace = false;

        gameState.pointer = this.add.image(100, 180, 'pointer').setScale(0.3);

        backButton.setInteractive();
        backButton.on('pointerover', function(){
            backButton.setTint(0x808080);
        });
        backButton.on('pointerout', function(){
            backButton.setTint(0xffffff);
        });
        backButton.on('pointerup', function(){
            clickSound(myScene);
            game.scene.stop('hint3');
        });        
        
        rightButton.setInteractive();
        rightButton.on('pointerover', function(){
            rightButton.setTint(0x808080);
        });
        rightButton.on('pointerout', function(){
            rightButton.setTint(0xffffff);
        });
        rightButton.on('pointerup', function(){
            clickSound(myScene);
            myScene.scene.stop('hint3');
            myScene.scene.launch('hint4');
        });

        leftButton.setInteractive();
        leftButton.on('pointerover', function(){
            leftButton.setTint(0x808080);
        });
        leftButton.on('pointerout', function(){
            leftButton.setTint(0xffffff);
        });
        leftButton.on('pointerup', function(){
            clickSound(myScene);
            myScene.scene.stop('hint3');
            myScene.scene.launch('hint2');
        });
    }

    update(){
        gameState.tipBlueResourceAmountText1.setText(gameState.tipBlueResourceAmount);
        gameState.tipBlueResourceAmountText2.setText(gameState.tipBlueResourceAmount);


        if (gameState.lock1.x < 155){
            gameState.lock1.alpha = 0.5;
            gameState.lock1.x++;
            gameState.pointer.x++;
        }
        if (gameState.lock1.y < 245){
            gameState.lock1.alpha = 0.5;
            gameState.lock1.y++;
            gameState.pointer.y++;
        }
        if (gameState.lock1.x == 155 && gameState.lock1.y == 245){
            gameState.lock1.alpha = 1;
            gameState.lock1.setScale(0.7);
        }

        if (gameState.lock1.x == 155 && gameState.lock1.y == 245 && gameState.lock1.inPlace == false){
            if (gameState.pointer.x > 100){
                gameState.pointer.x--;
            }
            if (gameState.pointer.y > 180){
                gameState.pointer.y--;
            }
            if (gameState.pointer.x == 100 && gameState.pointer.y == 180){
                gameState.lock1.inPlace = true;
            }
        }

        if (gameState.lock1.inPlace == true && gameState.lock2.inPlace == false && gameState.key1.inPlace == false && gameState.key2.inPlace == false){
            if (gameState.lock2.x < 155){
                gameState.lock2.alpha = 0.5;
                gameState.lock2.x++;
                gameState.pointer.x++;
            }
            if (gameState.lock2.y < 345){
                gameState.lock2.alpha = 0.5;
                gameState.lock2.y++;
                gameState.pointer.y++;
            }
            if (gameState.lock2.x == 155 && gameState.lock2.y == 345){
                gameState.lock2.alpha = 1;
                gameState.lock2.setScale(0.7);
            }
        }

        if (gameState.lock2.x == 155 && gameState.lock2.y == 345 && gameState.lock2.inPlace == false){
            if (gameState.pointer.x < 170){
                gameState.pointer.x++;
            }
            if (gameState.pointer.y > 180){
                gameState.pointer.y--;
            }
            if (gameState.pointer.x == 170 && gameState.pointer.y == 180){
                gameState.lock2.inPlace = true;
            }
        }

        if (gameState.lock2.inPlace == true && gameState.lock1.inPlace == true && gameState.key1.inPlace == false && gameState.key2.inPlace == false){
            if (gameState.key1.x < 355){
                gameState.key1.alpha = 0.5;
                gameState.key1.x++;
                gameState.pointer.x++;
            }
            if (gameState.key1.y < 245){
                gameState.key1.alpha = 0.5;
                gameState.key1.y++;
                gameState.pointer.y++;
            }
            if (gameState.key1.x == 355 && gameState.key1.y == 245){
                gameState.key1.alpha = 1;
                gameState.key1.setScale(0.7);
            }
        }

        if (gameState.key1.x == 355 && gameState.key1.y == 245 && gameState.key1.inPlace == false){
            if (gameState.pointer.x > 170){
                gameState.pointer.x--;
            }
            if (gameState.pointer.y > 180){
                gameState.pointer.y--;
            }
            if (gameState.pointer.x == 170 && gameState.pointer.y == 180){
                gameState.key1.inPlace = true;
            }
        }

        if (gameState.lock2.inPlace == true && gameState.lock1.inPlace == true && gameState.key1.inPlace == true && gameState.key2.inPlace == false){
            if (gameState.key2.x < 355){
                gameState.key2.alpha = 0.5;
                gameState.key2.x++;
                gameState.pointer.x++;
            }
            if (gameState.key2.y < 345){
                gameState.key2.alpha = 0.5;
                gameState.key2.y++;
                gameState.pointer.y++;
            }
            if (gameState.key2.x == 355 && gameState.key2.y == 345){
                gameState.key2.alpha = 1;
                gameState.key2.setScale(0.7);
            }
        }

        if (gameState.key2.x == 355 && gameState.key2.y == 345 && gameState.key2.inPlace == false){
            if (gameState.pointer.x > 290){
                gameState.pointer.x--;
            }
            if (gameState.pointer.y > 190){
                gameState.pointer.y--;
            }
            if (gameState.pointer.x == 290 && gameState.pointer.y == 190){
                clickSound(this);
                gameState.key2.inPlace = true;
            }
        }

        if (gameState.lock1.inPlace == true && gameState.lock2.inPlace == true && gameState.key1.inPlace == true && gameState.key2.inPlace == true){
            if (gameState.tipTruck1.x == 106 && gameState.tipTruck2.x == 106){
                gameState.tipStart.setTint(0x009933);
            } else {
                gameState.tipStart.clearTint();
            }

            if (gameState.tipTruck1.x < 355){
                gameState.tipTruck1.x++;
            }

            if ((gameState.tipTruck1.x < 130 || gameState.tipTruck1.x > 330) && gameState.tipTruck2.x < 355){
                gameState.tipTruck2.x++;
            }

            if (gameState.tipTruck1.x == 180){
                gameState.tipBlueResourceAmount--;
            }
            if (gameState.tipTruck1.x == 280){
                gameState.tipBlueResourceAmount++;
            }


            if (gameState.tipTruck2.x == 180){
                gameState.tipBlueResourceAmount--;
            }
            if (gameState.tipTruck2.x == 280){
                gameState.tipBlueResourceAmount++;
            }
        }

        if (gameState.tipTruck1.x >= 355 && gameState.tipTruck2.x >= 355){
            gameState.tipTruck1.x = 105;
            gameState.tipTruck2.x = 105;
            gameState.tipTruck3.x = 105;
            gameState.lock1.inPlace = false;
            gameState.lock1.x = 100;
            gameState.lock1.y = 180;
            gameState.lock1.setScale(1);
            gameState.lock2.inPlace = false;
            gameState.lock2.x = 100;
            gameState.lock2.y = 180;
            gameState.lock2.setScale(1);
            gameState.key1.inPlace = false;
            gameState.key1.x = 170;
            gameState.key1.y = 180;
            gameState.key1.setScale(1);
            gameState.key2.inPlace = false;
            gameState.key2.x = 170;
            gameState.key2.y = 180;
            gameState.key2.setScale(1);
            gameState.pointer.x = 100;
            gameState.pointer.y = 180;
        }
    }
}