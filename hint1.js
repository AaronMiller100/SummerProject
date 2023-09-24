class hint1 extends Phaser.Scene{
    constructor(){
        super({ key: 'hint1'})
    }

    preload(){
        
    }

    create(){
        this.add.image(400, 300, 'hintUI1'); 
        let myScene = this;

        let level = [
            [   15, 2,  2,  2,  2,  13],
            [   0,  0,  0,  0,  0,  0],
            [   15, 2,  2,  2,  2,  13],
            [   0,  0,  0,  0,  0,  0],
            [   15, 2,  2,  2,  2,  13]
        ];
        let map = this.make.tilemap({data: level, tileWidth: 50, tileHeight: 50});
        let tiles = map.addTilesetImage('tilemap');
        let layer = map.createLayer(0, tiles, 80, 170);

        let backButton = this.add.image(80, 110, 'hintClose'); 
        let rightButton = this.add.image(712, 490, 'rightHint');
        this.add.image(626, 225, 'packageBlue').setScale(0.4);
        this.add.image(695, 248, 'finishBlue').setScale(0.4);

        gameState.tipTruck1 = new Truck(this, 105, 195, 'truckright', 1, 9);
        gameState.tipTruck1.depth = 1;
        gameState.tipTruck2 = new Truck(this, 105, 295, 'truckright', 1, 9);
        gameState.tipTruck2.depth = 1;
        gameState.tipTruck3 = new Truck(this, 105, 395, 'truckright', 1, 9);
        gameState.tipTruck3.depth = 1;

        gameState.tipResources = this.physics.add.group();
        gameState.tipBlueResourceAmount = 1;
        gameState.tipResources.add(new Resource(this, 205, 195, 'packageBlue', gameState.tipblueResourceAmount, 'blue'));    
        gameState.tipResources.add(new Resource(this, 205, 295, 'packageBlue', gameState.tipBlueResourceAmount, 'blue'));    
        gameState.tipResources.add(new Resource(this, 205, 395, 'packageBlue', gameState.tipBlueResourceAmount, 'blue'));    
        gameState.tipBlueResourceAmountText1 = this.add.text(205-12, 195-18, gameState.tipBlueResourceAmount, { fontSize: "40px"}); 
        gameState.tipBlueResourceAmountText2 = this.add.text(205-12, 295-18, gameState.tipBlueResourceAmount, { fontSize: "40px"}); 
        gameState.tipBlueResourceAmountText3 = this.add.text(205-12, 395-18, gameState.tipBlueResourceAmount, { fontSize: "40px"}); 

        gameState.tipFinishes = this.physics.add.group();
        gameState.tipFinishes.add(new Finish(this, 305, 195, 'finishBlue', 'blue'));
        gameState.tipFinishes.add(new Finish(this, 305, 295, 'finishBlue', 'blue'));
        gameState.tipFinishes.add(new Finish(this, 305, 395, 'finishBlue', 'blue'));

        backButton.setInteractive();
        backButton.on('pointerover', function(){
            backButton.setTint(0x808080);
        });
        backButton.on('pointerout', function(){
            backButton.setTint(0xffffff);
        });
        backButton.on('pointerup', function(){
            clickSound(myScene);
            game.scene.stop('hint1');
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
            myScene.scene.stop('hint1');
            myScene.scene.launch('hint2');
        });
    }

    update(){
        gameState.tipBlueResourceAmountText1.setText(gameState.tipBlueResourceAmount);
        gameState.tipBlueResourceAmountText2.setText(gameState.tipBlueResourceAmount);
        gameState.tipBlueResourceAmountText3.setText(gameState.tipBlueResourceAmount);

        if (gameState.tipTruck1.x < 355){
            gameState.tipTruck1.x++;
        }
        if (gameState.tipTruck1.x == 180){
            gameState.tipBlueResourceAmount--;
        } else if (gameState.tipTruck1.x == 280){
            gameState.tipBlueResourceAmount++;
        }

        if (gameState.tipTruck1.x >= 355 && gameState.tipTruck2.x < 355){
            gameState.tipTruck2.x++;
        }
        if (gameState.tipTruck2.x == 180){
            gameState.tipBlueResourceAmount--;
        } else if (gameState.tipTruck2.x == 280){
            gameState.tipBlueResourceAmount++;
        }

        if (gameState.tipTruck1.x >= 355 && gameState.tipTruck2.x >= 355 && gameState.tipTruck3.x < 355){
            gameState.tipTruck3.x++;
        }
        if (gameState.tipTruck3.x == 180){
            gameState.tipBlueResourceAmount--;
        } else if (gameState.tipTruck3.x == 280){
            gameState.tipBlueResourceAmount++;
        }

        if (gameState.tipTruck1.x >= 355 && gameState.tipTruck2.x >= 355 && gameState.tipTruck3.x >= 355){
            gameState.tipTruck1.x = 105;
            gameState.tipTruck2.x = 105;
            gameState.tipTruck3.x = 105;
        }
    }
}