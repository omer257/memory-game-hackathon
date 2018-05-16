class CardRepository {
    constructor() {
        this.cardsCollection = [];
        this.cardStates = {
            back : 0,
            front : 1,
            matched : 2
        }
    }

    getCards() {
       return $.get('/cards')
        .then(function(cardsFromDB){
            this.cardsCollection = cardsFromDB;
            console.log(this.cardsCollection);
            return this.cardsCollection;
        })
    }


    shuffleCards() {

    }

    
}

export default CardRepository;