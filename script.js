const cardsArray = [
    {
        name: 'circleFlower',
        img: "images/circle-flower.jpg",
    },
    {
        name: 'flower',
        img: "images/flower.jpg",
    },
    {
        name: 'girl',
        img: "images/girl.png",
    },
    {
        name: 'lionfish',
        img: "images/lionfish.png",
    },
    {
        name: 'motor',
        img: "images/motor.png",
    },
    {
        name: 'woman',
        img: "images/woman.jpg",
    },
    {
        name: 'circleFlower',
        img: "images/circle-flower.jpg",
    },
    {
        name: 'flower',
        img: "images/flower.jpg",
    },
    {
        name: 'girl',
        img: "images/girl.png",
    },
    {
        name: 'lionfish',
        img: "images/lionfish.png",
    },
    {
        name: 'motor',
        img: "images/motor.png",
    },
    {
        name: 'woman',
        img: "images/woman.jpg",
    }
]


cardsArray.sort(() => 0.5 - Math.random())

let board = document.getElementById('grid')


function createBoard() {
    for(let i = 0; i <cardsArray.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'images/green.jpg')
        card.setAttribute('data-id', i)
        board.appendChild(card)
        console.log(card)

        card.addEventListener('click', swapCard)
    }
     
}
createBoard()

function swapCard() {

}


