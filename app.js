import * as BABYLON from 'babylonjs';
import * as BABYLONGUI from 'babylonjs-gui';
import SceneGenerator from './src/generators/SceneGenerator';
import Screen from './src/UI/Screen.js';
import { EASY, MEDIUM, HARD } from './src//generators/MazeGenerator';
import { HOMESCREEN } from './src/UI/Screen';
import Score from './src/UI/Score';
import PubSub from 'pubsub-js';

var engine;
var canvas;
var score = false;
window.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById("canvas");
    engine = new BABYLON.Engine(canvas, true);
    var scene1 = createDefualtScene();
    createWADControlKeys(scene1.camera.camera, canvas);
    scene1.createBackGround(50, 10000);

    var changeShouldScoreBeShown = function (name, boolean) {
        score.setShouldScoreBeDisplayed = boolean;
    }
    PubSub.subscribe("changeScore", changeShouldScoreBeShown);

    let args = {};

    args.screenType = HOMESCREEN;
    args.scene = scene1;
    // args.score = score;
    var screen = new Screen(args);
    var score = new Score();

    engine.runRenderLoop(function () {
        updateCameraPos(scene1);
        if (score.shouldScoreBeDisplayed) {
            console.log(score.getScore());
        }
        scene1.scene.render();
    });
});
function updateCameraPos(scene) {
    scene.camera.camera.position.z += scene.camera.cameraSpeed;
}

var createDefualtScene = function () {
    return new SceneGenerator(engine, 0, "freeCamera", 0, 5, -100);
}

function createWADControlKeys(camera, canvas) {
    camera.keysUp.push(87); // w
    camera.keysLeft.push(65); // a
    camera.keysRight.push(68); //d
    camera.attachControl(canvas, true);
}