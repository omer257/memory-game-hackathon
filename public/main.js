import CardRepository from './cardRepository.js';
import GameRenderer from './render.js'
import EventsHandler from './eventHandler.js';

let cardRepository = new CardRepository();
let gameRenderer = new GameRenderer();
let eventsHandler = new EventsHandler(cardRepository);


eventsHandler.startGame();