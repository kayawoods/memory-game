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
let firstPick = null;
let secondPick = null;
let matches = 0;
let timer = 90;




/*------------------------ Cached Element References ------------------------*/


const cardElements = document.querySelectorAll('.card');
// const timerDisplay = document.getElementById('timer');
/*-------------------------------- Functions --------------------------------*/

cardElements.forEach(function (card) {
    if (card.classList.contains('garlic')) {
        card.addEventListener('click', function (event) {
            event.target.classList.toggle('garlic')
        })
    } else if (card.classList.contains('bean')) {
        card.addEventListener('click', function (event) {
            event.target.classList.toggle('bean')
        })
    }
})



const flipCard = (event) => {
    let clickedCard = event.target;



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
        } else {
            console.log('not a match');


        }
        resetTurn();

        // if (matches === 12) {
        //     console.log('win!')
        //     //  need to clear/sync with timer 
        // }
        // else if (timer === 0 && matches !== 12) {
        //     console.log('lose!')

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



/*----------------------------- Event Listeners -----------------------------*/




cardElements.forEach(card => {
    card.addEventListener('click', flipCard);
});



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




