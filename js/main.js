//deck array
let cardImgDir = "css/cardPNG/";
let deck = [
    //suit diamonds
    {cardVar: '2',
    cardSuit: 'diamonds',
    cardVal: 2,
    carImg: cardImgDir+"2_of_diamonds.png"
    },
    {cardVar: '3',
    cardSuit: 'diamonds',
    cardVal: 3,
    carImg: cardImgDir+"3_of_diamonds.png"
    },
    {cardVar: '4',
    cardSuit: 'diamonds',
    cardVal: 4,
    carImg: cardImgDir+"4_of_diamonds.png"
    },
    {cardVar: '5',
    cardSuit: 'diamonds',
    cardVal: 5,
    carImg: cardImgDir+"5_of_diamonds.png"
    },
    {cardVar: '6',
    cardSuit: 'diamonds',
    cardVal: 6,
    carImg: cardImgDir+"6_of_diamonds.png"
    },
    {cardVar: '7',
    cardSuit: 'diamonds',
    cardVal: 7,
    carImg: cardImgDir+"7_of_diamonds.png"
    },
    {cardVar: '8',
    cardSuit: 'diamonds',
    cardVal: 8,
    carImg: cardImgDir+"8_of_diamonds.png"
    },
    {cardVar: '9',
    cardSuit: 'diamonds',
    cardVal: 9,
    carImg: cardImgDir+"9_of_diamonds.png"
    }
    {cardVar: '10',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"10_of_diamonds.png"
    },
    {cardVar: 'Jack',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"jack_of_diamonds.png"
    },
    {cardVar: 'Queen',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"queen_of_diamonds.png"
    },
    {cardVar: 'King',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"king_of_diamonds.png"
    },
    {cardVar: 'Ace',
    cardSuit: 'diamonds',
    cardVal: 11,
    carImg: cardImgDir+"ace_of_diamonds.png"
    },
    //suit hearts
    {cardVar: '2',
    cardSuit: 'hearts',
    cardVal: 2,
    carImg: cardImgDir+"2_of_hearts.png"
    },
    {cardVar: '3',
    cardSuit: 'hearts',
    cardVal: 3,
    carImg: cardImgDir+"3_of_hearts.png"
    },
    {cardVar: '4',
    cardSuit: 'hearts',
    cardVal: 4,
    carImg: cardImgDir+"4_of_hearts.png"
    },
    {cardVar: '5',
    cardSuit: 'hearts',
    cardVal: 5,
    carImg: cardImgDir+"5_of_hearts.png"
    },
    {cardVar: '6',
    cardSuit: 'hearts',
    cardVal: 6,
    carImg: cardImgDir+"6_of_hearts.png"
    },
    {cardVar: '7',
    cardSuit: 'hearts',
    cardVal: 7,
    carImg: cardImgDir+"7_of_hearts.png"
    },
    {cardVar: '8',
    cardSuit: 'hearts',
    cardVal: 8,
    carImg: cardImgDir+"2_of_hearts.png"
    },
    {cardVar: '2',
    cardSuit: 'hearts',
    cardVal: 9,
    carImg: cardImgDir+"2_of_hearts.png"
    },
    {cardVar: '10',
    cardSuit: 'hearts',
    cardVal: 10,
    carImg: cardImgDir+"10_of_hearts.png"
    },
    {cardVar: 'Jack',
    cardSuit: 'diamonds',
    cardVal: 10,
    carImg: cardImgDir+"jack_of_hearts.png"
    },
    {cardVar: 'Queen',
    cardSuit: 'hearts',
    cardVal: 10,
    carImg: cardImgDir+"queen_of_hearts.png"
    },
    {cardVar: 'King',
    cardSuit: 'hearts',
    cardVal: 10,
    carImg: cardImgDir+"king_of_hearts.png"
    },
    {cardVar: 'Ace',
    cardSuit: 'hearts',
    cardVal: 11,
    carImg: cardImgDir+"ace_of_hearts.png"
    },
      //suit clubs
      {cardVar: '2',
      cardSuit: 'clubs',
      cardVal: 2,
      carImg: cardImgDir+"2_of_clubs.png"
      },
      {cardVar: '3',
      cardSuit: 'clubs',
      cardVal: 3,
      carImg: cardImgDir+"3_of_clubs.png"
      },
      {cardVar: '4',
      cardSuit: 'clubs',
      cardVal: 4,
      carImg: cardImgDir+"4_of_clubs.png"
      },
      {cardVar: '5',
      cardSuit: 'clubs',
      cardVal: 5,
      carImg: cardImgDir+"5_of_clubs.png"
      },
      {cardVar: '6',
      cardSuit: 'clubs',
      cardVal: 6,
      carImg: cardImgDir+"6_of_clubs.png"
      },
      {cardVar: '7',
      cardSuit: 'clubs',
      cardVal: 7,
      carImg: cardImgDir+"7_of_clubs.png"
      },
      {cardVar: '8',
      cardSuit: 'clubs',
      cardVal: 8,
      carImg: cardImgDir+"2_of_clubs.png"
      },
      {cardVar: '2',
      cardSuit: 'clubs',
      cardVal: 9,
      carImg: cardImgDir+"2_of_clubs.png"
      },
      {cardVar: '10',
      cardSuit: 'clubs',
      cardVal: 10,
      carImg: cardImgDir+"10_of_clubs.png"
      },
      {cardVar: 'Jack',
      cardSuit: 'diamonds',
      cardVal: 10,
      carImg: cardImgDir+"jack_of_clubs.png"
      },
      {cardVar: 'Queen',
      cardSuit: 'clubs',
      cardVal: 10,
      carImg: cardImgDir+"queen_of_clubs.png"
      },
      {cardVar: 'King',
      cardSuit: 'clubs',
      cardVal: 10,
      carImg: cardImgDir+"king_of_clubs.png"
      },
      {cardVar: 'Ace',
      cardSuit: 'clubs',
      cardVal: 11,
      carImg: cardImgDir+"ace_of_clubs.png"
      },
]
 //deck card variables   
let number = ['2', '3', '4' ,'5', '6', '7', '8', '9', '10']
let face = ['king', 'queen', 'jack', 'ace']
let suit = ['diamond', 'heart', 'diamond', 'heart']

//global vars and arrays
let playerName = "" 
let shuffledDeck = []
//let cardPlayed = (shuffledDeck[i].cardVar+" of "+shuffledDeck[i].cardSuit) //calls cardPlayed for message prompts



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

