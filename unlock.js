class Unlock extends Phaser.GameObjects.Sprite {
    constructor(scene, key, colour){
        super(scene, 650, 180, key);

        this.colour = colour;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setInteractive({draggable: true});
    }
}