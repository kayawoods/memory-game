/*-------------------------------- Constants --------------------------------*/
const cards = ['🧄', '🧄', '🫘', '🫘', '🍝', '🍝', '🍌', '🍌', '🍅', '🍅', '🫚', '🫚', '🍮', '🍮', '🧀', '🧀', '🍼', '🍼', '🥩', '🥩', '🍠', '🍠', '🧇', '🧇']
// '🧄', '🧄',
// '🫘', '🫘',
// '🍝', '🍝',
// '🍌', '🍌',
// '🍅', '🍅',
// '🫚', '🫚',
// '🍮', '🍮',
// '🧀', '🧀',
// '🍼', '🍼',
// '🥩', '🥩',
// '🍠', '🍠',
// '🧇', '🧇']

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
const card2Text = document.getElementById("card-2");
const card3Text = document.getElementById("card-3");
const card4Text = document.getElementById("card-4");
const card5Text = document.getElementById("card-5");
const card6Text = document.getElementById("card-6");
const card7Text = document.getElementById("card-7");
const card8Text = document.getElementById("card-8");
const card9Text = document.getElementById("card-9");
const card10Text = document.getElementById("card-10");
const card11Text = document.getElementById("card-11");
const card12Text = document.getElementById("card-12");
const card13Text = document.getElementById("card-13");
const card14Text = document.getElementById("card-14");
const card15Text = document.getElementById("card-15");
const card16Text = document.getElementById("card-16");
const card17Text = document.getElementById("card-17");
const card18Text = document.getElementById("card-18");
const card19Text = document.getElementById("card-19");
const card20Text = document.getElementById("card-20");
const card21Text = document.getElementById("card-21");
const card22Text = document.getElementById("card-22");
const card23Text = document.getElementById("card-23");
const card24Text = document.getElementById("card-24");




/*-------------------------------- Functions --------------------------------*/


const render = () => {

    // messageDisplay.innerText = 'you have 90 seconds to match them all🤔';
    timerDisplay.innerText = timer


    // console.log(timer);

};


const init = () => {
    firstPick = null
    secondPick = null
    matches = 0
    clicks = 0
    timer = 90
    totalPairs = 12


    // messageDisplay.innerText = 'Click to flip. Make a match. 12 pairs, 90 seconds.';









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
    const card2 = cards[1]
    card2Text.innerText = card2
    const card3 = cards[2]
    card3Text.innerText = card3
    const card4 = cards[3]
    card4Text.innerText = card4
    const card5 = cards[4]
    card5Text.innerText = card5
    const card6 = cards[5]
    card6Text.innerText = card6
    const card7 = cards[6]
    card7Text.innerText = card7
    const card8 = cards[7]
    card8Text.innerText = card8
    const card9 = cards[8]
    card9Text.innerText = card9
    const card10 = cards[9]
    card10Text.innerText = card10
    const card11 = cards[10]
    card11Text.innerText = card11
    const card12 = cards[11]
    card12Text.innerText = card12
    const card13 = cards[12]
    card13Text.innerText = card13
    const card14 = cards[13]
    card14Text.innerText = card14
    const card15 = cards[14]
    card15Text.innerText = card15
    const card16 = cards[15]
    card16Text.innerText = card16
    const card17 = cards[16]
    card17Text.innerText = card17
    const card18 = cards[17]
    card18Text.innerText = card18
    const card19 = cards[18]
    card19Text.innerText = card19
    const card20 = cards[19]
    card20Text.innerText = card20
    const card21 = cards[20]
    card21Text.innerText = card21
    const card22 = cards[21]
    card22Text.innerText = card22
    const card23 = cards[22]
    card23Text.innerText = card23
    const card24 = cards[23]
    card24Text.innerText = card24













    render();
    timerTrack();






};

;
const checkWin = () => {
    if (matches === 12) {
        clearInterval(interval);
        messageDisplay.innerText = 'WIN WIN WIN'
        disableCards();
    }
}

const timerTrack = () => {

    if (timer > 0) {
        clearInterval(interval)
        interval = setInterval(countTimerDown, 1000);

    }
}


const flipCard = (event) => {

    let clickedCard = event.currentTarget;
    if (clickedCard === firstPick || clickedCard.classList.contains('is-flipped'))
        return;

clicks += 1
clickedCard.classList.toggle('is-flipped');

if (!firstPick) {
    firstPick = clickedCard;
}
else if (!secondPick) {
    secondPick = clickedCard;

    if (firstPick.innerText === secondPick.innerText) {
        matches += 1;
        resetTurn()
        checkWin()
    } else if (firstPick.innerText !== secondPick.innerText)
        setTimeout(() => {
            firstPick.classList.remove('is-flipped');
            secondPick.classList.remove('is-flipped');
            resetTurn()
        }, 1000)


    }
}




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
        if (matches === 12) {
            messageDisplay.innerText = 'you win';
        } else {
            messageDisplay.innerText = 'loser (just try again)'
        }
    }

}


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


