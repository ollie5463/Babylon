
export default class Camera {
    constructor(cameraSpeed, nameOfCamera, x, y, z, scene) {
        this.createFreeCamera(nameOfCamera, x, y, z, scene);
        this.cameraSpeed = cameraSpeed;
    }

    createFreeCamera(nameOfCamera, x, y, z, scene) { /* allows free movement in the scene */
        this.camera = new BABYLON.FreeCamera(nameOfCamera, new BABYLON.Vector3(x, y, z), scene);
    }

    setCameraSpeed(cameraSpeed) {
        this.cameraSpeed = cameraSpeed;
    }
}


