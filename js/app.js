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

    // const myArray = ['🧄','🫘','🍝','🍌','🍅','🫚','🍮','🧀','🍼','🥩','🍠','🧇'];
// /*---------------------------- Variables (state) ----------------------------*/

let firstPick
let secondPick
let matches
let timer
let clicks
let interval 





/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board');
const messageDisplay = document.querySelector('#message');
const timerDisplay = document.querySelector('#timerDisplay');
const resetButton = document.querySelector('#reset');
const cardElements = document.querySelectorAll('.card');
const card1Text = document.getElementById("card-1");




/*-------------------------------- Functions --------------------------------*/


const render = () => {
   
    messageDisplay.innerText = 'you have 90 seconds to match them all🤔';
    timerDisplay.innerText = timer
    
    // console.log(timer);

};


const init = () => {
    firstPick = null
    secondPick = null
    matches = 0
    clicks = 0
    timer = 1000
    
    // init called when page loads and button clicked
   

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      
    shuffleArray(cards)
    shuffleArray(cards)
    
    const card1 = cards[0]
    card1Text.innerText = card1
    
    console.log(cards)
    console.log(cards[0])
    // game starts and triggers shffleArray
    // index and assign to card
  
    render(); 
    timerTrack();
    
    
  



};


const countTimerDown = () => {
    if (timer > 0) {
        timer = timer - 1;
        render();
        // console.log(timer);
    }
    if (timer === 0) {
        timerDisplay.innerText = 'times up'
        // console.log('times up'); 
        disableCards();

    }
};


const timerTrack = () => {

    if (timer > 0) {
        clearInterval(interval)
        interval = setInterval(countTimerDown, 1000);
        
}
}
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
    
    let clickedCard = event.currentTarget;
    clicks += 1
    clickedCard.classList.toggle('is-flipped');

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
            resetTurn()
        } else if  (firstPick.innerText !== secondPick.innerText) 
            setTimeout (() => {
                firstPick.classList.remove('is-flipped'); 
                secondPick.classList.remove('is-flipped'); 
                resetTurn()  
            }, 1000) 
                
              
            
    }
    
};

// look at tic tac toe updateMessage function - can use some timer logic for that 

const resetTurn = () => {
    firstPick = null;
    secondPick = null;
};



const disableCards = () => {
    cardElements.forEach(card => {
        card.removeEventListener('click', flipCard);

    });
};

const resetCards = () => {
window.location.reload();
}
resetButton.addEventListener('click', resetCards)
resetButton.addEventListener('click', init)


cardElements.forEach(card => {
    card.addEventListener('click', flipCard);
});

init(); 
// render();

