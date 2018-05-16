class EventsHandler {
    constructor(cardRepository, gameRenderer) {
        this.cardRepository = cardRepository;
        this.gameRenderer = gameRenderer;

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

    restartGame() {

    }

    clickCard() {

       
        
    }
}


export default EventsHandler;