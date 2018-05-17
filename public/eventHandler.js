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
                   
                    this.cardRepository.cardsCollection = this.cardRepository.shuffleCards(this.cardRepository.cardsCollection);
                    console.log(this.cardRepository.cardsCollection);
                    this.gameRenderer.renderGameBoard(this.cardRepository.cardsCollection);
                })
        })
        var clickCount = 0;

    }


    clickCard() {


        $('.cards-container').on('click','.state-{{state}}', () => {
            
        })
    }

    incrementClickCounter(){    
        clickCount++;    
    }



}

export default EventsHandler;