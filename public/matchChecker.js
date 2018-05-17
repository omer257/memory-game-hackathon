class MatchChecker {
    constructor() {
        this.openedCards = [];
    }

    cardOpen(clickedCard) {
        this.openedCards.push(clickedCard);
    console.log(this.openedCards);
        $(this.openedCards[0]).addClass("is-flipped");
        $(this.openedCards[0]).addClass("disabled");
        $(this.openedCards[1]).addClass("is-flipped");
        $(this.openedCards[0]).addClass("disabled");
        var len = this.openedCards.length;
        if (len === 2) {
            if (this.openedCards[0].id === this.openedCards[1].id) {
                this.matched();
            } else {
                this.unmatched();
            }
        }
    };

    matched() {
        let beep = new Audio("51.wav");
        beep.play();
        this.disable();
        setTimeout( () => {
            $(this.openedCards[0]).addClass("is-flipped");
            $(this.openedCards[1]).addClass("is-flipped");
        }, 2000);
        setTimeout( () => {
            $(this.openedCards[0]).hide();
            $(this.openedCards[1]).hide();
            this.enable();
        }, 4000);
        this.openedCards = [];
    }

    unmatched() {
        let buzz = new Audio("buzzer.wav");
        buzz.play();
        this.disable();
        setTimeout( () => {
            $(this.openedCards[0]).addClass("is-flipped");
            $(this.openedCards[1]).addClass("is-flipped");
            this.enable();
        }, 2000);
        this.openedCards = [];
    }

    disable() {
        $('.card').addClass('disabled');
    }

    enable() {
        $('.card').removeClass('disabled');
    }
}

export default MatchChecker;