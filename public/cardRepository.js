import Api from './Api.js';


/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */

class CardRepository {
    constructor() {
        this.api = new Api()
        this.cardsCollection = [];
        this.cardStates = {
            back : 0,
            front : 1,
            matched : 2
        }
    }

   async getCards() {

    this.cardsCollection = await this.api.fetch()

    }

    shuffleCards() {
    }

    
}

export default CardRepository;