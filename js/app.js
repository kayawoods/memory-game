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
let clicks = 0;




/*------------------------ Cached Element References ------------------------*/


// const cardElements = document.querySelectorAll('.card');
// const card = document.getElementsByClassName('card)')
const board = document.querySelector('.board');
// const message = document.querySelector ('#messageDisplay');



/*-------------------------------- Functions --------------------------------*/
cards.forEach(function (emoji) {
    const card = document.createElement('div')
    const cardChild = document.createElement('div')
    card.classList.add('card')
    if (emoji === '🧄') {
        card.classList.add('garlic')
        card.appendChild(cardChild)
        cardChild.innerText = '🧄'

    }
    else if (emoji === '🫘') {
        card.classList.add('bean')
        card.innerText = '🫘'
    }
    else if (emoji === '🍝') {
        card.classList.add('spaghetti')
        card.innerText = '🍝'
    }
    else if (emoji === '🍌') {
        card.classList.add('banana')
        card.innerText = '🍌'
    }
    else if (emoji === '🍅') {
        card.classList.add('tomato')
        card.innerText = '🍅'
    }
    else if (emoji === '🫚') {
        card.classList.add('ginger')
        card.innerText = '🫚'
    }
    else if (emoji === '🍮') {
        card.classList.add('custard')
        card.innerText = '🍮'
    }
    else if (emoji === '🧀') {
        card.classList.add('cheese')
        card.innerText = '🧀'
    }
    else if (emoji === '🍼') {
        card.classList.add('bottle')
        card.innerText = '🍼'
    }
    else if (emoji === '🥩') {
        card.classList.add('steak')
        card.innerText = '🥩'
    }
    else if (emoji === '🍠') {
        card.classList.add('sweetPot')
        card.innerText = '🍠'
    }
    else if (emoji === '🧇') {
        card.classList.add('waffle')
        card.innerText = '🧇'
    }
    board.appendChild(card)
})
const cardElements = document.querySelectorAll('.card');



// cardElements.forEach(function (card) {
//     if (card.classList.contains('garlic')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('garlic')
//         })
//     } else if (card.classList.contains('bean')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('bean')
//         })
//     } else if (card.classList.contains('spaghetti')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('spaghetti')
//         })
//     } else if (card.classList.contains('banana')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('banana')
//         })
//     } else if (card.classList.contains('tomato')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('tomato')
//         })
//     } else if (card.classList.contains('ginger')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('ginger')
//         })
//     } else if (card.classList.contains('custard')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('custard')
//         })
//     } else if (card.classList.contains('cheese')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('cheese')
//         })
//     } else if (card.classList.contains('bottle')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('bottle')
//         })
//     } else if (card.classList.contains('steak')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('steak')
//         })
//     } else if (card.classList.contains('sweetPot')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('sweetPot')
//         })
//     } else if (card.classList.contains('waffle')) {
//         card.addEventListener('click', function (event) {
//             event.target.classList.toggle('waffle')
//         })
//     }
// })



// cardElements.forEach(function(card) {
//     card.addEventListener('click', function (event) {


//     }) 
// })



const flipCard = (event) => {
    let clickedCard = event.target;
    // clickedCard.classList.toggle('hide')
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
        } else {
            console.log('not a match');
            messageDisplay.innerText = message
            if (matches === 12) {
                gameMessage.innerHTML = 'you are a winner'
                console.log('winner!')
            }
            else if (timer === 0 && matches !== 12) {
                gameMessage.innerHTML = 'you lost dude'
                console.log('loser!')
                

            }

        }
        resetTurn()

    }


};
const resetTurn = () => {
    firstPick = null;
    secondPick = null;
};



/*----------------------------- Event Listeners -----------------------------*/




cardElements.forEach(card => {
    card.addEventListener('click', flipCard);
});


const countTimerDown = (seconds) => {
    if (timer > 0) {
        timer--;
        timerDisplay.innerText = timer
        console.log(timer);
    } else {
        timerDisplay.innerText = 0
        console.log('times up');
        clearInterval(interval)

    }
}
// how to get it to stop 

const interval = setInterval(countTimerDown, 1000)



