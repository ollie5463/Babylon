import Camera from '../Camera';
import { EASY, MEDIUM, HARD } from './MazeGenerator';
import MazeGenerator from './MazeGenerator';
export default class SceneGenerator {
    constructor(engine, cameraSpeed, nameOfCamera, x, y, z) {
        this.engine = engine;
        this.createScene();
        this.createFreeCamera(cameraSpeed, nameOfCamera, x, y, z);
    }

    createScene() {
        this.scene = new BABYLON.Scene(this.engine);
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
    createMaze(difficulty) {
        var args = {};
        args.width = 50;
        args.height = 10000;
        args.scene = this.scene;
        switch (difficulty) {
            case "EASY":
                args.difficulty = EASY;
                this.camera.setCameraSpeed(0.5);
                break;
            case "MEDIUM":
                args.difficulty = MEDIUM;
                this.camera.setCameraSpeed(1);
                break;
            case "HARD":
                args.difficulty = HARD;
                this.camera.setCameraSpeed(1.5);
                break;
        }

        this.maze = new MazeGenerator(args);
    }
}