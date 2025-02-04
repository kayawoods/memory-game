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


// /*---------------------------- Variables (state) ----------------------------*/
let firstPick = ''
let secondPick = ''
let matches = 0



/*------------------------ Cached Element References ------------------------*/


const cardElements = document.querySelectorAll('.card');
/*-------------------------------- Functions --------------------------------*/


const flipCard = (event) => {
    let clickedCard = event.target;

    if (!firstPick) {
        firstPick = clickedCard;
        console.log('First Pick:', firstPick.innerText);
    }
    else if (!secondPick) {
        secondPick = clickedCard;
        console.log('Second Pick:', secondPick.innerText);
    
    if (firstPick.innerText === secondPick.innerText) {
        console.log('match');
    } else {
        console.log('not a match');

    } 
    resetTurn();
}


}; 
const resetTurn = () => {
    firstPick = null;
    secondPick = null;
};
// }
// if round = 90 seconds and matched pairs = then, 
// };
// if (timer === 0) && (matches !== 12) {
//     console.log ('lost')
// } else if { 

//  (matches === 12) 
//  console.log('win')
// }

// const timer = () => { 
//     sec === 90 
//     document.getElementById('timer') 
//     if (sec < 0) {
//         resetTimer; 
//     }
// const setTimeout (timer, )




// const resetTimer = () { 

// }
// const resetBoard = (event) => {
//     const timerGoes

// reset the value of first card and second card 


// checkIfPair()
// removeIfPair()
// resetBoard()
// randomShuffle()
// beginTimer()
// endGame() 
/*----------------------------- Event Listeners -----------------------------*/




cardElements.forEach(card => {
    card.addEventListener('click', flipCard);
});


// hold off on card flipping and randomizing the cards 

// focus on clicking matching pair to increase score or non matching pair 

// dom events lab - number variables stored - 1st amd 2nd clicks stored


// call back function
// milla seconds between every single code 

// let timer = 90; 

// const countTimerDown = () => {
//     timer = timer -1; 
//     console.log (timer); 
// }

// setInterval (countTimerDown, 1000); 

// -that will take timer keep going down and keep going 
// not going to stop at any point 

// probably want delay 
// when timer = 0, 




// let timer = 10; 
// const countTimerDown = () => {
//     if (timer >= 0) { 
// timer = timer -1; 
// console.log(the clock at at, timer)

// setInterval (countTimerDown, 1000)

// 




