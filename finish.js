class Finish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, colour){
        super(scene, x, y, key).setScale(0.75);

        this.colour = colour;

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
}