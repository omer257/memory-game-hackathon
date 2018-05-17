class MatchChecker {
    constructor() {
        this.openedCards = [];
    }

    checkMach(name) {
        this.openedCards.push(name);
        if (this.openedCards.length === 2) {
            if (this.openedCards[0] === this.openedCards[1]) {
                return 2;
            } else {
                return 0;
            }
        } return 1;
    }
}

export default MatchChecker;