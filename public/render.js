class GameRenderer {
    constructor() {
        this.$cardsContainer = $(".cards-container");
        this.$cardsTemplate = $('#cards-template').html();


    }

    renderGameBoard(cardsCollection) {
        this.$cardsContainer.empty()
        let template = Handlebars.compile(this.$cardsTemplate);
        for (let i = 0; i < cardsCollection.length; i++) {
            let newHTML = template(cardsCollection[i]);
            this.$cardsContainer.append(newHTML);
          
        }
    }

//**?
    renderScore() {

    }
}


export default GameRenderer;
