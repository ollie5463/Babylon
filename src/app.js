var scene;
var engine;
var canvas;
var freeCamera;
window.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById("canvas");
    engine = new BABYLON.Engine(canvas, true);

    createScene();
    engine.runRenderLoop(function () {
        updateCameraPos();
        scene.render();
    });
});

function updateCameraPos() {
    freeCamera.camera.position.z += freeCamera.cameraSpeed;
}

var createScene = function () {
    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0.1, 0.1);
    createBasicSceneWithFreeCamera();
}

function createBasicSceneWithFreeCamera() {
    var maze = new MazeGenerator(HARD, 50, 10000);
    freeCamera = new Camera(0.5, "freeCamera", 0, 5, -100, scene);
    createWASDControlKeys(freeCamera.camera, canvas);
}

function createWASDControlKeys(camera, canvas) {
    camera.keysUp.push(87); // w
    camera.keysLeft.push(65); // a
    camera.keysRight.push(68); //d
    camera.attachControl(canvas, true);
}