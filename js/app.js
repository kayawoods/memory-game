/*-------------------------------- Constants --------------------------------*/
const card = ['card 1', 'card 2', 'card 3', 'card 4', 'card 5', 'card 6', 'card 7', 'card 8', 'card 9', 'card 10', 'card 11', 'card 12', 'card 13', 'card 14', 'card 15', 'card 16'] 
const pair = ['pair 1', 'pair 2', 'pair 3', 'pair 4', 'pair 5', 'pair 6', 'pair 7', 'pair 8'] 
const timerTime = 90 seconds 

// /*---------------------------- Variables (state) ----------------------------*/
let firstPick; 
let secondPick; 
let cardClickNumber; 
let timeLeft 
let pairsLeftToMatch 
/*------------------------ Cached Element References ------------------------*/
const boardDisplayEl = document.querySelector('#board-display');
const cardDisplayEl = document.querySelector('#card-display');
const messageDisplayEl = document.querySelector('#message-display');
const timerDisplayEl = document.querySelector('#timer-display');
const replayDisplayEl = document.querySelector('#replay-display');

/*-------------------------------- Functions --------------------------------*/
flipCardFront()
flipCardBack()
checkIfPair()
removeIfPair()
resetBoard()
randomShuffle()
beginTimer()
endGame() 
/*----------------------------- Event Listeners -----------------------------*/


