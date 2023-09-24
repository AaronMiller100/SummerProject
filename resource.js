class Resource extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, amount, colour){
        super(scene, x, y, key);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.amount = amount;
        this.colour = colour;

        this.setInteractive({draggable: true});
    }
}