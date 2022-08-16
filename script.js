

const grid = document.querySelector('#grid')
let chosenCards = []
let chosenCardsId = []
const winnerCards = []

const cardArray = [
    {
        name: 'flower',
        img: 'images/flower.jpg',

    },
    {
        name: 'circleflower',
        img: 'images/circle-flower.jpg',

    },
    {
        name: 'woman',
        img: 'images/woman.jpg',

    },
    {
        name: 'girl',
        img: 'images/girl.png',

    },
    {
        name: 'motor',
        img: 'images/motor.png',

    },
    {
        name: 'lionfish',
        img: 'images/lionfish.png',

    },
    {
        name: 'flower',
        img: 'images/flower.jpg',

    },
    {
        name: 'circleflower',
        img: 'images/circle-flower.jpg',

    },
    {
        name: 'woman',
        img: 'images/woman.jpg',

    },
    {
        name: 'girl',
        img: 'images/girl.png',

    },
    {
        name: 'motor',
        img: 'images/motor.png',

    },
    {
        name: 'lionfish',
        img: 'images/lionfish.png',

    },
]

cardArray.sort(() => 0.5 - Math.random())


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/green.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
        // console.log(card, i)

    }
}
createBoard()

console.log(cardArray)

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')

    if (chosenCards[0] === chosenCards[1]) {
        cards[chosenCardsId[0]].style.visibility = "hidden";
        cards[chosenCardsId[1]].style.visibility = "hidden";
        cards[chosenCardsId[0]].removeEventListener('click', flipCard)
        cards[chosenCardsId[1]].removeEventListener('click', flipCard)
        winnerCards.push(chosenCards)
    } else {
        cards[chosenCardsId[0]].setAttribute('src', 'images/green.jpg')
        cards[chosenCardsId[1]].setAttribute('src', 'images/green.jpg')
    }
    document.getElementById('score').innerHTML = winnerCards.length
    chosenCards = []
    chosenCardsId = []
    
    if (winnerCards.length === cardArray.length/2) {
        alert('Nice you found all of them!!')
    }
    
}

let clicks = 0

function flipCard() {
    clicks ++
    document.getElementById('clicks').innerHTML = Math.floor(clicks / 2) 
    let cardId = this.getAttribute('data-id')
    chosenCards.push(cardArray[cardId].name) 
    chosenCardsId.push(cardId)
    console.log(chosenCards)
    this.setAttribute('src', cardArray[cardId].img)
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500)
    }
}












