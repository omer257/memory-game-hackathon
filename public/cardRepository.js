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

    shuffleCards(array) {
        var i = 0
            , j = 0
            , temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array;
    }

}

export default CardRepository;