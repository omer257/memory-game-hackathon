class EventsHandler {
    constructor(cardRepository, gameRenderer) {
        this.cardRepository = cardRepository;
        this.gameRenderer = gameRenderer;
        
    }

    startGame() {
        $('#getCards').on('click', () => {
          
            this.cardRepository.getCards()
             .then(()=>{
                console.log(this.cardRepository.cardsCollection)
                this.gameRenderer.renderGameBoard(this.cardRepository.cardsCollection);
            })
        })
        
    }

    restartGame() {

    }

    clickCard(card) {

    }

    //pauseGame(){}


}

export default EventsHandler;