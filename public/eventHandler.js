class EventsHandler {
    constructor(cardRepository) {
        this.cardRepository = cardRepository;
    }

    startGame() {
        $('#getCards').click( () => {
            this.cardRepository.getCards();
        })
    }

    restartGame() {

    }

    clickCard(card) {

    }

    //pauseGame(){}


}

export default EventsHandler;