//deck array
let cardImgDir = "css/cardPNG/";
let deck = [
    {cardVar: '2',
    cardSuit: 'diamonds',
    cardVal: 2,
    carImg: cardImgDir+"2_of_diamonds"
    },
    {cardVar: '3',
    cardSuit: 'diamonds',
    cardVal: 3,
    carImg: cardImgDir+"3_of_diamonds"
    },
    {cardVar: '4',
    cardSuit: 'diamonds',
    cardVal: 4,
    carImg: cardImgDir+"4_of_diamonds"
    },
    {cardVar: '5',
    cardSuit: 'diamonds',
    cardVal: 5,
    carImg: cardImgDir+"5_of_diamonds"
    },
    {cardVar: '6',
    cardSuit: 'diamonds',
    cardVal: 6,
    carImg: cardImgDir+"6_of_diamonds"
    },
]
    
let number = ['2', '3', '4' ,'5', '6', '7', '8', '9', '10']
let face = ['king', 'queen', 'jack', 'ace']
let suit = ['diamond', 'heart', 'diamond', 'heart']

//global vars and arrays
let playerName = "" 
let shuffledDeck = []



//functions
$(".onStartPrompt").submit(function(event){
    enteredName = $('input[name="onPlayerName').val()
    if (enteredName != "Enter Player Name"){
    playerName = enteredName
    }
    else {
        playerName = "Player"
    }
    console.log(playerName); //remove after debugging
    event.preventDefault();
})


//shuffleDeck()

