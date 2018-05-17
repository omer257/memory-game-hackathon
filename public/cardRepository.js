import Api from './Api.js';


/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */

class CardRepository {
    constructor() {
        this.api = new Api()
        this.cardsCollection = [];
 }

    async getCards() {
        this.cardsCollection = await this.api.fetch();

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
        this.cardsCollection = array;
        console.log(this.cardsCollection);
    }

   changeState(cardId){
    for(var i = 0; i < this.cardsCollection.length; i++)
        if(this.cardsCollection[i]._id === cardId){
            this.cardsCollection[i].state = 1;
            console.log(this.cardsCollection);
        }

    }

}
// changeStates(cardId, cardName){

// }

export default CardRepository;