class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max
    }

    guess() {
       return Math.round((this.maxNum + this.minNum)/2)
    }

    lower() {
        return this.maxNum = this.guess(); 
    }

    greater() {
        return this.minNum = this.guess();
    }
}

module.exports = GuessingGame;
