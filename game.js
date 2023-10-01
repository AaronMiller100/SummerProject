var gameState = {
    soundMuted: false,
    musicMuted: false, // REMEMBER TO CHANGE TO FALSE
    audioSceneCreated: false,
    levelsCompleted: [false, false, false, false, false, false, false, false, false, false], // REMEMBER TO HAVE THIS NOT COMMENTED 
    // levelsCompleted: [true, true, true, true, true, true, true, true, true, true],   
    levelStarted: false,
    levelJustStarted: false,
    levelFailed: false,
    levelComplete: false,
    blueFirstHit: false,
    redFirstHit: false,
    greenFirstHit: false,
    yellowFirstHit: false,
    whiteFirstHit: false,
    blueLocked: false,
    redLocked: false,
    greenLocked: false,
    yellowLocked: false,
    whiteLocked: false,
    waitForSignal: false,
    packagesDelivered: 0,
    ResourceAmount: 0,
    blueResourceAmount: 0,
    redResourceAmount: 0,
    whiteResourceAmount: 0,
    greenResourceAmount: 0,
    yellowResourceAmount: 0,
    semaphoreValue: 1,
    startTime: null,
    endTime: null,
    overallThroughput: 0,
    signalAndWaitUnlocked: false // REMEMBER TO CHANGE TO FALSE AS IT SHOULD ONLY BE TRUE AFTER STARTING LEVEL 4
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    audio: {
        disableWebAudio: false
    },
    parent: ["project"],
    scene: [mainMenu, audioScene, levelSelect, level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, gameComplete, hint1, hint2, hint3, hint4, hint5, hint6],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0},
            debug: false
        }
    }
};

var game = new Phaser.Game(config);
