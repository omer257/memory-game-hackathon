import Api from './Api.js';


/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */

class CardRepository {
    constructor() {
        this.api = new Api()
        this.dbCards = [];
        this.cardsCollection = [];
        this.cardStates = {
            back: 0,
            front: 1,
            matched: 2
        }
    }

    async getCards() {

        this.dbCards = await this.api.fetch()
    }

    dupCards() {
        this.cardsCollection = this.dbCards.concat(this.dbCards)
    }

    shuffleCards() {
    }


}

export default CardRepository;