class MatchChecker {
    constructor() {
        this.openedCards = [];
    }

    cardOpen(cardId, cardName) {

        this.openedCards.push(cardId);
        this.openedCards.push(cardName);

        var len = this.openedCards.length;

        if (len === 2) {
            if (this.openedCards[0] !== this.openedCards[2] && this.openedCards[1] === this.openedCards[3]) {
                var theyMatch = [this.openedCards[0], this.openedCards[2], true];
                return theyMatch;
            } else {
                var theyNoMatch = [this.openedCards[0], this.openedCards[2], false];
                return theyMatch;
            }
            this.openedCards = [];
        }
    }

}

export default MatchChecker;