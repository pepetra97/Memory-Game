const cardsArray = [
    {
        name: 'circleFlower',
        img: "/images/circle-flower.jpg",
    },
    {
        name: 'flower',
        img: "/images/flower.jpg",
    },
    {
        name: 'girl',
        img: "/images/girl.png",
    },
    {
        name: 'lionfish',
        img: "/images/lionfish.png",
    },
    {
        name: 'motor',
        img: "/images/motor.png",
    },
    {
        name: 'woman',
        img: "/images/woman.jpg",
    },
    {
        name: 'circleFlower',
        img: "/images/circle-flower.jpg",
    },
    {
        name: 'flower',
        img: "/images/flower.jpg",
    },
    {
        name: 'girl',
        img: "/images/girl.png",
    },
    {
        name: 'lionfish',
        img: "/images/lionfish.png",
    },
    {
        name: 'motor',
        img: "/images/motor.png",
    },
    {
        name: 'woman',
        img: "/images/woman.jpg",
    }
]

//IMPORTANT!!!  Array: []   Object: {key: value}

//https://www.youtube.com/watch?v=n3NKGsM3iEw&ab_channel=theroadmap  - TUTORIAL

//methods:

//for of: get every object in the array separately
function forOf() {
    for(let cards of cardsArray) {
        console.log(cards)
    }
}
//forOf()

//for in: get keys in objects separately + value
function forInKeys() {
    const card = cardsArray[0]
    for (let cardDetail in card) {
        console.log(cardDetail)        // ---> key of object
        
    }
}
//forInKeys()

function forInValues() {
    const card = cardsArray[0]
    for (let cardDetail in cardsArray) {
        console.log(cardDetail)  // ---> number of object (all cardsArray)
    }
    for (let cardDetail in card) {
        console.log(card[cardDetail])  // ---> values of card
    }
}
//forInValues()

//Filter() : returning objects that pass the given condition
function filtering() {
    let filtered = cardsArray.filter(card => {
        return card.name.length > 6
    })
    console.log(filtered) 
}
//filtering()

//find() : finding object by given value
function found() {
    let found = cardsArray.find(foundCard => {
        return foundCard.name === 'girl'
    })
    console.log(found)
}
//found()

//findIndex() : give the index of object by given value   //if value not exist it returns -1
function foundIndex() {
    let found = cardsArray.findIndex(foundCard => {
        return foundCard.name === 'girl'
    })
    console.log(found)
}
//foundIndex()

//map() : gets value



