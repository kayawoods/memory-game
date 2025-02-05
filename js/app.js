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

let firstPick 
let secondPick 
let matches 
let timer
let clicks 





/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board');
const messageDisplay = document.querySelector('#message');
const timerDisplay = document.querySelector('#timerDisplay');
const resetButton = document.querySelector('#reset');
const cardElements = document.querySelectorAll('.card');




/*-------------------------------- Functions --------------------------------*/


const render = () => {
    messageDisplay.innerText = 'match to win';
    timerDisplay.innerText = timer
    // console.log(timer);

};


const init = () => {
    firstPick = null
    secondPick = null
    matches = 0
    timer = 10
    clicks = 0
    

   
    render();
    timerTrack();
    
    

};


const countTimerDown = () => {
    if (timer > 0) {
        timer = timer - 1;
        render();
        console.log(timer);
    }
    if (timer === 0) {
        timerDisplay.innerText = 'times up'
        // console.log('times up'); 
        disableCards();

    }
};


const timerTrack = () => {

    if (timer > 0) {
        setInterval(countTimerDown, 1000);
    }
};


// } else {
//     console.log('not a match');
//     messageDisplay.innerText = 'Not a match'
//     if (matches === 12) {
//          messageDisplay.innerText = 'you won';
//     }
//     else if (timer === 0 && matches !== 12) {
//         messageDisplay.innerText = 'loser';
//         console.log('loser!')


// }  why isnt this working ?????




const flipCard = (event) => {
    let clickedCard = event.target;
    clicks += 1

    if (!firstPick) {
        firstPick = clickedCard;
        console.log('First Pick:', firstPick.innerText);
    }
    else if (!secondPick) {
        secondPick = clickedCard;
        matches += 1
        console.log('Second Pick:', secondPick.innerText);

        if (firstPick.innerText === secondPick.innerText) {
            console.log('match');
            firstPick.removeEventListener('click', flipCard)
            secondPick.removeEventListener('click', flipCard)
        }
        resetTurn();
    }
};

const resetTurn = () => {
    firstPick = null;
    secondPick = null;
};



const disableCards = () => {
    cardElements.forEach(card => {
        card.removeEventListener('click', flipCard);

    });
};

resetButton.addEventListener('click', init)

cardElements.forEach(card => {
    card.addEventListener('click', flipCard);
});

init(); 
