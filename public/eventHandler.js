class EventsHandler {
    constructor(cardRepository, gameRenderer, matchChecker) {
        this.cardRepository = cardRepository;
        this.gameRenderer = gameRenderer;
        this.matchChecker = matchChecker;
    }

    startGame() {
        $('#getCards').on('click', () => {

            this.cardRepository.getCards()
                .then(() => {
                    this.cardRepository.dupCards()
                    console.log(this.cardRepository.dbCards)
                    this.cardRepository.shuffleCards(this.cardRepository.cardsCollection);
                    console.log(this.cardRepository.cardsCollection);
                    this.gameRenderer.renderGameBoard(this.cardRepository.cardsCollection);
                })
        })

    }


    clickCard() {
        $(document).on('click', '.card__face', (event) => {
        let $cardClicked = event.currentTarget
            this.matchChecker.cardOpen($cardClicked);
        })
    }



}

export default EventsHandler;