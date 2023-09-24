class level4 extends Phaser.Scene{
    constructor(){
        super({ key: 'level4'})
    }

    preload(){

    }

    create(){
        this.add.image(400, 300, 'levelUI'); 
        let backButton = this.add.image(50, 40, 'back'); 
        let muteSoundButton;
        let muteMusicButton;
        gameState.levelComplete = false;
        gameState.signalAndWaitUnlocked = true;
        let myScene = this;

        let throughput = 100;
        gameState.throughputText = this.add.text(635, 525, throughput + '%', {fontSize: "60px", color: 'black'});

        let level = [
            [   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [   0,  12, 0,  12, 0,  12, 0,  12, 0,  12, 0,  0],
            [   0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  0],
            [   0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  0],
            [   0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  0],
            [   0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  0],
            [   0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  0],
            [   0,  14, 0,  14, 0,  14, 0,  14, 0,  14, 0,  0],
            [   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
        ];
        let map = this.make.tilemap({data: level, tileWidth: 50, tileHeight: 50});
        let tiles = map.addTilesetImage('tilemap');
        let layer = map.createLayer(0, tiles, 6, 72);

        this.add.image(705, 28, 'level4corner');
        let start = this.add.image(300, 38, 'startlevel').setScale(0.7);
        let hint = this.add.image(550, 38, 'hint').setScale(0.7);
        let clear = this.add.sprite(705, 420, 'clearButton');

        gameState.waits = this.physics.add.group();
        for (let i = 0; i < 20; i++){
            gameState.waits.add(new Wait(this, 'waitBlue', 'blue'));
        }

        gameState.signals = this.physics.add.group();
        for (let i = 0; i < 20; i++){
            gameState.waits.add(new Signal(this, 'signalBlue', 'blue'));
        }

        gameState.locks = this.physics.add.group();
        for (let i = 0; i < 20; i++){
            gameState.locks.add(new Lock(this, 'lockBlue', 'blue'));
        }

        gameState.unlocks = this.physics.add.group();
        for (let i = 0; i < 20; i++){
            gameState.unlocks.add(new Unlock(this, 'keyBlue', 'blue'));
        }

        gameState.finish = this.physics.add.group();
        gameState.finish.add(new Finish(this, getXOnTilemap(2), getYOnTilemap(7), 'finishBlue', 'blue'));
        gameState.finish.add(new Finish(this, getXOnTilemap(4), getYOnTilemap(7), 'finishBlue', 'blue'));
        gameState.finish.add(new Finish(this, getXOnTilemap(6), getYOnTilemap(7), 'finishBlue', 'blue'));
        gameState.finish.add(new Finish(this, getXOnTilemap(8), getYOnTilemap(7), 'finishBlue', 'blue'));
        gameState.finish.add(new Finish(this, getXOnTilemap(10), getYOnTilemap(7), 'finishBlue', 'blue'));

        gameState.resource = this.physics.add.group();
        gameState.blueResourceAmount = 4;
        gameState.resource.add(new Resource(this, getXOnTilemap(2), getYOnTilemap(5), 'packageBlue', gameState.blueResourceAmount, 'blue'));      
        gameState.resource.add(new Resource(this, getXOnTilemap(4), getYOnTilemap(5), 'packageBlue', gameState.blueResourceAmount, 'blue'));   
        gameState.resource.add(new Resource(this, getXOnTilemap(6), getYOnTilemap(5), 'packageBlue', gameState.blueResourceAmount, 'blue'));   
        gameState.resource.add(new Resource(this, getXOnTilemap(8), getYOnTilemap(5), 'packageBlue', gameState.blueResourceAmount, 'blue'));   
        gameState.resource.add(new Resource(this, getXOnTilemap(10), getYOnTilemap(5), 'packageBlue', gameState.blueResourceAmount, 'blue'));   
        gameState.blueResourceAmountText1 = this.add.text(getXOnTilemap(2)-12, getYOnTilemap(5)-18, gameState.blueResourceAmount, { fontSize: "40px"}); 
        gameState.blueResourceAmountText2 = this.add.text(getXOnTilemap(4)-12, getYOnTilemap(5)-18, gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.blueResourceAmountText3 = this.add.text(getXOnTilemap(6)-12, getYOnTilemap(5)-18, gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.blueResourceAmountText4 = this.add.text(getXOnTilemap(8)-12, getYOnTilemap(5)-18, gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.blueResourceAmountText5 = this.add.text(getXOnTilemap(10)-12, getYOnTilemap(5)-18, gameState.blueResourceAmount, { fontSize: "40px"});


        gameState.trucks = this.physics.add.group();
        gameState.trucks.add(new Truck(this, getXOnTilemap(2), getYOnTilemap(2), 'truckdown', 1, 8));       
        gameState.trucks.add(new Truck(this, getXOnTilemap(4), getYOnTilemap(2), 'truckdown', 1, 8));     
        gameState.trucks.add(new Truck(this, getXOnTilemap(6), getYOnTilemap(2), 'truckdown', 1, 8));       
        gameState.trucks.add(new Truck(this, getXOnTilemap(8), getYOnTilemap(2), 'truckdown', 1, 8)); 
        gameState.trucks.add(new Truck(this, getXOnTilemap(10), getYOnTilemap(2), 'truckdown', 1, 8)); 
        gameState.trucks.getChildren().forEach(function (truck){
            truck.depth = 1;
        });   

        makeAndSetAudioButtonsInteractive(this, muteSoundButton, muteMusicButton);
        setBackButtonInteractive(backButton, 'level4', this);
        setStartButtonInteractive(start, myScene);
        setClearButtonInteractive(clear, myScene);

        gameState.locks.getChildren().forEach(function (button){
            lockLogic(button, gameState.finish, gameState.resource, gameState.trucks, myScene);
        });

        gameState.unlocks.getChildren().forEach(function (button){
            unlockLogic(button, gameState.finish, gameState.resource, gameState.trucks, myScene);
        });

        gameState.waits.getChildren().forEach(function (button){
            waitLogic(button, gameState.finish, gameState.resource, gameState.trucks)
        });

        gameState.signals.getChildren().forEach(function (button){
            signalLogic(button, gameState.finish, gameState.resource, gameState.trucks)
        });

        this.add.image(360, 565, 'semaphoreCount');
        gameState.semaphoreValueText = this.add.text(470, 540, gameState.semaphoreValue, { fontSize: "50px", color: 'black'});

        let plusButton = this.add.sprite(520, 543, 'plusButton').setScale(0.4);
        setPlusButtonInteractive(plusButton, this);
        let minusButton = this.add.sprite(520, 577, 'minusButton').setScale(0.4);
        setMinusButtonInteractive(minusButton, this);

        gameState.waits = this.physics.add.group();
        for (let i = 0; i < 20; i++){
            gameState.waits.add(new Wait(this, 'waitBlue', 'blue'));
        }    
        gameState.signals = this.physics.add.group();
        for (let i = 0; i < 20; i++){
            gameState.signals.add(new Signal(this, 'signalBlue', 'blue'));
        }
        
        gameState.waits.getChildren().forEach(function (button){
            waitLogic(button, gameState.finish, gameState.resource, gameState.trucks)
        });
        gameState.signals.getChildren().forEach(function (button){
            signalLogic(button, gameState.finish, gameState.resource, gameState.trucks)
        });
        
        hint.setInteractive();
        hint.on('pointerover', function(){
            hint.setTint(0x009933);
        });
        hint.on('pointerup', function(){
            clickSound(myScene);
            myScene.scene.launch("hint1");
        })
        hint.on('pointerout', function(){
            hint.setTint(0xffffff);
        });

        this.physics.add.overlap(gameState.trucks, gameState.finish, function (truck, finish){truckFinishCollisionLogic(truck, finish, 5)}, null, this);
        this.physics.add.overlap(gameState.trucks, gameState.resource, function (truck, resource){truckResourceOverlap(truck, resource)}, null, this);
        this.physics.add.overlap(gameState.trucks, gameState.locks, function(truck, lock){truckLockOverlap(truck, lock)}, null, this);
        this.physics.add.overlap(gameState.trucks, gameState.unlocks, function(truck, unlock){truckUnlockLogic(truck, unlock)}, null, this);             
        this.physics.add.overlap(gameState.trucks, gameState.waits, function(truck, wait){truckWaitCollisionLogic(truck, wait)}, null, this);
        this.physics.add.overlap(gameState.trucks, gameState.signals, function(truck, signal){truckSignalCollisionLogic(truck, signal)}, null, this);
        

        refresh();
    }

    update(){
        
        gameState.blueResourceAmountText1.setText(gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.blueResourceAmountText2.setText(gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.blueResourceAmountText3.setText(gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.blueResourceAmountText4.setText(gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.blueResourceAmountText5.setText(gameState.blueResourceAmount, { fontSize: "40px"});
        gameState.semaphoreValueText.setText(gameState.semaphoreValue);

        gameState.ResourceAmount = gameState.blueResourceAmount + gameState.yellowResourceAmount + gameState.greenResourceAmount + gameState.redResourceAmount + gameState.whiteResourceAmount;
        
        gameState.trucks.getChildren().forEach(function (truck){
            if (gameState.levelStarted == true && truck.isMoving == false && truck.stoppedMovingStarttime == null && truck.finished == false){
                truck.stoppedMovingStarttime = new Date();                
            } 

            if (gameState.levelStarted == true && truck.isMoving == true && truck.stoppedMovingStarttime != null && truck.stoppedMovingEndtime == null && truck.finished == false &&
                (gameState.blueLocked == true || gameState.redLocked == true || gameState.greenLocked == true || gameState.yellowLocked == true || gameState.whiteLocked == true || gameState.semaphoreValue < 1)){
                truck.stoppedMovingEndtime = new Date();
            }
        });

        if (gameState.levelStarted == true || gameState.levelFailed == true || gameState.levelComplete == true){
            gameState.throughputText.setText(workOutThroughPut()+"%");
        }

        levelStartedLogic(this, 'level4', 'level5', 4);
    }
}