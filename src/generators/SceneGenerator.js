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
    createBackGround(width, height) {
        let args = {};
        args.width = width;
        args.height = height;
        args.scene = this.scene;
        this.maze = new MazeGenerator(args);
    }
    createMaze(difficulty, width, height) {
        let args = {};
        args.width = width;
        args.height = height;
        args.scene = this.scene;
        args.difficulty = difficulty;
        this.maze = new MazeGenerator(args);

    }
}