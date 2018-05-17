class EventsHandler {
    constructor(cardRepository, gameRenderer, matchChecker) {
        this.cardRepository = cardRepository;
        this.gameRenderer = gameRenderer;
        this.matchChecker = matchChecker;
        this.numberOfMatches = 0;
    }

    startGame() {
        $('#getCards').on('click', () => {
            this.cardRepository.getCards()
                .then(() => {

            this.cardRepository.shuffleCards(this.cardRepository.cardsCollection);
            this.gameRenderer.renderGameBoard(this.cardRepository.cardsCollection);
            console.log(this.cardRepository.cardsCollection);
                })
        })
        var clickCount = 0;

    }

    clickCard() {

        $(document).on('click', '.card__face', (event) => {
            let cardId   = $(event.currentTarget).data().id;
            let cardName = $(event.currentTarget).data().name;

            console.log(cardId);
            console.log(cardName);

            this.cardRepository.changeState(cardId);
            this.gameRenderer.renderGameBoard(this.cardRepository.cardsCollection);
            console.log(this.cardRepository.cardsCollection);
            
           var matchValues = this.matchChecker.cardOpen(cardId, cardName);

            if (matchValues[2] === true) {
             numberOfMatches += 1;

                if (numberOfMatches === 4) {
                    this.gameRenderer.gameOver();
                     return;
                }
             } else {
                this.cardRepository.changeState(matchValues[0]);
                this.cardRepository.changeState(matchValues[1]);
                console.log(this.cardRepository.cardsCollection);
             }
        })

    }

    }



export default EventsHandler;