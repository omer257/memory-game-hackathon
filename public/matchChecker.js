class MatchChecker {
    constructor() {
        this.openedCards = [];
    }

    cardOpen(cardId, cardName) {
        console.log(this.openedCards);
        this.openedCards.push(cardId);
        this.openedCards.push(cardName);
        console.log(this.openedCards);

        if (this.openedCards.length === 4) {
            if (this.openedCards[0] !== this.openedCards[2] && this.openedCards[1] === this.openedCards[3]) {
                var theyMatch = [this.openedCards[0], this.openedCards[2], true];
                this.openedCards = [];
                console.log(theyMatch);
                return theyMatch;
            } else {
                var theyNoMatch = [this.openedCards[0], this.openedCards[2], false];
                this.openedCards = [];
                console.log(theyNoMatch);
                return theyNoMatch;
            }
        } else return [];
    }

}

export default MatchChecker;