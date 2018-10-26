import * as $ from 'jquery';
import * as BABYLONGUI from 'babylonjs-gui';

export const HOMESCREEN = Symbol("homeScreen");
export default class Screen {
    constructor(args) {
        if (args.screenType === HOMESCREEN) {
            this.createHomeScreen();
        }
        this.score = args.score;
        this.buttons = [];
        this.scene = args.scene;
    }

    createHomeScreen() {
        this.createButtonsForHomScreen();
        this.createTitle();
    }

    createButtonsForHomScreen() {
        $.getJSON('config.json', ((data) => {
            this.createButtons(data.buttons);
        }))
    }
    createTitle() { // come back and change this to 3d text
        var title = BABYLON.Mesh.CreateBox("Title", 10, this.scene);
        title.position = new BABYLON.Vector3(0, 20, 0);
        title.scaling.x = 6;
        title.material = new BABYLON.StandardMaterial("boxMaterial", this.scene);
        title.material.emissiveColor = new BABYLON.Color3(0, 0, 0);
        title.material.emissiveTexture = new BABYLON.Texture("./img/blocky_maze.jpg");
    }

    createButtons(listOfButtons) {
        var advancedTexture = BABYLONGUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        listOfButtons.forEach(buttonData => {
            let button = BABYLONGUI.Button.CreateSimpleButton("but", buttonData.name);
            this.buttons.push(button);
            button.color = buttonData.color;
            button.width = buttonData.width;
            button.background = buttonData.background;
            button.height = buttonData.height;
            button.paddingTop = buttonData.paddingTop;
            button.paddingBottom = buttonData.paddingBottom;
            button.onPointerClickObservable.add((() => {
                this.scene.createMaze(buttonData.name);
                this.deleteButtons();
                this.score.setShouldScoreBeDisplayed(true);
            }))
            advancedTexture.addControl(button);
        });
    }
    deleteButtons() {
        this.buttons.forEach(button => {
            button.isVisible = false;
        })
    }
}