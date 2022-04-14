const gridDisplayElement = document.querySelector('#grid');
const resultDisplayElement = document.getElementById('result');
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }

];

let cardChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

cardArray.sort(() => 0.5 - Math.random())




function createBoard() {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplayElement.append(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have clicked the same image');
    }

    console.log('Check for Match!');
    if (cardChosen[0] === cardChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry try again!');
    }
    resultDisplayElement.textContent = cardsWon.length;

    cardChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === (cardArray.length) / 2) {
        resultDisplayElement.textContent = 'Congratulations you found them all!';
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}


