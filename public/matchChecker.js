class MatchChecker {
    constructor() {
        this.openedCards = [];
    }
  
    cardOpen() {
        this.openedCards.push(this);
        this.openedCards[0].classList.add("is-flipped");
        this.openedCards[0].classList.add("disabled");
        openedCards[1].classList.add("is-flipped");
        this.openedCards[0].classList.add("disabled");
        var len = openedCards.length;
        if (len === 2) {
            if (this.openedCards[0]._id === this.openedCards[1]._id) {
                this.matched();
            } else {
                this.unmatched();
            }
        }
    };

    matched() {
        let beep = ("./sounds/51.wav");
        beep.play();
        this.disable();
        setTimeout(function () {
            this.openedCards[0].classList.add("is-flipped");
            this.openedCards[1].classList.add("is-flipped");
        }, 2000);
        setTimeout(function () {
            $(this.openedCards[0]).hide();
            $(this.openedCards[1]).hide();
            this.enable();
        }, 4000);
        this.openedCards = [];
    }

    unmatched() {
        let buzz = new Audio("./sounds/buzz.wav");
        buzz.play();
        this.disable();
        setTimeout(function () {
            $(this.openedCards[0]).classList.add("is-flipped");
            $(this.openedCards[1]).classList.add("is-flipped");
            this.enable();
        }, 2000);
        this.openedCards = [];
    }

    disable() {
        card.classList.add('disabled');
    }

    enable() {
        card.classList.remove('disabled');
    }
}

export default MatchChecker;