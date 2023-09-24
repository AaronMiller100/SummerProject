class Truck extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, direction, maxLoad, maxDistance){
        super(scene, x, y, direction);

        this.maxLoad = maxLoad;
        this.direction = direction;
        this.maxDistance = maxDistance;
        this.resourceNumber = 0;
        this.blueResourceNumber = 0;
        this.redResourceNumber = 0
        this.greenResourceNumber = 0;
        this.yellowResourceNumber = 0;
        this.whiteResourceNumber = 0;
        this.isMoving = true;
        this.isBlueLocked = false;
        this.isRedLocked = false;
        this.isGreenLocked = false;
        this.isYellowLocked = false;
        this.isWhiteLocked = false;
        this.blueLockHitFirst = false;
        this.yellowLockHitFirst = false;
        this.redLockHitFirst = false;
        this.greenLockHitFirst = false;
        this.whiteLockHitFirst = false;
        this.blueUnlockHitFirst = false;
        this.yellowUnlockHitFirst = false;
        this.redUnlockHitFirst = false;
        this.greenUnlockHitFirst = false;
        this.whiteUnlockHitFirst = false;
        this.finished = false;

        this.initialX = x;
        this.initialY = y;
        
        this.stoppedMovingStarttime = null;
        this.stoppedMovingEndtime = null;
        this.timeNotMoving = 0;
        this.throughput = 1;
        this.throughputCalculated = false;

        this.hasHitResource = [new Resource(scene, 1000, 1000, 'resourceBlue')];

        this.hasHitWait = false;
        this.hasHitSignal = false;
        this.hitSignalFirst = false;

        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.world.enableBody(this);
    }
}