class hint6 extends Phaser.Scene{
    constructor(){
        super({ key: 'hint6'})
    }

    preload(){
    }

    create(){
        this.add.image(400, 300, 'hintUI6'); 
        let myScene = this;
        gameState.hint6TopComplete = false;

        let level = [
            [   0,  0,  0,  0,  0,  0],
            [   15, 2,  2,  2,  2,  13],
            [   0,  0,  0,  0,  0,  0],
        ];
        let map = this.make.tilemap({data: level, tileWidth: 50, tileHeight: 50});
        let tiles = map.addTilesetImage('tilemap');
        let layer = map.createLayer(0, tiles, 80, 170);

        let backButton = this.add.image(80, 110, 'hintClose'); 
        let leftButton = this.add.image(72, 490, 'leftHint');

        gameState.tipTruck1 = new Truck(this, 105, 245, 'truckright', 1, 9);
        gameState.tipTruck1.depth = 1;

        gameState.pointer = this.add.image(100, 250, 'pointer').setScale(0.3);
        gameState.pointer.depth = 1;
        gameState.lock1 = this.add.image(100, 180, 'lockBlue');
        gameState.lock2 = this.add.image(205, 245, 'lockBlue').setScale(0.7);
        gameState.key1 = this.add.image(170, 180, 'keyBlue');
        gameState.key2 = this.add.image(305, 245, 'keyBlue').setScale(0.7);

        backButton.setInteractive();
        backButton.on('pointerover', function(){
            backButton.setTint(0x808080);
        });
        backButton.on('pointerout', function(){
            backButton.setTint(0xffffff);
        });
        backButton.on('pointerup', function(){
            clickSound(myScene);
            game.scene.stop('hint6');
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
            myScene.scene.stop('hint6');
            myScene.scene.launch('hint5');
        });
    }

    update(){
        if (gameState.hint6TopComplete == true){
            if (gameState.lock2.texture.key == 'lockBlue' && gameState.key2.texture.key == 'keyBlue' && gameState.pointer.x < 205){
                gameState.pointer.x++;
            }
            if (gameState.lock2.texture.key == 'lockBlue' && gameState.key2.texture.key == 'keyBlue' && gameState.pointer.y < 245){
                gameState.pointer.y++;
            }
            if (gameState.lock2.texture.key == 'lockBlue' && gameState.key2.texture.key == 'keyBlue' && gameState.pointer.x == 205 && gameState.pointer.y == 245){
                gameState.lock2.setTexture('lockRed');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockRed' && gameState.key2.texture.key == 'keyBlue' && gameState.pointer.x < 305){
                gameState.pointer.x++;
            } else if (gameState.lock2.texture.key == 'lockRed' && gameState.key2.texture.key == 'keyBlue' && gameState.pointer.x == 305){
                gameState.key2.setTexture('keyRed');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockRed' && gameState.key2.texture.key == 'keyRed' && gameState.pointer.x > 205){
                gameState.pointer.x--;
            } else if (gameState.lock2.texture.key == 'lockRed' && gameState.key2.texture.key == 'keyRed' && gameState.pointer.x == 205){
                gameState.lock2.setTexture('lockGreen');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockGreen' && gameState.key2.texture.key == 'keyRed' && gameState.pointer.x < 305){
                gameState.pointer.x++;
            } else if (gameState.lock2.texture.key == 'lockGreen' && gameState.key2.texture.key == 'keyRed' && gameState.pointer.x == 305){
                gameState.key2.setTexture('keyGreen');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockGreen' && gameState.key2.texture.key == 'keyGreen' && gameState.pointer.x > 205){
                gameState.pointer.x--;
            } else if (gameState.lock2.texture.key == 'lockGreen' && gameState.key2.texture.key == 'keyGreen' && gameState.pointer.x == 205){
                gameState.lock2.setTexture('lockYellow');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockYellow' && gameState.key2.texture.key == 'keyGreen' && gameState.pointer.x < 305){
                gameState.pointer.x++;
            } else if (gameState.lock2.texture.key == 'lockYellow' && gameState.key2.texture.key == 'keyGreen' && gameState.pointer.x == 305){
                gameState.key2.setTexture('keyYellow');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockYellow' && gameState.key2.texture.key == 'keyYellow' && gameState.pointer.x > 205){
                gameState.pointer.x--;
            } else if (gameState.lock2.texture.key == 'lockYellow' && gameState.key2.texture.key == 'keyYellow' && gameState.pointer.x == 205){
                gameState.lock2.setTexture('lockWhite');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockWhite' && gameState.key2.texture.key == 'keyYellow' && gameState.pointer.x < 305){
                gameState.pointer.x++;
            } else if (gameState.lock2.texture.key == 'lockWhite' && gameState.key2.texture.key == 'keyYellow' && gameState.pointer.x == 305){
                gameState.key2.setTexture('keyWhite');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockWhite' && gameState.key2.texture.key == 'keyWhite' && gameState.pointer.x > 205){
                gameState.pointer.x--;
            } else if (gameState.lock2.texture.key == 'lockWhite' && gameState.key2.texture.key == 'keyWhite' && gameState.pointer.x == 205){
                gameState.lock2.setTexture('lockBlue');
                clickSound(this);
            }

            if (gameState.lock2.texture.key == 'lockBlue' && gameState.key2.texture.key == 'keyWhite' && gameState.pointer.x < 305){
                gameState.pointer.x++;
            } else if (gameState.lock2.texture.key == 'lockBlue' && gameState.key2.texture.key == 'keyWhite' && gameState.pointer.x == 305){
                gameState.key2.setTexture('keyBlue');
                clickSound(this);
                gameState.hint6TopComplete = false;
            }

        } else {
            if (gameState.lock1.texture.key == 'lockBlue' && gameState.key1.texture.key == 'keyBlue' && gameState.pointer.y > 180){
                gameState.pointer.y--;
            }
            if (gameState.lock1.texture.key == 'lockBlue' && gameState.key1.texture.key == 'keyBlue' && gameState.pointer.x > 100){
                gameState.pointer.x--;
            }
            if (gameState.key1.texture.key == 'keyBlue' && gameState.pointer.y == 180 && gameState.pointer.x == 100){
                gameState.lock1.setTexture('lockRed');
                clickSound(this);
            }

            if (gameState.lock1.texture.key == 'lockRed' && gameState.key1.texture.key == 'keyBlue' && gameState.pointer.x < 170){
                gameState.pointer.x++;
            } else if (gameState.key1.texture.key == 'keyBlue' && gameState.lock1.texture.key == 'lockRed' && gameState.pointer.x == 170){
                gameState.key1.setTexture('keyRed');
                clickSound(this);
            }

            if (gameState.key1.texture.key == 'keyRed' && gameState.lock1.texture.key == 'lockRed' && gameState.pointer.x > 100){
                gameState.pointer.x--;
            } else if (gameState.lock1.texture.key == 'lockRed' && gameState.key1.texture.key == 'keyRed' && gameState.pointer.x == 100){
                gameState.lock1.setTexture('lockGreen');
                clickSound(this);
            }

            if (gameState.lock1.texture.key == 'lockGreen' && gameState.key1.texture.key == 'keyRed' && gameState.pointer.x < 170){
                gameState.pointer.x++;
            } else if (gameState.key1.texture.key == 'keyRed' && gameState.lock1.texture.key == 'lockGreen' && gameState.pointer.x == 170){
                gameState.key1.setTexture('keyGreen');
                clickSound(this);
            }

            if (gameState.key1.texture.key == 'keyGreen' && gameState.lock1.texture.key == 'lockGreen' && gameState.pointer.x > 100){
                gameState.pointer.x--;
            } else if (gameState.lock1.texture.key == 'lockGreen' && gameState.lock1.texture.key == 'lockGreen' && gameState.pointer.x == 100){
                gameState.lock1.setTexture('lockYellow');
                clickSound(this);
            }

            if (gameState.key1.texture.key == 'keyGreen' && gameState.lock1.texture.key == 'lockYellow' && gameState.pointer.x < 170){
                gameState.pointer.x++;
            } else if (gameState.lock1.texture.key == 'lockYellow' && gameState.key1.texture.key == 'keyGreen' && gameState.pointer.x == 170){
                gameState.key1.setTexture('keyYellow');
                clickSound(this);
            }

            if (gameState.key1.texture.key == 'keyYellow' && gameState.lock1.texture.key == 'lockYellow' && gameState.pointer.x > 100){
                gameState.pointer.x--;
            } else if (gameState.lock1.texture.key == 'lockYellow' && gameState.key1.texture.key == 'keyYellow' &&  gameState.pointer.x == 100){
                gameState.lock1.setTexture('lockWhite');
                clickSound(this);
            }

            if (gameState.key1.texture.key == 'keyYellow' && gameState.lock1.texture.key == 'lockWhite' && gameState.pointer.x < 170){
                gameState.pointer.x++;
            } else if (gameState.lock1.texture.key == 'lockWhite' && gameState.key1.texture.key == 'keyYellow' && gameState.pointer.x == 170){
                gameState.key1.setTexture('keyWhite');
                clickSound(this);
            }

            if (gameState.key1.texture.key == 'keyWhite' && gameState.lock1.texture.key == 'lockWhite' && gameState.pointer.x > 100){
                gameState.pointer.x--;
            } else if (gameState.key1.texture.key == 'keyWhite' && gameState.lock1.texture.key == 'lockWhite' && gameState.pointer.x == 100){
                gameState.lock1.setTexture('lockBlue');
                clickSound(this);
            }

            if (gameState.key1.texture.key == 'keyWhite' && gameState.lock1.texture.key == 'lockBlue' && gameState.pointer.x < 170){
                gameState.pointer.x++;
            }else if (gameState.lock1.texture.key == 'lockBlue' && gameState.key1.texture.key == 'keyWhite' && gameState.pointer.x == 170){
                gameState.key1.setTexture('keyBlue');
                clickSound(this);
                gameState.hint6TopComplete = true;
            }
        }
    }
}