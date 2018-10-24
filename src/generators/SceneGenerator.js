class SceneGenerator {
    constructor(engine, cameraSpeed, nameOfCamera, x, y, z) {
        this.engine = engine;
        this.createScene();
        this.createFreeCamera(cameraSpeed, nameOfCamera, x, y, z);
    }

    createScene() {
        this.scene = new BABYLON.Scene(engine);
        this.scene.clearColor = new BABYLON.Color3(0, 0.1, 0.1);
    }

    createFreeCamera(cameraSpeed, nameOfCamera, x, y, z) {
        this.camera = new Camera(cameraSpeed, nameOfCamera, x, y, z, this.scene);
    }
    createMaze(difficulty, width, height) {
        this.maze = new MazeGenerator(difficulty, width, height);
    }
}