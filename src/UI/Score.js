
export default class Score {
    constructor() {
        this.createScore();
        this.score = 0;
        this.shouldScoreBeDisplayed = false;
    }

    createScore() {
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        var text1 = new BABYLON.GUI.TextBlock();
        text1.text = "Score";
        text1.color = "white";
        text1.fontSize = 24;
        text1.paddingBottom = 80;
        text1.paddingTop = -80;
        advancedTexture.addControl(text1);
    }

    shouldScoreBeDisplayed() {
        return this.shouldScoreBeDisplayed;
    }

    setShouldScoreBeDisplayed(boolean) {
        this.shouldScoreBeDisplayed = boolean;
    }

    getScore() {
        return this.score++
    }
}