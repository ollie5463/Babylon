
export default class Score {
    constructor() {
        this.score = 0;
        this.shouldScoreBeDisplayed = false;
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