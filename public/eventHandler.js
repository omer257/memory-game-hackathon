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
        $('.flex-container').on('click', '.card__face', () => {

            let $card = $('.card')
            let $cardId = $card.data().id
            console.log($card)
            this.matchChecker.cardOpen($cardId);
        })
    }



}

export default EventsHandler;