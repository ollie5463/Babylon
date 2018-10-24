var scene;
var engine;
var canvas;
var freeCamera;
window.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById("canvas");
    engine = new BABYLON.Engine(canvas, true);
    var scene1 = createDefualtScene();
    createWASDControlKeys(scene1.camera.camera, canvas);
    scene1.createMaze(HARD, 50, 10000);
    engine.runRenderLoop(function () {
        updateCameraPos(scene1);
        scene1.scene.render();
    });
});

function updateCameraPos(scene) {
    scene.camera.camera.position.z += scene.camera.cameraSpeed;
}

var createDefualtScene = function () {
    return new SceneGenerator(engine, 0.5, "freeCamera", 0, 5, -100);
}

function createWASDControlKeys(camera, canvas) {
    camera.keysUp.push(87); // w
    camera.keysLeft.push(65); // a
    camera.keysRight.push(68); //d
    camera.attachControl(canvas, true);
}