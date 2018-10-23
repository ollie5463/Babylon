window.addEventListener("DOMContentLoaded", function () {
    var cavas = document.getElementById("canvas");
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3.White();
        var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
        var box2 = BABYLON.Mesh.CreateBox("Box", 4.0, scene);

        var material = new BABYLON.StandardMaterial("material1", scene);
        material.wireframe = true;
        box2.material = material;
        box2.position = new BABYLON.Vector3(0, 3, 0);

        var arcRotateCamera = createArcRotateCamera("arcCamera", 45, 45, 10, box.position, scene);
        createWASDControlKeys(arcRotateCamera, canvas);
        arcRotateCamera.attachControl(canvas, true);
        arcRotateCamera.setTarget(BABYLON.Vector3.Zero());


        return scene;
    }
    var scene = createScene();
    engine.runRenderLoop(function () {
        // scene.getMeshByName("Box").position.z += 0.01;
        scene.render();
    });
});

function createWASDControlKeys(camera, canvas) {
    camera.keysUp.push(87); // w
    camera.keysDown.push(83); // d
    camera.keysLeft.push(65); // a
    camera.keysRight.push(68); // s
    camera.attachControl(canvas, true);
}

function createArcRotateCamera(nameOfCamera, alpha, beta, radius, targetAsAVec3, scene) { /* rotating around a give target */
    return new BABYLON.ArcRotateCamera(nameOfCamera,
        BABYLON.Tools.ToRadians(alpha),
        BABYLON.Tools.ToRadians(beta),
        radius, targetAsAVec3, scene);
}

/* freeCamera example */
// var freeCamera = createFreeCamera("freeCamera", 0, 0, -10, scene);
function createFreeCamera(nameOfCamera, x, y, z, scene) {  /* allows free movement in the scene */
    return new BABYLON.FreeCamera(nameOfCamera, new BABYLON.Vector3(x, y, z), scene);
}
