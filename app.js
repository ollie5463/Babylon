import * as BABYLON from 'babylonjs';
import SceneGenerator from './src/generators/SceneGenerator';

var engine;
var canvas;
window.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById("canvas");
    engine = new BABYLON.Engine(canvas, true);
    var scene1 = createDefualtScene();
    createWADControlKeys(scene1.camera.camera, canvas);
    scene1.createBackGround(50, 10000);
    // scene1.createMaze(50, 10000);

    createTitle(scene1);
    let args;
    var screen = new Screen();
    createStartButtons(scene1);

    engine.runRenderLoop(function () {
        updateCameraPos(scene1);
        scene1.scene.render();
    });
});

function updateCameraPos(scene) {
    scene.camera.camera.position.z += scene.camera.cameraSpeed;
}

var createDefualtScene = function () {
    return new SceneGenerator(engine, 0, "freeCamera", 0, 5, -100);
}

function createStartButtons(scene) {
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    // levels
    // easy button
    var easyButton = BABYLON.GUI.Button.CreateSimpleButton("but", "Easy");
    easyButton.width = 0.2;
    easyButton.color = "white";
    easyButton.background = "green";
    easyButton.height = "40px";
    easyButton.paddingTop = -80;
    easyButton.paddingBottom = 80;
    easyButton.onPointerClickObservable.add(function () {
        scene.createMaze(EASY, 50, 10000);
        easyButton.isVisible = false;
        mediumButton.isVisible = false;
        hardButton.isVisible = false;
        scene.camera.cameraSpeed = 0.5;

        // advancedTexture.deleteControl(easyButton);
        // update camera position from 0
    });
    // medium button
    var mediumButton = BABYLON.GUI.Button.CreateSimpleButton("but", "Medium");
    mediumButton.width = 0.2;
    mediumButton.color = "white";
    mediumButton.background = "orange";
    mediumButton.height = "40px";
    mediumButton.onPointerClickObservable.add(function () {
        scene.createMaze(MEDIUM, 50, 10000);
        easyButton.isVisible = false;
        mediumButton.isVisible = false;
        hardButton.isVisible = false;
        scene.camera.cameraSpeed = 0.5;
    });
    // hard button
    var hardButton = BABYLON.GUI.Button.CreateSimpleButton("but", "Hard");
    hardButton.width = 0.2;
    hardButton.color = "white";
    hardButton.background = "red";
    hardButton.height = "40px";
    hardButton.paddingTop = 80;
    hardButton.paddingBottom = -80;
    // hardButton.onPointerClickObservable.add((() => {createMaze() }))
    hardButton.onPointerClickObservable.add(function () {
        scene.createMaze(HARD, 50, 10000);
        easyButton.isVisible = false;
        mediumButton.isVisible = false;
        hardButton.isVisible = false;
        scene.camera.cameraSpeed = 0.5;
    });

    advancedTexture.addControl(easyButton);
    advancedTexture.addControl(mediumButton);
    advancedTexture.addControl(hardButton);
}
function createTitle(scene) { // come back and change this to 2d text
    var title = BABYLON.Mesh.CreateBox("Title", 10, scene.scene);
    title.position = new BABYLON.Vector3(0, 20, 0);
    title.scaling.x = 6;
    title.material = new BABYLON.StandardMaterial("boxMaterial", scene.scene);
    title.material.emissiveColor = new BABYLON.Color3(0, 0, 0);
    title.material.emissiveTexture = new BABYLON.Texture("../img/blocky_maze.jpg");
}
function createWADControlKeys(camera, canvas) {
    camera.keysUp.push(87); // w
    camera.keysLeft.push(65); // a
    camera.keysRight.push(68); //d
    camera.attachControl(canvas, true);
}