function clickSound(scene){
    if (gameState.soundMuted == false){
        let clickSound = scene.sound.add('clickSound');
        clickSound.play();
    }
}

function startSound(scene){
    if (gameState.soundMuted == false){
        let startSound = scene.sound.add('startSound');
        startSound.setVolume(0.5);
        startSound.play();
    }
}

function makeAndSetAudioButtonsInteractive(scene, muteSoundButton, muteMusicButton){
    if (gameState.soundMuted == true){
        muteSoundButton =  scene.add.image(40, 560, 'muteSoundSlash').setScale(0.75);
    } else {
        muteSoundButton =  scene.add.image(40, 560, 'muteSound').setScale(0.75);
    }

    if (gameState.musicMuted == true){
        muteMusicButton = scene.add.image(110, 560, 'muteMusicSlash').setScale(0.75);
    } else {
        muteMusicButton = scene.add.image(110, 560, 'muteMusic').setScale(0.75);
    }  

    muteSoundButton.setInteractive();
    muteSoundButton.on('pointerover', function(){
        muteSoundButton.setTint(0x808080);
    })
    muteSoundButton.on('pointerout', function(){
        muteSoundButton.setTint(0xffffff);
    })
    muteSoundButton.on('pointerup', function(){
        if (gameState.soundMuted == false){
            gameState.soundMuted = true;
            muteSoundButton.setTexture('muteSoundSlash');
        } else {
            gameState.soundMuted = false;
            clickSound(scene);
            muteSoundButton.setTexture('muteSound');
        }
    })

    muteMusicButton.setInteractive();
    muteMusicButton.on('pointerover', function(){
        muteMusicButton.setTint(0x808080);
    })
    muteMusicButton.on('pointerout', function(){
        muteMusicButton.setTint(0xffffff);
    })
    muteMusicButton.on('pointerup', function(){
        if (gameState.musicMuted == false){
            muteMusicButton.setTexture('muteMusicSlash');
            gameState.musicMuted = true;
        } else {
            gameState.musicMuted = false;
            muteMusicButton.setTexture('muteMusic');
        }
        clickSound(scene);
    })
}

function setBackButtonInteractive(backButton, levelToStop, scene){
    backButton.setInteractive();
    backButton.on('pointerover', function(){
        backButton.setTint(0x808080);
    })
    backButton.on('pointerout', function(){
        backButton.setTint(0xffffff);
    })
    backButton.on('pointerup', function(){
        gameState.levelStarted = false;
        clickSound(scene);
        game.scene.stop(levelToStop);
        game.scene.start('mainMenu');
    })
}

function setRestartButtonInteractive(button, levelToRestart, scene){
    button.setInteractive();
    button.on('pointerover', function(){
        button.setTint(0xebba34);
    });
    button.on('pointerout', function(){
        button.setTint(0xffffff);
    });
    button.on('pointerup', function(){
        gameState.levelStarted = false;
        clickSound(scene);
        game.scene.stop(levelToRestart);
        game.scene.start(levelToRestart);
    });
}

function setNextLevelButtonInteractive(button, thisScene, sceneToStart, scene){
    button.setInteractive();
    button.on('pointerover', function(){
        button.setTint(0x009933);
    });
    button.on('pointerout', function(){
        button.setTint(0xffffff);
    });
    button.on('pointerup', function(){
        gameState.levelStarted = false;
        clickSound(scene);
        game.scene.stop(thisScene);
        game.scene.start(sceneToStart);
    });
}

function setPlusButtonInteractive (button, scene){
    button.setInteractive();
    button.on('pointerover', function(){
        button.setTint(0x808080);
    })
    button.on('pointerout', function(){
        button.setTint(0xffffff);
    })
    button.on('pointerup', function(){
        if (gameState.semaphoreValue < 9){
            gameState.semaphoreValue++;
        }
        clickSound(scene);
    })
}

function setMinusButtonInteractive (button, scene){
    button.setInteractive();
    button.on('pointerover', function(){
        button.setTint(0x808080);
    })
    button.on('pointerout', function(){
        button.setTint(0xffffff);
    })
    button.on('pointerup', function(){
        if (gameState.semaphoreValue > 0){
            gameState.semaphoreValue--;
        }
        clickSound(scene);
    })
}

function positionXOnMap(x){
    if (x >= 6 && x <= 55){
        return 1;
    } else if (x >= 56 && x <= 105){
        return 2;
    } else if (x >= 106 && x <= 155){
        return 3;
    } else if (x >= 156 && x <= 205){
        return 4;
    } else if (x >= 206 && x <= 256){
        return 5;
    } else if (x >= 256 && x <= 305){
        return 6;
    } else if (x >= 306 && x <= 355){
        return 7;
    } else if (x >= 356 && x <= 405){
        return 8;
    } else if (x >= 406 && x <= 455){
        return 9;
    } else if (x >= 456 && x <= 505){
        return 10;
    } else if (x >= 506 && x <= 555){
        return 11;
    } else if (x >= 556 && x <= 605){
        return 12;
    } else {
        return null;
    }
}

function positionYOnMap(y){
    if (y >= 72 && y <= 121){
        return 1;
    } else if (y >= 122 && y <= 171){
        return 2;
    } else if (y >= 172 && y <= 221){
        return 3;
    } else if (y >= 222 && y <= 271){
        return 4;
    } else if (y >= 272 && y <= 321){
        return 5;
    } else if (y >= 322 && y <= 371){
        return 6;
    } else if (y >= 372 && y <= 421){
        return 7;
    } else if (y >= 422 && y <= 471){
        return 8;
    } else if (y >= 472 && y <= 521){
        return 9;
    } else {
        return null;
    }
}

function getXOnTilemap(x){
    return 6+(50*x)-25;
}

function getYOnTilemap(y){
    return 72+(50*y)-25;
}

function lockLogic(button, finishes, resources, trucks, scene){
    button.on('pointerup', function(pointer){
        if (pointer.rightButtonReleased()){
            clickSound(scene);
            if (button.texture.key == 'lockBlue' || button.texture.key == 'unlockBlue'){
                if(button.x == 650 && button.y == 100){
                    gameState.locks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 100){
                            button.setTexture('lockRed');
                            button.colour = 'red';
                        }
                    })
                } else {
                    button.setTexture('lockRed');
                    button.colour = 'red';
                }
            } else if (button.texture.key == 'lockRed' || button.texture.key == 'unlockRed'){
                if(button.x == 650 && button.y == 100){
                    gameState.locks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 100){
                            button.setTexture('lockGreen');
                            button.colour = 'green';
                        }
                    })
                } else {
                    button.setTexture('lockGreen');
                    button.colour = 'green';
                }
            } else if (button.texture.key == 'lockGreen' || button.texture.key == 'unlockGreen'){
                if(button.x == 650 && button.y == 100){
                    gameState.locks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 100){
                            button.setTexture('lockYellow');
                            button.colour = 'yellow';
                        }
                    })
                } else {
                    button.setTexture('lockYellow');
                    button.colour = 'yellow';
                }
            } else if (button.texture.key == 'lockYellow' || button.texture.key == 'unlockYellow'){
                if(button.x == 650 && button.y == 100){
                    gameState.locks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 100){
                            button.setTexture('lockWhite');
                            button.colour = 'white';
                        }
                    })
                } else {
                    button.setTexture('lockWhite');
                    button.colour = 'white';
                }
            } else if (button.texture.key == 'lockWhite' || button.texture.key == 'unlockWhite'){
                if(button.x == 650 && button.y == 100){
                    gameState.locks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 100){
                            button.setTexture('lockBlue');
                            button.colour = 'blue';
                        }
                    })
                } else {
                    button.setTexture('lockBlue');
                    button.colour = 'blue';
                }
            }
        }
    });
    button.on('dragstart', function(){
        dragging = true;button.alpha = 0.5;
    });
    button.on('drag', function(pointer){
        button.x = pointer.x;
        button.y = pointer.y;
    });
    button.on('dragend', function(pointer){
        button.alpha = 1;
        let XPositionOnTileMap = positionXOnMap(pointer.x);
        let YPositionOntileMap = positionYOnMap(pointer.y);

        let filledXAndYCords = [];
        finishes.getChildren().forEach(function(finish){
            filledXAndYCords.push([finish.x, finish.y]);
        });
        resources.getChildren().forEach(function(resource){
            filledXAndYCords.push([resource.x, resource.y]);
        });
        trucks.getChildren().forEach(function (truck){
            filledXAndYCords.push([truck.x, truck.y]);
        });    

        let tileFree = false;
        filledXAndYCords.forEach(function(coord){
            if(XPositionOnTileMap == null || YPositionOntileMap == null || (XPositionOnTileMap == positionXOnMap(coord[0]) && YPositionOntileMap == positionYOnMap(coord[1]))){
                tileFree = true;
            }
        });

        if (tileFree == false){
            button.x = getXOnTilemap(XPositionOnTileMap);
            button.y = getYOnTilemap(YPositionOntileMap);
            button.setScale(0.75);
        } else {            
            button.x = 650;
            button.y = 100;
            button.setScale(1);
            if (button.colour == 'blue'){
                button.setTexture('lockBlue');
            } else if (button.colour == 'red'){
                button.setTexture('lockRed');
            } else if (button.colour == 'green'){
                button.setTexture('lockGreen');
            } else if (button.colour == 'yellow'){
                button.setTexture('lockYellow');
            } else if (button.colour == 'white'){
                button.setTexture('lockBlue');
            }
        }
    });
}

function unlockLogic(button, finishes, resources, trucks, scene){
    button.on('pointerup', function(pointer){
        if (pointer.rightButtonReleased()){
            clickSound(scene);
            if (button.texture.key == 'keyBlue'){
                if(button.x == 650 && button.y == 180){
                    gameState.unlocks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 180){
                            button.setTexture('keyRed');
                            button.colour = 'red';
                        }
                    })
                } else {
                    button.setTexture('keyRed');
                    button.colour = 'red';
                }
            } else if (button.texture.key == 'keyRed'){
                if(button.x == 650 && button.y == 180){
                    gameState.unlocks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 180){
                            button.setTexture('keyGreen');
                            button.colour = 'green';
                        }
                    })
                } else {
                    button.setTexture('keyGreen');
                    button.colour = 'green';
            }
            } else if (button.texture.key == 'keyGreen'){
                if(button.x == 650 && button.y == 180){
                    gameState.unlocks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 180){
                            button.setTexture('keyYellow');
                            button.colour = 'yellow';
                        }
                    })
                } else {
                    button.setTexture('keyYellow');
                    button.colour = 'yellow';
                }
            } else if (button.texture.key == 'keyYellow'){
                if(button.x == 650 && button.y == 180){
                    gameState.unlocks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 180){
                            button.setTexture('keyWhite');
                            button.colour = 'white';
                        }
                    })
                } else {
                    button.setTexture('keyWhite');
                    button.colour = 'white';
                }
            } else if (button.texture.key == 'keyWhite'){
                if(button.x == 650 && button.y == 180){
                    gameState.unlocks.getChildren().forEach(function(button){
                        if (button.x == 650 && button.y == 180){
                            button.setTexture('keyBlue');
                            button.colour = 'blue';
                        }
                    })
                } else {
                    button.setTexture('keyBlue');
                    button.colour = 'blue';
                }
            }
        }
    });
    button.on('dragstart', function(){
        button.alpha = 0.5;
    });
    button.on('drag', function(pointer){
        button.x = pointer.x;
        button.y = pointer.y;
    });
    button.on('dragend', function(pointer){
        button.alpha = 1;
        let XPositionOnTileMap = positionXOnMap(pointer.x);
        let YPositionOntileMap = positionYOnMap(pointer.y);    
        
        let filledXAndYCords = [];
        finishes.getChildren().forEach(function(finish){
            filledXAndYCords.push([finish.x, finish.y]);
        });
        resources.getChildren().forEach(function(resource){
            filledXAndYCords.push([resource.x, resource.y]);
        });
        trucks.getChildren().forEach(function (truck){
            filledXAndYCords.push([truck.x, truck.y]);
        });    

        let tileFree = false;
        filledXAndYCords.forEach(function(coord){
            if(XPositionOnTileMap == null || YPositionOntileMap == null || (XPositionOnTileMap == positionXOnMap(coord[0]) && YPositionOntileMap == positionYOnMap(coord[1]))){
                tileFree = true;
            }
        });

        if (tileFree == false){
            button.x = getXOnTilemap(XPositionOnTileMap);
            button.y = getYOnTilemap(YPositionOntileMap);
            button.setScale(0.75);
        } else {            
            button.x = 650;
            button.y = 180;
            button.setScale(1);
        }        
    });     
}

function signalLogic(button, finishes, resources, trucks){
    button.on('dragstart', function(){
        button.alpha = 0.5;
    });
    button.on('drag', function(pointer){
        button.x = pointer.x;
        button.y = pointer.y;
    });
    button.on('dragend', function(pointer){
        button.alpha = 1;
        let XPositionOnTileMap = positionXOnMap(pointer.x);
        let YPositionOntileMap = positionYOnMap(pointer.y);    
        
        let filledXAndYCords = [];
        finishes.getChildren().forEach(function(finish){
            filledXAndYCords.push([finish.x, finish.y]);
        });
        resources.getChildren().forEach(function(resource){
            filledXAndYCords.push([resource.x, resource.y]);
        });
        trucks.getChildren().forEach(function (truck){
            filledXAndYCords.push([truck.x, truck.y]);
        });    

        let tileFree = false;
        filledXAndYCords.forEach(function(coord){
            if(XPositionOnTileMap == null || YPositionOntileMap == null || (XPositionOnTileMap == positionXOnMap(coord[0]) && YPositionOntileMap == positionYOnMap(coord[1]))){
                tileFree = true;
            }
        });

        if (tileFree == false){
            button.x = getXOnTilemap(XPositionOnTileMap);
            button.y = getYOnTilemap(YPositionOntileMap);
            button.setScale(0.75);
        } else {            
            button.x = 650;
            button.y = 260;
            button.setScale(1);
        }        
    });     
}

function waitLogic(button, finishes, resources, trucks){    
    button.on('dragstart', function(){
        button.alpha = 0.5;
    });
    button.on('drag', function(pointer){
        button.x = pointer.x;
        button.y = pointer.y;
    });
    button.on('dragend', function(pointer){
        button.alpha = 1;
        let XPositionOnTileMap = positionXOnMap(pointer.x);
        let YPositionOntileMap = positionYOnMap(pointer.y);    
        
        let filledXAndYCords = [];
        finishes.getChildren().forEach(function(finish){
            filledXAndYCords.push([finish.x, finish.y]);
        });
        resources.getChildren().forEach(function(resource){
            filledXAndYCords.push([resource.x, resource.y]);
        });
        trucks.getChildren().forEach(function (truck){
            filledXAndYCords.push([truck.x, truck.y]);
        });    

        let tileFree = false;
        filledXAndYCords.forEach(function(coord){
            if(XPositionOnTileMap == null || YPositionOntileMap == null || (XPositionOnTileMap == positionXOnMap(coord[0]) && YPositionOntileMap == positionYOnMap(coord[1]))){
                tileFree = true;
            }
        });

        if (tileFree == false){
            button.x = getXOnTilemap(XPositionOnTileMap);
            button.y = getYOnTilemap(YPositionOntileMap);
            button.setScale(0.75);
        } else {            
            button.x = 650;
            button.y = 340;
            button.setScale(1);
        }        
    });     
}

function truckMovement(truck){
    if (truck.direction == 'truckup'){
        if (truck.y > getYOnTilemap(truck.maxDistance)){
            truck.y = truck.y-Phaser.Math.Between(1, 5);
        } else if (truck.y <= getYOnTilemap(truck.maxDistance)){
            truck.finished = true;   
            truck.isMoving = false;
        }
    } else if (truck.direction == 'truckdown'){
        if (truck.y < getYOnTilemap(truck.maxDistance)){
            truck.y = truck.y+Phaser.Math.Between(1, 5);
        } else if (truck.y >= getYOnTilemap(truck.maxDistance)){
            truck.finished = true;
            truck.isMoving = false;
        }
    } else if (truck.direction == 'truckleft'){
        if (truck.x > getXOnTilemap(truck.maxDistance)){
            truck.x = truck.x-Phaser.Math.Between(1, 5);
        }  else if (truck.x <= getXOnTilemap(truck.maxDistance)){
            truck.finished = true; 
            truck.isMoving = false;
        }
    } else if (truck.direction == 'truckright') {
        if (truck.x < getXOnTilemap(truck.maxDistance)){
            truck.x = truck.x+Phaser.Math.Between(1, 5);
        } else if (truck.x >= getXOnTilemap(truck.maxDistance)){
            truck.finished = true;
            truck.isMoving = false;
        }
    }
}

function refresh(){
    gameState.trucks.getChildren().forEach(function (truck){
        truck.resourceNumber = 0;
        truck.isMoving = true;
        truck.blueLockHitFirst = false;
        truck.yellowLockHitFirst = false;
        truck.redLockHitFirst = false;
        truck.greenLockHitFirst = false;
        truck.whiteLockHitFirst = false;
        truck.finished = false;     
        truck.isRedLocked = false;
        truck.isGreenLocked = false;
        truck.isYellowLocked = false;
        truck.isWhiteLocked = false;
        truck.isBlueLocked = false;
        truck.hasHitWait = false;
        truck.hasHitSignal = false;
        truck.hitSignalFirst = false;
        truck.stoppedMovingStarttime = null;
        truck.stoppedMovingEndtime = null;
        truck.timeNotMoving = 0;
        truck.throughputCalculated = false;
    });

    gameState.packagesDelivered = 0;
    gameState.levelStarted = false;
    gameState.levelComplete = false;
    gameState.blueFirstHit = false;
    gameState.redFirstHit = false;
    gameState.greenFirstHit = false;
    gameState.yellowFirstHit = false;
    gameState.whiteFirstHit = false;
    gameState.blueLocked = false;
    gameState.redLocked = false;
    gameState.yellowLocked = false;
    gameState.greenLocked = false;
    gameState.whiteLocked = false;
    gameState.semaphoreValue = 1;
    gameState.overallThroughput = 0;
    gameState.endTime = null;
    gameState.startTime = null;
}

function truckFinishCollisionLogic(truck, finish, numberOfpackagesToDeliver){
    if (gameState.levelStarted == true && truck.finished == false){
        if (finish.colour == 'blue'){
            if (truck.blueResourceNumber >= truck.maxLoad){
                gameState.blueResourceAmount+=truck.blueResourceNumber;
                gameState.packagesDelivered+=truck.blueResourceNumber;
                truck.resourceNumber-=truck.redResourceNumber;
                truck.blueResourceNumber-=truck.blueResourceNumber;
                gameState.blueFirstHit = false;
                gameState.redFirstHit = false;
                gameState.greenFirstHit = false;
                gameState.yellowFirstHit = false;
                gameState.whiteFirstHit = false;
            }
        } else if (finish.colour == 'red'){
            if (truck.redResourceNumber >= truck.maxLoad){
                gameState.redResourceAmount+=truck.redResourceNumber;
                gameState.packagesDelivered+=truck.redResourceNumber;
                truck.resourceNumber-=truck.redResourceNumber;
                truck.redResourceNumber-=truck.redResourceNumber;
                gameState.blueFirstHit = false;
                gameState.redFirstHit = false;
                gameState.greenFirstHit = false;
                gameState.yellowFirstHit = false;
                gameState.whiteFirstHit = false;
            }
        } else if (finish.colour == 'green'){
            if (truck.greenResourceNumber >= truck.maxLoad){
                gameState.greenResourceAmount+=truck.greenResourceNumber;
                gameState.packagesDelivered+=truck.greenResourceNumber;
                truck.resourceNumber-=truck.greenResourceNumber;
                truck.greenResourceNumber-=truck.greenResourceNumber;
                gameState.blueFirstHit = false;
                gameState.redFirstHit = false;
                gameState.greenFirstHit = false;
                gameState.yellowFirstHit = false;
                gameState.whiteFirstHit = false;
            }
        } else if (finish.colour == 'yellow'){
            if (truck.yellowResourceNumber >= truck.maxLoad){
                gameState.yellowResourceAmount+=truck.yellowResourceNumber;
                gameState.packagesDelivered+=truck.yellowResourceNumber;
                truck.resourceNumber-=truck.yellowResourceNumber;
                truck.yellowResourceNumber-=truck.yellowResourceNumber;
                gameState.blueFirstHit = false;
                gameState.redFirstHit = false;
                gameState.greenFirstHit = false;
                gameState.yellowFirstHit = false;
                gameState.whiteFirstHit = false;
            }
        } else if (finish.colour == 'white'){
            if (truck.whiteResourceNumber >= truck.maxLoad){
                gameState.whiteResourceAmount+=truck.whiteResourceNumber;
                gameState.packagesDelivered+=truck.whiteResourceNumber;
                truck.resourceNumber-=truck.whiteResourceNumber;
                truck.whiteResourceNumber-=truck.whiteResourceNumber;
                gameState.blueFirstHit = false;
                gameState.redFirstHit = false;
                gameState.greenFirstHit = false;
                gameState.yellowFirstHit = false;
                gameState.whiteFirstHit = false;
            }
        }

        if (gameState.packagesDelivered == numberOfpackagesToDeliver){
            if (gameState.endTime == null){
                gameState.endTime = new Date();
            }
            gameState.levelComplete = true;
        };
    }
}

function truckResourceOverlap(truck, resource){
    if (truck.hasHitResource.every(truckResouce => truckResouce != resource)){
        if (gameState.levelStarted == true && truck.finished == false){    
            if (truck.blueResourceNumber < truck.maxLoad && resource.colour == 'blue'){
                gameState.blueResourceAmount--;
                truck.resourceNumber++;
                truck.blueResourceNumber++;
            } else if (truck.redResourceNumber < truck.maxLoad && resource.colour == 'red'){
                gameState.redResourceAmount--;
                truck.resourceNumber++;
                truck.redResourceNumber++;
            } else if (truck.greenResourceNumber < truck.maxLoad && resource.colour == 'green'){
                gameState.greenResourceAmount--;
                truck.resourceNumber++;
                truck.greenResourceNumber++;
            } else if (truck.yellowResourceNumber < truck.maxLoad && resource.colour == 'yellow'){
                gameState.yellowResourceAmount--;
                truck.resourceNumber++;
                truck.yellowResourceNumber++;
            } else if (truck.whiteResourceNumber < truck.maxLoad && resource.colour == 'white'){
                gameState.whiteResourceAmount--;
                truck.resourceNumber++;
                truck.whiteResourceNumber++;
            }
        }
    }

    truck.hasHitResource.push(resource);
}

function truckLockOverlap(truck, lock){
    if (gameState.levelStarted == true && truck.finished == false){
        if (lock.colour == 'blue'){
            if (gameState.blueFirstHit == false && gameState.blueLocked == false){
                truck.blueLockHitFirst = true;
                gameState.blueFirstHit = true;
                gameState.blueLocked = true;
            }
            if (truck.isBlueLocked == true){
                truck.isMoving = false;
            }
            gameState.trucks.getChildren().forEach(function (truck){
            if (truck.blueLockHitFirst == false){
                truck.isBlueLocked = true;
            }});
        } else if (lock.colour == 'red'){
            if (gameState.redFirstHit == false && gameState.redLocked == false){
                truck.redLockHitFirst = true;
                gameState.redFirstHit = true;
                gameState.redLocked = true;
            }
            if (truck.isRedLocked == true){
                truck.isMoving = false;
            }
            gameState.trucks.getChildren().forEach(function (truck){
            if (truck.redLockHitFirst == false){
                truck.isRedLocked = true;
            }});
        } else if (lock.colour == 'green'){
            if (gameState.greenFirstHit == false && gameState.greenLocked == false){
                truck.greenLockHitFirst = true;
                gameState.greenFirstHit = true;
                gameState.greenLocked = true;
            }
            if (truck.isGreenLocked == true){
                truck.isMoving = false;
            }
            gameState.trucks.getChildren().forEach(function (truck){
            if (truck.greenLockHitFirst == false){
                truck.isGreenLocked = true;
            }});
        } else if (lock.colour == 'yellow'){
            if (gameState.yellowFirstHit == false && gameState.yellowLocked == false){
                truck.yellowLockHitFirst = true;
                gameState.yellowFirstHit = true;
                gameState.yellowLocked = true;
            }
            if (truck.isYellowLocked == true){
                truck.isMoving = false;
            }
            gameState.trucks.getChildren().forEach(function (truck){
            if (truck.yellowLockHitFirst == false){
                truck.isYellowLocked = true;
            }});
        } else if (lock.colour == 'white'){
            if (gameState.whiteFirstHit == false && gameState.whiteLocked == false){
                truck.whiteLockHitFirst = true;
                gameState.whiteFirstHit = true;
                gameState.whiteLocked = true;
            }
            if (truck.isWhiteLocked == true){
                truck.isMoving = false;
            }
            gameState.trucks.getChildren().forEach(function (truck){
            if (truck.whiteLockHitFirst == false){
                truck.isWhiteLocked = true;
            }});
        }

    }
}

function truckUnlockLogic(truck, unlock){
    if (gameState.levelStarted == true && truck.finished == false){
        if (unlock.colour == 'blue' && truck.blueUnlockHitFirst == false){
            truck.blueUnlockHitFirst = true;
            gameState.blueLocked = false;
            gameState.blueFirstHit = false;
            gameState.trucks.getChildren().forEach(function (truck){  
                truck.isBlueLocked = false;
                truck.isMoving = true;
            });
        } else if (unlock.colour == 'red' && truck.redUnlockHitFirst == false){
            truck.redUnlockHitFirst = true;
            gameState.redLocked = false;
            gameState.redFirstHit = false;
            gameState.trucks.getChildren().forEach(function (truck){  
                truck.isRedLocked = false;
                truck.isMoving = true;
            });
        } else if (unlock.colour == 'green' && truck.greenUnlockHitFirst == false){
            truck.greenUnlockHitFirst = true;
            gameState.greenLocked = false;
            gameState.greenFirstHit = false;
            gameState.trucks.getChildren().forEach(function (truck){  
                truck.isGreenLocked = false;
                truck.isMoving = true;
            });
        } else if (unlock.colour == 'yellow' && truck.yellowUnlockHitFirst == false){
            truck.yellowUnlockHitFirst = true;
            gameState.yellowLocked = false;
            gameState.yellowFirstHit = false;
            gameState.trucks.getChildren().forEach(function (truck){  
                truck.isYellowLocked = false;
                truck.isMoving = true;
            });
        } else if (unlock.colour == 'white' && truck.whiteUnlockHitFirst == false){
            truck.whiteUnlockHitFirst = true;
            gameState.whiteLocked = false;
            gameState.whiteFirstHit = false;
            gameState.trucks.getChildren().forEach(function (truck){  
                truck.isWhiteLocked = false;
                truck.isMoving = true;
            });
        }
    }
}

function truckWaitCollisionLogic(truck, wait){
    // if semaphore value is greater than 1, decrease value
    // if it is not greater than 1, wait
    if (gameState.levelStarted == true && truck.finished == false){
        if (gameState.semaphoreValue > 0 && truck.hasHitWait == false){
            gameState.semaphoreValue--;
            truck.hasHitWait = true;
            truck.hitSignalFirst = true;
            truck.isMoving = true;
        } else if (gameState.semaphoreValue == 0 && truck.hitSignalFirst == false) {
            truck.isMoving = false;
        }
    }
}

function truckSignalCollisionLogic(truck, signal){
    // increase the seamphore value by 1
    if (truck.hasHitSignal == false && gameState.levelStarted == true && truck.finished == false){
        gameState.semaphoreValue++;
        truck.hasHitSignal = true;
    }
}

function setStartButtonInteractive(startButton, scene){
    startButton.setInteractive();
    startButton.on('pointerover', function(){
        startButton.setTint(0x009933);
    });
    startButton.on('pointerup', function(){
        startSound(scene);    
        gameState.levelStarted = true;
        gameState.startTime = new Date();
        gameState.trucks.getChildren().forEach(function (truck){
            truck.isMoving = true;
        });      
    });
    startButton.on('pointerout', function(){
        startButton.setTint(0xffffff);
    });
}

function setClearButtonInteractive(clearButton, scene){
    clearButton.setInteractive();
    clearButton.on('pointerover', function(){
        clearButton.setTint(0xADD8E6);
    });
    clearButton.on('pointerup', function(){   
        // all buttons go back to side and return to blue
        clickSound(scene);
        gameState.locks.getChildren().forEach(function (lock){
            lock.x = 650;
            lock.y = 100;
            lock.setTexture('lockBlue');
            lock.setScale(1);
            lock.colour = 'blue'; 
        });
        gameState.unlocks.getChildren().forEach(function (unlock){
            unlock.x = 650;
            unlock.y = 180;
            unlock.setTexture('keyBlue');
            unlock.setScale(1);
            unlock.colour = 'blue';
        });
        gameState.waits.getChildren().forEach(function (wait){
            wait.x = 650;
            wait.y = 340;
            wait.setScale(1);
        });
        gameState.signals.getChildren().forEach(function(signal){
            signal.x = 650;
            signal.y = 260;
            signal.setScale(1);
        });
    });
    clearButton.on('pointerout', function(){
        clearButton.setTint(0xffffff);
    });
}

function unlockToLock(){
    if (gameState.blueLocked){
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "blue"){
                lock.setTexture("lockBlue");
            }
        })
    } else {
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "blue" && lock.x != 650 && lock.y != 100){
                lock.setTexture("unlockBlue");
            }
        })
    }

    if (gameState.redLocked){
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "red"){
                lock.setTexture("lockRed");
            }
        })
    } else {
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "red" && lock.x != 650 && lock.y != 100){
                lock.setTexture("unlockRed");
            }
        })
    }

    if (gameState.greenLocked){
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "green"){
                lock.setTexture("lockGreen");
            }
        })
    } else {
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "green" && lock.x != 650 && lock.y != 100){
                lock.setTexture("unlockGreen");
            }
        })
    }

    if (gameState.yellowLocked){
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "yellow"){
                lock.setTexture("lockYellow");
            }
        })
    } else {
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "yellow" && lock.x != 650 && lock.y != 100){
                lock.setTexture("unlockYellow");
            }
        })
    }

    if (gameState.whiteLocked){
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "white"){
                lock.setTexture("lockWhite");
            }
        })
    } else {
        gameState.locks.getChildren().forEach(function (lock){
            if(lock.colour == "white" && lock.x != 650 && lock.y != 100){
                lock.setTexture("unlockWhite");
            }
        })
    }
}

function levelStartedLogic(scene, currentLevel, nextLevel, levelNumber){
    unlockToLock();

    if (gameState.levelStarted == true){
        gameState.locks.getChildren().forEach(function(myLock){
            myLock.disableInteractive();
        });
        gameState.unlocks.getChildren().forEach(function(myUnlock){
            myUnlock.disableInteractive();
        });
        gameState.trucks.getChildren().forEach(function (truck){  
            if (truck.isMoving == true){
                truckMovement(truck); 
        }});
    }    
    
    if (gameState.levelStarted == true && gameState.levelComplete == false){
        let allCarsMovingArray = [];
        gameState.trucks.getChildren().forEach(function(truck){
            if (truck.isMoving == false){
                allCarsMovingArray.push(false);
            } else {
                allCarsMovingArray.push(true);
            }
        });
        
        if (allCarsMovingArray.every(value => value == false)){
            gameState.levelStarted = false;
            refresh();
            scene.add.rectangle(400, 300, 605, 405, 0x000000);
            scene.add.rectangle(400, 300, 600, 400, 0x6666ff);
            scene.add.text(360, 200, 'Unlucky!');
            scene.add.text(250, 225, 'All trucks have stopped moving.');
            scene.add.text(260, 250, 'click retry to start again.');
            let lossRestartSprite = scene.add.sprite(400, 375, 'restart');
            setRestartButtonInteractive(lossRestartSprite, currentLevel, scene);
            gameState.trucks.getChildren().forEach(function (truck){
                truck.depth = 0;
            });
        }
    }        
    

    if((gameState.blueResourceAmount < 0 || gameState.redResourceAmount < 0 || gameState.yellowResourceAmount < 0 || gameState.blueResourceAmount < 0 || gameState.whiteResourceAmount < 0) 
        && gameState.levelComplete == false && gameState.levelStarted == true){
        gameState.levelStarted = false;
        refresh();
        scene.add.rectangle(400, 300, 605, 405, 0x000000);
        scene.add.rectangle(400, 300, 600, 400, 0x6666ff);
        scene.add.text(360, 200, 'Unlucky!');
        scene.add.text(130, 225, 'The depot wasn\'t able to provide a resource to the truck.');
        scene.add.text(260, 250, 'click retry to start again.');
        let lossRestartSprite = scene.add.sprite(400, 375, 'restart');
        setRestartButtonInteractive(lossRestartSprite, currentLevel, scene);
        gameState.trucks.getChildren().forEach(function (truck){
            truck.depth = 0;
        });
    }

    if(gameState.levelComplete == true){
        gameState.levelComplete = false;
        gameState.levelStarted = false;
        gameState.levelsCompleted[levelNumber-1] = true;
        refresh();
        scene.add.rectangle(400, 300, 605, 405, 0x000000);
        scene.add.rectangle(400, 300, 600, 400, 0x6666ff);
        scene.add.text(360, 200, 'Nice Job!');
        scene.add.text(130, 225, 'The trucks delivered all their packages successfully.');
        let nextlevelSprite = scene.add.sprite(400, 375, 'nextlevel');
        setNextLevelButtonInteractive(nextlevelSprite, currentLevel, nextLevel, scene);
        gameState.trucks.getChildren().forEach(function (truck){
            truck.depth = 0;
        });
    }
}

function workOutThroughPut(){
    let overallTime = 0;
    if (gameState.levelComplete == true){
        overallTime = gameState.endTime - gameState.startTime;
    } else {
        overallTime = new Date() - gameState.startTime;
    } 

    gameState.overallThroughput = 0;
    
    gameState.trucks.getChildren().forEach(function (truck){
        // deals with trucks that are stopped but haven't started yet so to allow for real-time readings of throughput
        if (truck.stoppedMovingStarttime != null && truck.stoppedMovingEndtime == null && truck.throughputCalculated == false){
            truck.timeNotMoving = new Date() - truck.stoppedMovingStarttime;
            truck.throughput = (truck.timeNotMoving)/overallTime;
            gameState.overallThroughput = gameState.overallThroughput + truck.throughput;
        } else 

        // deals with trucks that have started moving again after stopping moving
        if (truck.stoppedMovingStarttime != null && truck.stoppedMovingEndtime != null && truck.throughputCalculated == false){            
            truck.timeNotMoving = truck.stoppedMovingEndtime - truck.stoppedMovingStarttime;
            truck.throughput = (truck.timeNotMoving)/overallTime;
            gameState.overallThroughput = gameState.overallThroughput + truck.throughput;
        } else

        // deals with trucks that finish without stops
        if (truck.throughputCalculated == false && truck.finished == true && truck.stoppedMovingStarttime == null && truck.stoppedMovingEndtime == null){
            truck.throughputCalculated = true;
            truck.throughput = 1;
            gameState.overallThroughput = gameState.overallThroughput + truck.throughput;
        }
    });

    let returnValue = gameState.overallThroughput/gameState.trucks.getChildren().length;    

    returnValue = Math.abs(returnValue-1);
    return Math.round(returnValue*100);
}

