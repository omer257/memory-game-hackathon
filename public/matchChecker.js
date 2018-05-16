class MatchChecker {
    constructor() {
        this.openedCards = [];
    }

    cardOpen() {
        openedCards.push(this);
        openedCards[0].classList.add("is-flipped");
        openedCards[1].classList.add("is-flipped");
        var len = openedCards.length;
        if (len === 2) {
            if (openedCards[0].id === openedCards[1].id) {
                this.matched();
            } else {
                this.unmatched();
            }
        }
    };

    matched() {
        this.disable();
        setTimeout(function () {
            openedCards[0].classList.add("is-flipped");
            openedCards[1].classList.add("is-flipped");
        }, 2000);
        setTimeout(function () {
            $(openedCards[0]).hide();
            $(openedCards[1]).hide();
            this.enable();
        }, 4000);
        openedCards = [];
    }

    unmatched() {
        this.disable();
        setTimeout(function () {
            $(openedCards[0]).classList.add("is-flipped");
            $(openedCards[1]).classList.add("is-flipped");
            this.enable();
        }, 2000);
        openedCards = [];
    }

    disable() {
        card.classList.add('disabled');
    }

    enable() {
        card.classList.remove('disabled');
    }
}

export default MatchChecker;