class hint2 extends Phaser.Scene{
    constructor(){
        super({ key: 'hint2'})
    }

    preload(){
        
    }

    create(){
        this.add.image(400, 300, 'hintUI2'); 
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
        let leftButton = this.add.image(72, 490, 'leftHint');
        this.add.image(522, 90, 'lockBlue').setScale(0.4);
        this.add.image(728, 90, 'keyBlue').setScale(0.4);

        gameState.tipTruck1 = new Truck(this, 105, 195, 'truckright', 1, 9);
        gameState.tipTruck1.depth = 1;
        gameState.tipTruck2 = new Truck(this, 105, 295, 'truckright', 1, 9);
        gameState.tipTruck2.depth = 1;
        gameState.tipTruck3 = new Truck(this, 105, 395, 'truckright', 1, 9);
        gameState.tipTruck3.depth = 1;
 
        let lock1 = this.add.image(205, 195, 'lockBlue').setScale(0.7); 
        let lock2 = this.add.image(205, 295, 'lockBlue').setScale(0.7);
        let lock3 = this.add.image(205, 395, 'lockBlue').setScale(0.7);

        let key1 = this.add.image(305, 195, 'keyBlue').setScale(0.7);
        let key2 = this.add.image(305, 295, 'keyBlue').setScale(0.7);
        let key3 = this.add.image(305, 395, 'keyBlue').setScale(0.7);

        backButton.setInteractive();
        backButton.on('pointerover', function(){
            backButton.setTint(0x808080);
        });
        backButton.on('pointerout', function(){
            backButton.setTint(0xffffff);
        });
        backButton.on('pointerup', function(){
            clickSound(myScene);
            game.scene.stop('hint2');
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
            myScene.scene.stop('hint2');
            myScene.scene.launch('hint3');
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
            myScene.scene.stop('hint2');
            myScene.scene.launch('hint1');
        });
    }

    update(){
        if (gameState.tipTruck1.x < 175 && gameState.tipTruck2.x < 174 && gameState.tipTruck3.x < 174){
            gameState.tipTruck1.x++;
            gameState.tipTruck2.x++;
            gameState.tipTruck3.x++;
        }  
        if (gameState.tipTruck1.x >= 174 && gameState.tipTruck1.x <= 355){
            gameState.tipTruck1.x++;
        }

        if (gameState.tipTruck1.x >= 274 && gameState.tipTruck2.x <= 355){
            gameState.tipTruck2.x++;
        }

        if (gameState.tipTruck2.x >= 274 && gameState.tipTruck3.x <= 355){
            gameState.tipTruck3.x++;
        }

        if (gameState.tipTruck1.x >= 355 && gameState.tipTruck2.x >= 355 && gameState.tipTruck3.x >= 355){
            gameState.tipTruck1.x = 105;
            gameState.tipTruck2.x = 105;
            gameState.tipTruck3.x = 105;
        }

    }
}