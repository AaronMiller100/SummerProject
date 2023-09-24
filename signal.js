class Signal extends Phaser.GameObjects.Sprite {
    constructor(scene, key){
        super(scene, 650, 260, key);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setInteractive({draggable: true});
    }
}