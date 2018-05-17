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
                })
        })

                   
                    this.cardRepository.cardsCollection = this.cardRepository.shuffleCards(this.cardRepository.cardsCollection);
                    console.log(this.cardRepository.cardsCollection);
                    this.gameRenderer.renderGameBoard(this.cardRepository.cardsCollection);
                })
        })
        var clickCount = 0;

    }

    clickCard() {

        $(document).on('click', '.card__face', (event) => {
            let cardId = $(event.currentTarget).id;
            let cardName = $(event.currentTarget).name;

            this.cardRepository.changeState(cardId);
            this.gameRenderer.renderGameBoard(this.cardRepository.cardsCollection);
            
           
            // var matchValues = this.matchChecker.cardOpen(cardId, cardName);

            // if (matchValues[3] === true) {
            //     numberOfMatches += 1;

            //     if (numberOfMatches === 4) {
            //         this.gameRenderer.gameOver();
            //         return;
            //     }
            // } else {
            //     this.cardRepository.updatedCards(matchValues[0], matchValues[1])
            // }

            //this.gameRenderer.renderGameBoard(updatedcardsCollection)
        })



        $('.cards-container').on('click','.state-{{state}}', () => {
            
        })
    }

    incrementClickCounter(){    
        clickCount++;    

    }

}

export default EventsHandler;