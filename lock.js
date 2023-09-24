class Lock extends Phaser.GameObjects.Sprite {
    constructor(scene, key, colour){
        super(scene, 650, 100, key);

        this.colour = colour;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setInteractive({draggable: true});
    }
}