const EASY = Symbol("EASY");
const MEDIUM = Symbol("MEDIUM");
const HARD = Symbol("HARD");
var level;
class MazeGenerator {
    constructor(difficulty, width, height) {
        this.createFuturisticGround(width, height);
        this.createBlockMaze(difficulty);
    }

    createBlockMaze(difficulty) {
        var level = this.getBrickSpawningLevel(difficulty);
        for (let gridHeight = 0; gridHeight < 1000; gridHeight += level) {
            for (let gridWidth = -25; gridWidth < 50; gridWidth += 50) {
                var box = BABYLON.Mesh.CreateBox("Box", 4, scene);
                box.scaling.y = 3;
                box.position = new BABYLON.Vector3(gridWidth * Math.random(), 5, gridHeight * Math.random());
            }
        }
    }

    getBrickSpawningLevel(difficulty) {
        var level;
        switch (difficulty) {
            case EASY:
                level = 50;
                break;
            case MEDIUM:
                level = 25;
                break;
            case HARD:
                level = 20;
                break;
        }
        return level;
    }

    createFuturisticGround(width, height) {
        var myGround = BABYLON.MeshBuilder.CreateGround("myGround", { width: width, height: height, subDivisions: 4 }, scene);
        var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
        groundMaterial.emissiveTexture = new BABYLON.Texture("../img/futuristicTexture.jpg", scene);
        groundMaterial.emissiveTexture.uScale = 50;
        groundMaterial.emissiveTexture.vScale = 1000;
        groundMaterial.emissiveTexture.uOffset = 0.25;
        groundMaterial.emissiveTexture.vOffset = 0.5;
        myGround.material = groundMaterial;
    }
}