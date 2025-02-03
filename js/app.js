/*-------------------------------- Constants --------------------------------*/
const cards = [
    '🧄', '🧄',
    '🫘', '🫘',
    '🍝', '🍝',
    '🍌', '🍌',
    '🍅', '🍅',
    '🫚', '🫚',
    '🍮', '🍮',
    '🧀', '🧀',
    '🍼', '🍼',
    '🥩', '🥩',
    '🍠', '🍠',
    '🧇', '🧇']


// // /*---------------------------- Variables (state) ----------------------------*/
let firstPick;
let secondPick;
// let cardClickNumber; 
// let timeLeft 
// let pairsLeftToMatch 
/*------------------------ Cached Element References ------------------------*/
// const boardDisplayEl = document.querySelector('#board-display');
// const cardDisplayEl = document.querySelector('#card-display');
// const messageDisplayEl = document.querySelector('#message-display');
// const timerDisplayEl = document.querySelector('#timer-display');
// const replayDisplayEl = document.querySelector('#replay-display');

const cardElements = document.querySelectorAll('.card');
/*-------------------------------- Functions --------------------------------*/
function handleClick(event) {
    console.log('this is not clicking ha ha')
    }

// flipCard() 
// function flipCard (cards)
// if ()
// checkIfPair()
// removeIfPair()
// resetBoard()
// randomShuffle()
// beginTimer()
// endGame() 
/*----------------------------- Event Listeners -----------------------------*/




cardElements.forEach(card => {
    card.addEventListener('click', handleClick);
}); 


// hold off on card flipping and randomizing the cards 

// focus on clicking matching pair to increase score or non matching pair 

// dom events lab - number variables stored - 1st amd 2nd clicks stored