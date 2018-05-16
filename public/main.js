import CardRepository from './cardRepository.js';
import GameRenderer from './render.js'
import EventsHandler from './eventHandler.js';
import MatchChecker from './matchChecker.js';

let cardRepository = new CardRepository();
let gameRenderer = new GameRenderer();
let matchChecker = new MatchChecker();
let eventsHandler = new EventsHandler(cardRepository, gameRenderer, matchChecker);


eventsHandler.startGame();
eventsHandler.clickCard();